const fs = require("fs");
const h = fs.readFileSync("scripts/coc-fresh.html", "utf8");
const cssStart = h.indexOf("data-framer-css-ssr-minified");
const css = h.slice(cssStart, cssStart + 500000);

// Find layout rules for about section classes
const classes = [
  "yucx86", "1gc5q7o", "1g45huf", "1ddnrav",
  "j58coo", "12a4xvy", "1bw8flc", "1b22uom",
  "1s2nizm", "b849g5", "a468qo", "1k6syo1",
  "1rgo8mw", "m4jvtz", "15xltt4", "1tlur37", "4vrko"
];

for (const cls of classes) {
  const re = new RegExp(`\\.framer-${cls}\\{[^}]+\\}`, "g");
  const matches = css.match(re) || [];
  if (matches.length) {
    console.log(`\n.framer-${cls}:`);
    matches.forEach((m) => console.log(m));
  }
}
