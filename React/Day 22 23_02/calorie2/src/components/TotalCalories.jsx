import React from 'react'
import { useSelector } from 'react-redux'

function TotalCalories() {
 const cal=useSelector((state)=>state.Cal)
 console.log(cal);
 const total=cal.reduce((prev,curr)=>curr.cal+prev,0);
  return (
    <div ><h1 className='text-center'>Total Calories</h1>
    <h2 className='text-center'>{total}</h2>
    </div>
    
  )
}

export default TotalCalories