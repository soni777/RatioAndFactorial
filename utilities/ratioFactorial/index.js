function ratioAndFactorial(num1, num2, num3) {
  let obj = { ratio: ratios(num1, num2), factorial: fact(num3) };
  return obj;
}

let ratios = require("../ratio/index");
let fact = require("../factorial/index");

module.exports = ratioAndFactorial;
// console.log(ratioAndFactorial(10, 5, 2));
