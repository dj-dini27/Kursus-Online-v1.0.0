#!/usr/bin/env node
/**
 * Pemeriksa aturan desain (lihat DESIGN.md).
 * Gagal jika menemukan ukuran/ warna acak atau Navbar/Footer ganda.
 *
 * Jalankan: npm run check:design
 */
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const TARGETS = ["app", "components"];

const RULES = [
  {
    name: "Ukuran font acak",
    pattern: /text-\[[0-9.]+rem\]/g,
    hint: "pakai text-display-*, text-eyebrow, text-meta, text-micro, atau text-label",
  },
  {
    name: "Tracking acak",
    pattern: /tracking-\[[^\]]*\]/g,
    hint: "pakai tracking-display, tracking-eyebrow, tracking-label, atau tracking-button",
  },
  {
    name: "Line-height acak",
    pattern: /leading-\[[0-9.]+\]/g,
    hint: "pakai leading-display atau leading-display-tight",
  },
  {
    name: "Warna putih/hitam hardcode",
    pattern: /(?:bg|text|border)-(?:white|black)\b/g,
    hint: "pakai token background/foreground",
  },
  {
    name: "Palet warna Tailwind hardcode",
    pattern:
      /\b(?:bg|text|border|from|via|to)-(?:indigo|zinc|slate|gray|blue|red|green|yellow|emerald|purple|pink|orange|teal|cyan|violet|fuchsia|rose|lime|amber|sky)-[0-9]{2,3}\b/g,
    hint: "pakai token warna di app/globals.css",
  },
];

const NAV_RULE = {
  pattern: /<(?:Navbar|Footer)\s*\/>/g,
  hint: "Navbar/Footer hanya boleh dirender di app/layout.tsx",
};

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(full)));
    else if (entry.name.endsWith(".tsx")) files.push(full);
  }
  return files;
}

function lineOf(content, index) {
  return content.slice(0, index).split("\n").length;
}

const files = (await Promise.all(TARGETS.map((target) => walk(path.join(ROOT, target))))).flat();
const violations = [];

for (const file of files) {
  const content = await readFile(file, "utf8");
  const relative = path.relative(ROOT, file);

  for (const rule of RULES) {
    for (const match of content.matchAll(rule.pattern)) {
      violations.push({
        file: relative,
        line: lineOf(content, match.index ?? 0),
        value: match[0],
        rule: rule.name,
        hint: rule.hint,
      });
    }
  }

  if (relative !== path.join("app", "layout.tsx")) {
    for (const match of content.matchAll(NAV_RULE.pattern)) {
      violations.push({
        file: relative,
        line: lineOf(content, match.index ?? 0),
        value: match[0],
        rule: "Navbar/Footer ganda",
        hint: NAV_RULE.hint,
      });
    }
  }
}

if (violations.length === 0) {
  console.log(`✓ Aturan desain OK — ${files.length} file diperiksa.`);
  process.exit(0);
}

console.error(`✗ Ditemukan ${violations.length} pelanggaran aturan desain:\n`);
for (const v of violations) {
  console.error(`  ${v.file}:${v.line}  ${v.value}`);
  console.error(`    ${v.rule} → ${v.hint}`);
}
process.exit(1);
