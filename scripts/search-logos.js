const fs = require("fs");
const h = fs.readFileSync("C:/Users/User/AppData/Local/Temp/coc.html", "utf8");

const images = [
  "NEoNwnWW3rt9M3i5TEv0TiI6soA",
  "HtAg7rEkB3WsWhNkFJAGRIn83Y",
  "2VmBCE6Evx4bNQwk5hoRHjz9lg",
  "6mcf62RlDfRfU61Yg5vb2pefpi4",
  "SZQbTKGRfCSkWsYSy7E2hENhGNY",
  "mNEH8UnClPLODckduxy0Wc59k4",
];

for (const id of images) {
  const idx = h.indexOf(id);
  if (idx < 0) continue;
  const chunk = h.slice(idx - 500, idx + 500);
  const names = [...chunk.matchAll(/data-framer-name="([^"]+)"/g)].map((m) => m[1]);
  console.log(id, "->", [...new Set(names)].join(", "));
}

// find aarambh in svg or text nodes
const aIdx = h.toLowerCase().indexOf("aarambh");
console.log("aarambh idx", aIdx);
if (aIdx >= 0) console.log(h.slice(aIdx - 200, aIdx + 300));
