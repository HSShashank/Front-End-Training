// Function to check odd and even numbers
// Function declaration method
function checkNum(num) {
  if (num === 0) {
    console.log("ENTER NUMBER AGAIN");
  } else if (num % 2 === 0) {
    console.log("EVEN");
  } else {
    console.log("ODD");
  }
}
// console.log(checkNum(10));
// Function expression method
var EvenOdd = function (num) {
  if (num === 0) {
    console.log("ENTER NUMBER AGAIN");
  } else if (num % 2 === 0) {
    console.log("EVEN");
  } else {
    console.log("ODD");
  }
};
console.log(EvenOdd(0));

console.log("Simple Calculator");
var a = 10;
var b = 20;
var sum = a + b;
var diff = b - a;
var prod = a * b;
var quot = b / a;
var rem = a % b;
console.log("Sum is ", sum);
console.log("Difference is ", diff);
console.log("Prodcut is ", prod);
console.log("Quotient is ", quot);
console.log("Remainder is ", rem);
