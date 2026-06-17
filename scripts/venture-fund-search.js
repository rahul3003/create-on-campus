const fs = require("fs");
const h = fs.readFileSync("C:/Users/User/createoncampus/scripts/coc-fresh.html", "utf8");
const id = "2VmBCE6Evx4bNQwk5hoRHjz9lg";
const idx = h.indexOf(id);
console.log(h.slice(idx - 800, idx + 200).replace(/\s+/g, " "));

// Search for framer component names near venture/fund in larger benefit section
const benefitIdx = h.indexOf('data-framer-name="Benefits"');
const benefit = h.slice(benefitIdx, benefitIdx + 80000);
const names = [...benefit.matchAll(/data-framer-name="([^"]+)"/g)].map((m) => m[1]);
console.log("\nBenefit names:", [...new Set(names)].join(", "));

// Look for create logo component
const createIdx = benefit.indexOf("create");
console.log("\ncreate in benefit at", createIdx);
if (createIdx > 0) console.log(benefit.slice(createIdx - 200, createIdx + 300));
