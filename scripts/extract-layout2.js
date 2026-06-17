const fs = require("fs");
const h = fs.readFileSync("scripts/coc-fresh.html", "utf8");
const cssStart = h.indexOf("data-framer-css-ssr-minified");
const css = h.slice(cssStart, cssStart + 500000);

const patterns = ["yucx86", "1gc5q7o", "j58coo", "12a4xvy", "1bw8flc", "m4jvtz", "1tlur37", "1s2nizm", "i8ake0"];
for (const cls of patterns) {
  const idx = css.indexOf(`.framer-${cls}{`);
  if (idx >= 0) {
    console.log(`\n.framer-${cls}:`);
    console.log(css.slice(idx, idx + 400));
  }
}

// Orange square
const sq = css.indexOf(".framer-1rgo8mw{");
if (sq >= 0) console.log("\nOrange square:", css.slice(sq, sq + 300));
