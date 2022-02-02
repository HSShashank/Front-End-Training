let arrMain = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Multiplying the array by a number using map()
let arrMap = arrMain.map((num) => num * 2);
// console.log(arrMap);

//Getting odd and even numbers from an array using filter()
let arrOdd = arrMain.filter((num) => num % 2 !== 0);
console.log("Odd Numbers:", arrOdd);
let arrEven = arrMain.filter((num) => num % 2 === 0);
console.log("Even Numbers:", arrEven);

//Getting the sum of numbers using reduce()
let sum = arrMain.reduce((result, item) => result + item, 0);
let prod = arrMain.reduce((result, item) => result * item, 1);
console.log("The sum of the elements in the array is:", sum);
console.log("The factorial of the length of the array is:", prod);
