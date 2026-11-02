// A small QR Code encoder: byte mode, error correction L or M, versions 1 to 20.
// Written for this project so the page needs no library and makes no request.
// Output is a matrix of booleans, or an inline SVG string (black on white, with
// the four-module quiet zone the standard asks for).
//
// build/check-family.mjs decodes what this produces with an independent reader
// and compares the matrix with a reference encoder.
const FamilyQR = (function () {
  // [error-correction codewords per block, [[blocks, data codewords per block], ...]]
  const BLOCKS = {
    L: [[7,[[1,19]]],[10,[[1,34]]],[15,[[1,55]]],[20,[[1,80]]],[26,[[1,108]]],[18,[[2,68]]],[20,[[2,78]]],[24,[[2,97]]],[30,[[2,116]]],[18,[[2,68],[2,69]]],[20,[[4,81]]],[24,[[2,92],[2,93]]],[26,[[4,107]]],[30,[[3,115],[1,116]]],[22,[[5,87],[1,88]]],[24,[[5,98],[1,99]]],[28,[[1,107],[5,108]]],[30,[[5,120],[1,121]]],[28,[[3,113],[4,114]]],[28,[[3,107],[5,108]]]],
    M: [[10,[[1,16]]],[16,[[1,28]]],[26,[[1,44]]],[18,[[2,32]]],[24,[[2,43]]],[16,[[4,27]]],[18,[[4,31]]],[22,[[2,38],[2,39]]],[22,[[3,36],[2,37]]],[26,[[4,43],[1,44]]],[30,[[1,50],[4,51]]],[22,[[6,36],[2,37]]],[22,[[8,37],[1,38]]],[24,[[4,40],[5,41]]],[24,[[5,41],[5,42]]],[28,[[7,45],[3,46]]],[28,[[10,46],[1,47]]],[26,[[9,43],[4,44]]],[26,[[3,44],[11,45]]],[26,[[3,41],[13,42]]]]
  };
  const FORMAT_BITS = { L: 1, M: 0 };
  const MAX_VERSION = 20;

  function dataCodewords(version, ecc) {
    return BLOCKS[ecc][version - 1][1].reduce((sum, group) => sum + group[0] * group[1], 0);
  }

  function utf8(text) {
    if (typeof TextEncoder !== "undefined") return Array.from(new TextEncoder().encode(text));
    return Array.from(Buffer.from(text, "utf8"));
  }

  // Smallest version that holds the bytes, or 0 when none of 1..20 does.
  function versionFor(byteLength, ecc) {
    for (let version = 1; version <= MAX_VERSION; version += 1) {
      const countBits = version < 10 ? 8 : 16;
      if (4 + countBits + byteLength * 8 <= dataCodewords(version, ecc) * 8) return version;
    }
    return 0;
  }

  // Galois field 2^8 with the QR polynomial 0x11d.
  const EXP = new Array(512);
  const LOG = new Array(256);
  (function () {
    let value = 1;
    for (let i = 0; i < 255; i += 1) {
      EXP[i] = value;
      LOG[value] = i;
      value <<= 1;
      if (value & 0x100) value ^= 0x11d;
    }
    for (let i = 255; i < 512; i += 1) EXP[i] = EXP[i - 255];
  })();

  function multiply(a, b) {
    return a === 0 || b === 0 ? 0 : EXP[LOG[a] + LOG[b]];
  }

  function generator(degree) {
    let poly = [1];
    for (let i = 0; i < degree; i += 1) {
      const next = new Array(poly.length + 1).fill(0);
      poly.forEach((coefficient, j) => {
        next[j] ^= coefficient;
        next[j + 1] ^= multiply(coefficient, EXP[i]);
      });
      poly = next;
    }
    return poly;
  }

  function remainder(data, degree) {
    const gen = generator(degree);
    const work = data.concat(new Array(degree).fill(0));
    for (let i = 0; i < data.length; i += 1) {
      const factor = work[i];
      if (factor !== 0) for (let j = 0; j < gen.length; j += 1) work[i + j] ^= multiply(gen[j], factor);
    }
    return work.slice(data.length);
  }

  function codewords(bytes, version, ecc) {
    const bits = [];
    const push = (value, length) => { for (let i = length - 1; i >= 0; i -= 1) bits.push((value >>> i) & 1); };
    push(0b0100, 4);
    push(bytes.length, version < 10 ? 8 : 16);
    bytes.forEach((byte) => push(byte, 8));
    const capacity = dataCodewords(version, ecc) * 8;
    push(0, Math.min(4, capacity - bits.length));
    while (bits.length % 8) bits.push(0);
    const data = [];
    for (let i = 0; i < bits.length; i += 8) data.push(parseInt(bits.slice(i, i + 8).join(""), 2));
    for (let pad = 0xec; data.length < capacity / 8; pad ^= 0xec ^ 0x11) data.push(pad);

    const [eccLength, groups] = BLOCKS[ecc][version - 1];
    const blocks = [];
    let offset = 0;
    groups.forEach(([count, size]) => {
      for (let i = 0; i < count; i += 1) {
        const block = data.slice(offset, offset + size);
        offset += size;
        blocks.push({ data: block, ecc: remainder(block, eccLength) });
      }
    });
    const out = [];
    const longest = Math.max(...blocks.map((block) => block.data.length));
    for (let i = 0; i < longest; i += 1) blocks.forEach((block) => { if (i < block.data.length) out.push(block.data[i]); });
    for (let i = 0; i < eccLength; i += 1) blocks.forEach((block) => out.push(block.ecc[i]));
    return out;
  }

  function alignmentPositions(version) {
    if (version === 1) return [];
    const count = Math.floor(version / 7) + 2;
    const last = version * 4 + 10;
    const step = version === 32 ? 26 : Math.ceil((last - 6) / (count - 1) / 2) * 2;
    const out = [6];
    for (let i = count - 2; i >= 0; i -= 1) out.splice(1, 0, last - step * (count - 2 - i));
    return out;
  }

  function bchFormat(data) {
    let rem = data;
    for (let i = 0; i < 10; i += 1) rem = (rem << 1) ^ ((rem >>> 9) * 0x537);
    return ((data << 10) | rem) ^ 0x5412;
  }

  function bchVersion(version) {
    let rem = version;
    for (let i = 0; i < 12; i += 1) rem = (rem << 1) ^ ((rem >>> 11) * 0x1f25);
    return (version << 12) | rem;
  }

  const MASKS = [
    (r, c) => (r + c) % 2 === 0,
    (r) => r % 2 === 0,
    (r, c) => c % 3 === 0,
    (r, c) => (r + c) % 3 === 0,
    (r, c) => (Math.floor(r / 2) + Math.floor(c / 3)) % 2 === 0,
    (r, c) => ((r * c) % 2) + ((r * c) % 3) === 0,
    (r, c) => (((r * c) % 2) + ((r * c) % 3)) % 2 === 0,
    (r, c) => (((r + c) % 2) + ((r * c) % 3)) % 2 === 0
  ];

  function build(codes, version, ecc, mask) {
    const size = version * 4 + 17;
    const grid = Array.from({ length: size }, () => new Array(size).fill(false));
    const fixed = Array.from({ length: size }, () => new Array(size).fill(false));
    const set = (r, c, dark) => { grid[r][c] = dark; fixed[r][c] = true; };

    const finder = (top, left) => {
      for (let dr = -1; dr <= 7; dr += 1) {
        for (let dc = -1; dc <= 7; dc += 1) {
          const r = top + dr;
          const c = left + dc;
          if (r < 0 || c < 0 || r >= size || c >= size) continue;
          const ring = Math.max(Math.abs(dr - 3), Math.abs(dc - 3));
          set(r, c, ring !== 2 && ring !== 4);
        }
      }
    };
    finder(0, 0); finder(0, size - 7); finder(size - 7, 0);

    for (let i = 8; i < size - 8; i += 1) { set(6, i, i % 2 === 0); set(i, 6, i % 2 === 0); }
    const positions = alignmentPositions(version);
    positions.forEach((pr) => positions.forEach((pc) => {
      // Not where a finder pattern already stands; the timing line is fine.
      if ((pr <= 8 && pc <= 8) || (pr <= 8 && pc >= size - 9) || (pr >= size - 9 && pc <= 8)) return;
      for (let dr = -2; dr <= 2; dr += 1) for (let dc = -2; dc <= 2; dc += 1) set(pr + dr, pc + dc, Math.max(Math.abs(dr), Math.abs(dc)) !== 1);
    }));

    // Reserve the format and version areas, then fill them below.
    for (let i = 0; i < 9; i += 1) { if (!fixed[8][i]) set(8, i, false); if (!fixed[i][8]) set(i, 8, false); }
    for (let i = 0; i < 8; i += 1) { set(8, size - 1 - i, false); set(size - 1 - i, 8, false); }
    set(size - 8, 8, true);
    if (version >= 7) {
      const info = bchVersion(version);
      for (let i = 0; i < 18; i += 1) {
        const dark = ((info >>> i) & 1) === 1;
        const a = Math.floor(i / 3);
        const b = (i % 3) + size - 11;
        set(a, b, dark);
        set(b, a, dark);
      }
    }

    // Data, in two-column strips from the bottom right, upwards then downwards.
    const bits = [];
    codes.forEach((code) => { for (let i = 7; i >= 0; i -= 1) bits.push((code >>> i) & 1); });
    let index = 0;
    let upward = true;
    for (let right = size - 1; right >= 1; right -= 2) {
      if (right === 6) right = 5;
      for (let step = 0; step < size; step += 1) {
        const r = upward ? size - 1 - step : step;
        for (let k = 0; k < 2; k += 1) {
          const c = right - k;
          if (fixed[r][c]) continue;
          let dark = index < bits.length ? bits[index] === 1 : false;
          index += 1;
          if (MASKS[mask](r, c)) dark = !dark;
          grid[r][c] = dark;
        }
      }
      upward = !upward;
    }

    // Format information, twice.
    const format = bchFormat((FORMAT_BITS[ecc] << 3) | mask);
    const bit = (i) => ((format >>> i) & 1) === 1;
    for (let i = 0; i <= 5; i += 1) grid[i][8] = bit(i);
    grid[7][8] = bit(6); grid[8][8] = bit(7); grid[8][7] = bit(8);
    for (let i = 9; i < 15; i += 1) grid[8][14 - i] = bit(i);
    for (let i = 0; i < 8; i += 1) grid[8][size - 1 - i] = bit(i);
    for (let i = 8; i < 15; i += 1) grid[size - 15 + i][8] = bit(i);
    grid[size - 8][8] = true;
    return grid;
  }

  function penalty(grid) {
    const size = grid.length;
    let score = 0;
    const runs = (line) => {
      let total = 0;
      let run = 1;
      for (let i = 1; i < size; i += 1) {
        if (line[i] === line[i - 1]) run += 1;
        else { if (run >= 5) total += run - 2; run = 1; }
      }
      return run >= 5 ? total + run - 2 : total;
    };
    for (let i = 0; i < size; i += 1) {
      score += runs(grid[i]);
      score += runs(grid.map((row) => row[i]));
    }
    for (let r = 0; r < size - 1; r += 1) {
      for (let c = 0; c < size - 1; c += 1) {
        const v = grid[r][c];
        if (v === grid[r][c + 1] && v === grid[r + 1][c] && v === grid[r + 1][c + 1]) score += 3;
      }
    }
    const pattern = (line, at) => {
      const p = [true, false, true, true, true, false, true];
      for (let k = 0; k < 7; k += 1) if (line[at + k] !== p[k]) return false;
      const light = (from) => { for (let k = 0; k < 4; k += 1) { const i = from + k; if (i >= 0 && i < size && line[i]) return false; } return true; };
      return light(at - 4) || light(at + 7);
    };
    for (let i = 0; i < size; i += 1) {
      const column = grid.map((row) => row[i]);
      for (let at = 0; at <= size - 7; at += 1) {
        if (pattern(grid[i], at)) score += 40;
        if (pattern(column, at)) score += 40;
      }
    }
    let dark = 0;
    grid.forEach((row) => row.forEach((cell) => { if (cell) dark += 1; }));
    score += Math.floor(Math.abs(dark * 20 - size * size * 10) / (size * size)) * 10;
    return score;
  }

  // text -> { version, size, ecc, mask, modules } or null when it does not fit.
  function encode(text, options) {
    const opts = options || {};
    const ecc = opts.ecc === "L" ? "L" : "M";
    const bytes = utf8(String(text));
    const version = versionFor(bytes.length, ecc);
    if (!version) return null;
    const codes = codewords(bytes, version, ecc);
    let best = null;
    const masks = typeof opts.mask === "number" ? [opts.mask] : [0, 1, 2, 3, 4, 5, 6, 7];
    masks.forEach((mask) => {
      const grid = build(codes, version, ecc, mask);
      const score = penalty(grid);
      if (!best || score < best.score) best = { grid, score, mask };
    });
    return { version, size: best.grid.length, ecc, mask: best.mask, modules: best.grid };
  }

  // An SVG that scales to whatever box it is put in. One path, so it stays small.
  function toSVG(text, options) {
    const code = encode(text, options);
    if (!code) return "";
    const quiet = 4;
    const total = code.size + quiet * 2;
    let path = "";
    code.modules.forEach((row, r) => {
      let c = 0;
      while (c < row.length) {
        if (!row[c]) { c += 1; continue; }
        let end = c;
        while (end < row.length && row[end]) end += 1;
        path += "M" + (c + quiet) + " " + (r + quiet) + "h" + (end - c) + "v1h-" + (end - c) + "z";
        c = end;
      }
    });
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + total + " " + total + '" shape-rendering="crispEdges" role="img" aria-label="' +
      ((options && options.label) || "QR code") + '"><rect width="' + total + '" height="' + total + '" fill="#fff"/><path d="' + path + '" fill="#000"/></svg>';
  }

  return { encode, toSVG, versionFor, MAX_VERSION };
})();

if (typeof module !== "undefined" && module.exports) module.exports = FamilyQR;
