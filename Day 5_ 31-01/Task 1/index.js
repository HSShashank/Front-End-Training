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

