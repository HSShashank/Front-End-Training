import React from 'react'
import './card.css'

const Card = (props) => {
  return (
   <>
   <div className="box">
       <div className="text">
        <h3> {props.title} </h3>
        <div className="nums">
            <h4>{props.num}</h4>
            <h6>{props.per}</h6>
        </div>
       </div>
       <div className="logo">
           <img src="{props.logo}" alt="" />
       </div>
   </div>
 
   </>
  )
}

export default Card