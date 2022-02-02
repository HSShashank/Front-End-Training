let arrOne = [1, 2, 3, 4, 5];
let arrTwo = [9, 8, 7, 6];

const employee = {
  fName: "James",
  lName: "Bond",
  salary: 100
};

//Array Destructuring
let [x, y] = arrOne;
// let [a, _, b] = arrTwo;
console.log(x, y);
// console.log(a, b);

//Object Destructuring
// let {fName:fn, lName:ln} = employee;
console.log(fn, ln);
//Default values
let { fName: fn, lName: ln, age = 32 } = employee;
console.log(fn, ln, age);
console.log(employee);

//rest parameter

function sum(...args) {
  console.log(args);
}
sum(1, 2, "a");

//Spread Operator

let arrSamp = [1, 2, arrTwo, arrOne];
console.log(arrSamp);
