// news-image-20261125: stage the Wednesday 25 November 2026 front page.
// The poster is drawn by draw.py (a local build tool, not in this repo);
// this program only validates the finished image and copies it to the
// harness output directory, byte for byte. No network, no randomness.
import { mkdirSync, copyFileSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const src = join(root, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const dst = join(outDir, "entry.png");

const png = readFileSync(src);
const sig = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!png.subarray(0, 8).equals(sig)) throw new Error("entry.png is not a PNG");
const width = png.readUInt32BE(16);
const height = png.readUInt32BE(20);
if (width !== 1024 || height !== 1024) {
  throw new Error("entry.png is " + width + "x" + height + ", expected 1024x1024");
}
if (png.length > 1024 * 1024) {
  throw new Error("entry.png is " + png.length + " bytes, over the 1 MiB limit");
}

// Stage the image, then read it back and compare every byte: the harness
// runs this program twice and both runs must write the same bytes.
mkdirSync(outDir, { recursive: true });
copyFileSync(src, dst);
const staged = readFileSync(dst);
if (!staged.equals(png)) throw new Error("staged entry.png differs from entry.png");
console.log("staged " + dst + " (" + staged.length + " bytes, 1024x1024)");
