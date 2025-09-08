# Hashira Assignment

This project solves the quadratic equation problem by:
- Reading encoded roots from a JSON file in Bayesian format
- Decoding them based on their base
- Building the polynomial equation
- Extracting the constant term `c`

## How to Run

```bash
node hashira.js


#Output 1
Roots: [ 4, 7, 12 ]
Polynomial Coefficients: [ 1, -23, 160, -336 ]
Constant term c: -336

#Output2
Roots: [
  995085094601491,
  320923294898495940,
  196563650089608580,
  1016509518118225900,
  3711974121218450000,
  10788619898233491000,
  26709394976508342000
]
Polynomial Coefficients: [
  1,
  -42744980544161220000,
  4.911967944520361e+38,
  -1.7500155103998027e+57,
  1.896953661197784e+75,
  -6.594229823874963e+92,
  6.9242722857828945e+109,
  -6.825131192247423e+124
]
Constant term c: -6.825131192247423e+124