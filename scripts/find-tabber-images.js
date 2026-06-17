const fs = require("fs");
const h = fs.readFileSync("C:/Users/User/createoncampus/scripts/coc-fresh.html", "utf8");

// All png/jpeg in tabber/benefit area
const tabberIdx = h.indexOf("data-framer-name=\"Tabber\"");
console.log("tabber at", tabberIdx);
if (tabberIdx > 0) {
  const chunk = h.slice(tabberIdx, tabberIdx + 15000);
  const imgs = [...chunk.matchAll(/images\/([A-Za-z0-9_-]+)\.(png|jpg|jpeg|svg)/g)];
  console.log("images in tabber:", [...new Set(imgs.map((m) => m[1] + "." + m[2]))]);
}

// Search for create venture fund logo components
for (const term of ["2VmBCE6", "NEoNwn", "HtAg7r", "SZQbTKGR", "svg", "aarambh", "Aarambh", "cocreate", "CoCreate"]) {
  const i = h.indexOf(term);
  console.log(term, i >= 0 ? "found at " + i : "not found");
}

// extract all unique png urls
const pngs = [...new Set([...h.matchAll(/framerusercontent\.com\/images\/[A-Za-z0-9_-]+\.png/g)].map(m => m[0]))];
console.log("\nAll PNGs:", pngs);
