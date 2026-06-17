const fs = require("fs");
const h = fs.readFileSync("scripts/coc-fresh.html", "utf8");

const cssStart = h.indexOf("data-framer-css-ssr-minified");
const css = h.slice(cssStart, cssStart + 200000);

for (const cls of ["3ossdy", "1lblvzu", "framer-yucx86", "framer-1gc5q7o", "framer-1g45huf", "framer-1ddnrav", "framer-1s2nizm", "framer-b849g5", "framer-a468qo"]) {
  const re = new RegExp(`\\.framer-[\\w-]*${cls}[^{]*\\{[^}]+\\}`, "g");
  const matches = css.match(re) || [];
  console.log(`\n=== ${cls} (${matches.length}) ===`);
  matches.slice(0, 3).forEach((m) => console.log(m.slice(0, 500)));
}

// Also search for preset definitions
const presetRe = /framer-styles-preset-3ossdy[^}]+}/g;
const presets = css.match(presetRe) || [];
console.log("\n=== preset 3ossdy ===");
presets.slice(0, 2).forEach((p) => console.log(p));

const preset2 = css.match(/framer-styles-preset-1lblvzu[^}]+}/g) || [];
console.log("\n=== preset 1lblvzu ===");
preset2.slice(0, 2).forEach((p) => console.log(p));
