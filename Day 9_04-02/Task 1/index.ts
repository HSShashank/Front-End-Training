//Datatypes in TypeScript

let num: number = 12;
let str: string = "Hello";
console.log(num, str);

//Template Literals in JS
console.log(`${num} Anything I type here is same to same ${str}`);

//Arrays

let arr: number[] = [9, 8, 7]; //Array of type number
let arrMix: (number | string)[] = [1, 2, "Three"]; //Mixed type
console.log(arrMix);

//Objects
let emp: {
  fName: string;
  lName: string;
  salary: number;
} = {
  fName: "James",
  lName: "Bond",
  salary: 250
};
console.log(emp);

//Tuple
let d: [string, number];
let d1: [string, any];
d = ["tech", 24];
d1 = ["techno", "skil"];
console.log(d, d1);
