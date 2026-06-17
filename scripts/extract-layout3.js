const fs = require("fs");
const h = fs.readFileSync("scripts/coc-fresh.html", "utf8");
const cssStart = h.indexOf("data-framer-css-ssr-minified");
const css = h.slice(cssStart, cssStart + 500000);

const chunk = css.slice(css.indexOf(".framer-ObTUi .framer-yucx86"), css.indexOf(".framer-ObTUi .framer-yucx86") + 3000);
console.log(chunk);
