const fs = require("fs");
const h = fs.readFileSync("C:/Users/User/AppData/Local/Temp/coc.html", "utf8");
const m = [...h.matchAll(/https:\/\/framerusercontent\.com\/images\/[A-Za-z0-9_-]+\.(png|jpg|jpeg|svg|webp)[^"'\s]*/g)];
[...new Set(m.map((x) => x[0].split("?")[0]))].forEach((u) => console.log(u));
