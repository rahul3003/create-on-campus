const fs = require("fs");
const h = fs.readFileSync("C:/Users/User/AppData/Local/Temp/coc.html", "utf8");

// Find all img src and nearby text
const imgRegex = /src="(https:\/\/framerusercontent\.com\/images\/[^"]+)"/g;
let match;
const imgs = [];
while ((match = imgRegex.exec(h)) !== null) {
  const idx = match.index;
  const context = h.slice(Math.max(0, idx - 300), idx + 200);
  imgs.push({ src: match[1].split("?")[0], context: context.replace(/\s+/g, " ").slice(0, 250) });
}

// unique
const seen = new Set();
for (const img of imgs) {
  if (seen.has(img.src)) continue;
  seen.add(img.src);
  if (img.src.includes(".png") || img.src.includes("jpeg") || img.src.includes(".jpg")) {
    console.log(img.src);
    console.log("  ", img.context.slice(-120));
    console.log();
  }
}

// search text content
const texts = [
  "not for profit Foundation",
  "75+ Industries",
  "SEBI approved",
  "demonstratable product",
  "aarambh",
  "Learn about our Fund",
  "Learn about our Foundation",
];
for (const t of texts) {
  if (h.includes(t)) console.log("FOUND TEXT:", t);
}
