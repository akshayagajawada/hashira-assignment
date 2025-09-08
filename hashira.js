const fs = require("fs");

// Step 1: Read JSON file
const data = JSON.parse(fs.readFileSync("input.json", "utf-8"));

// Step 2: Extract keys
const n = data.keys.n;
const k = data.keys.k;

// Step 3: Convert roots to decimal
let roots = [];
let count = 0;
for (let key in data) {
    if (key === "keys") continue;
    let base = parseInt(data[key].base);
    let value = data[key].value;
    let root = parseInt(value, base); // base conversion
    roots.push(root);
    count++;
    if (count === k) break; // take only first k roots
}

console.log("Roots:", roots);

// Step 4: Build polynomial coefficients
let coeffs = [1]; // start with polynomial 1

for (let r of roots) {
    let newCoeffs = new Array(coeffs.length + 1).fill(0);

    for (let i = 0; i < coeffs.length; i++) {
        newCoeffs[i] += coeffs[i];          // multiply by x
        newCoeffs[i + 1] -= coeffs[i] * r;  // multiply by -r
    }
    coeffs = newCoeffs;
}

// Step 5: Print polynomial and constant
console.log("Polynomial Coefficients:", coeffs);
console.log("Constant term c:", coeffs[coeffs.length - 1]);
