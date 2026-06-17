const fs = require("fs");
const h = fs.readFileSync("scripts/live.html", "utf8");
const mods = [...h.matchAll(/https:\/\/framerusercontent\.com\/[^"'\s)]+/g)].map((m) => m[0]);
console.log([...new Set(mods)].join("\n"));
