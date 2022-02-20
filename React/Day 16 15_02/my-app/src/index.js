import React, {Component} from "react";
import ReactDOM from "react-dom";

//Class based Component
// class Greet extends React.Component{
//   render(){
//     return <h1>Hello</h1>
//   }
// }
// ReactDOM.render(<Greet/>, document.getElementById('root'));


//Function based Component

//Task 1
// const num = 12;
// const check = (val) =>{
//   if(val%2===0){
//     return "EVEN";
//   }
//   else{
//     return "ODD";
//   }
  
//   }
// const Element = () => {
//   return (
//     <>
// <h1>The number is {num} and {check(num)}</h1>
//     </>
//   )
// }
// ReactDOM.render(<Element/>, document.getElementById('root'));

//Task 2
const arr = [1,2,3,4,5,6,7];
const Element = () => {
  return (
    <>
  <h1>
    {arr.map((val) => (val))}
  </h1>
    </>
  )
}
ReactDOM.render(<Element/>, document.getElementById('root'));
