import React, { useState } from "react";
import './App.css'

//Task 1
// const App = () => {
//     const [count,setCount] = useState({
//         count1: 0,
//         count2: 6
//     });
//     console.log(count);
//     const handleClick = () =>{
//         setCount({...count ,count1:count.count1+1});
//     }
//     const handleClickOne = () =>{
//         setCount({...count ,count2:count.count2+1});
//     }
//     return(
//         <>
//         <h1>{count.count1}</h1>
//         <button onClick={handleClick}>Click Me</button>
//         <h1>{count.count1}</h1>
//         <button onClick={handleClickOne}>Inc</button>
//         </>
//     )
// }

//Counter App

const App = () => {
        const [count,setCount] = useState(0);
        console.log(count);
        const inc= () =>{
            setCount(count + 1);
        }
        const dec= () =>{
            setCount(count - 1);
        }
        const handleClick = (countVal) => {
            if(countVal === 1){
                setCount(count+countVal);
            }
            if(countVal === 2){
                setCount(count+countVal);
            }
        }
        return(
            <>
            <h1>COUNTER APP USING REACT JS</h1>
            <h1>{count}</h1>
            <div className="cont">
            
            <button onClick={inc}>+</button>
            
            <button onClick={dec}>-</button>
            <button onClick={() => handleClick(1)}>+1</button>
            <button onClick={() => handleClick(2)}>+2</button>
            </div>
            
            </>
        )
        }

export default App