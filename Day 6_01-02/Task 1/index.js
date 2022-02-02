import "./styles.css";
var parentElem = document.getElementById("app");
var newElem = document.createElement("div");
var newElemOne = document.createElement("div");
var childElem = document.getElementById("first");

newElem.textContent = "I am the new Element";
newElemOne.textContent = "I am the new replaced Element";
//Printing parent node
console.log("Parent Node is:", childElem.parentNode);
//Printing First element child
console.log("First Child Node is:", parentElem.firstElementChild);
//Printing Last element child
console.log("Last Child Node is:", parentElem.lastElementChild);
//Printing Next sibling node
console.log(
  "Next Sibling Node of first child is:",
  parentElem.firstElementChild.nextElementSibling
);
//Printing Previous sibling node
console.log(
  "Previous Sibling Node of last child is:",
  parentElem.lastElementChild.previousElementSibling
);
//Printing New Element node
parentElem.appendChild(newElem);
console.log("The New Element is", newElem);

//Replacing an Element
parentElem.replaceChild(newElemOne, document.getElementById("third"));

//Removing an Element
parentElem.removeChild(parentElem.lastElementChild);
