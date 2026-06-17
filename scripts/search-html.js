const fs = require("fs");
const h = fs.readFileSync("C:/Users/User/AppData/Local/Temp/coc.html", "utf8");

const patterns = [
  "not for profit Foundation",
  "deeptech",
  "SEBI approved",
  "75+ Industries",
  "Learn about",
  "6mcf62RlDfRfU61Yg5vb2pefpi4",
  "2VmBCE6Evx4bNQwk5hoRHjz9lg",
  "SZQbTKGRfCSkWsYSy7E2hENhGNY",
];

for (const p of patterns) {
  const idx = h.indexOf(p);
  if (idx >= 0) {
    console.log("\n===", p, "===");
    console.log(h.slice(Math.max(0, idx - 200), idx + 300));
  }
}
