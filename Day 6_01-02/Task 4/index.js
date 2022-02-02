let arr = [1, 2, 3, 4, 5];
//Popping an element
// arr.pop();
// console.log("Array after popping", arr);

// //Pushing an element
// arr.push(10);
// console.log("Array after pushing", arr);

// //Shift
// arr.shift();
// console.log("Array after Shifting", arr);

// Unshift
// arr.unshift(8);
// console.log("Array after unshifting", arr);

//Slicing an Array
// let sliceArr = arr.slice(2, 4);
// console.log("Original Array", arr);
// console.log("Sliced Array", sliceArr);

//Splicing
//Removing Elements
// let spliceArr = arr.splice(1, 4);
//Adding and removing elements
let spliceArr = arr.splice(1, 4, 15, 16, 17, 18);
console.log("Original Array", arr);
console.log("Sliced Array", spliceArr);
