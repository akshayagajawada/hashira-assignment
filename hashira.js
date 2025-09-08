const fs = require("fs");
const data = JSON.parse(fs.readFileSync("input.json", "utf-8"));
const n = data.keys.n;
const k = data.keys.k;
let roots = [];
let count = 0;
for (let key in data) {
    if (key === "keys") continue;
    let base = parseInt(data[key].base);
    let value = data[key].value;
    let root = parseInt(value, base); 
    roots.push(root);
    count++;
    if (count === k) break; 
}
console.log("Roots:", roots);
let coeffs = [1]; // start with polynomial 1
for (let r of roots) {
    let newCoeffs = new Array(coeffs.length + 1).fill(0);
    for (let i = 0; i < coeffs.length; i++) {
        newCoeffs[i] += coeffs[i];          
        newCoeffs[i + 1] -= coeffs[i] * r;  
    coeffs = newCoeffs;
}
console.log("Polynomial Coefficients:", coeffs);
console.log("Constant term c:", coeffs[coeffs.length - 1]);
