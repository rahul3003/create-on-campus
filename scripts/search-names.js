const fs = require("fs");
const h = fs.readFileSync("C:/Users/User/AppData/Local/Temp/coc.html", "utf8");

const names = [...h.matchAll(/data-framer-name="([^"]+)"/g)].map((m) => m[1]);
const unique = [...new Set(names)];
const keywords = ["create", "aarambh", "Fund", "Foundation", "Venture", "Logo", "Tabber", "Benefit", "Orange"];
for (const k of keywords) {
  const matches = unique.filter((n) => n.toLowerCase().includes(k.toLowerCase()));
  if (matches.length) console.log(k + ":", matches.join(" | "));
}
