import "./styles.css";
// Working with attributes
var elemOne = document.getElementById("first");
var elemTwo = document.getElementById("last");
// console.log(elemOne);
// console.log(elemOne.nextElementSibling);

elemOne.setAttribute("class", "firstChild");
console.log(elemOne.nextElementSibling.getAttribute("id"));
console.log(elemOne.getAttribute("id"));

elemTwo.previousElementSibling.removeAttribute("id");

console.log(elemTwo.previousElementSibling);
console.log(elemTwo.previousElementSibling.hasAttribute("id"));
console.log(elemOne.nextElementSibling.hasAttribute("id"));
