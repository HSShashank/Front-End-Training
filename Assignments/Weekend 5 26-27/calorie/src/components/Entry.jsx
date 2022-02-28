import React from 'react'
import { useDispatch } from 'react-redux'
import { DeleteEntry } from '../Actions/Action';

function Entry(props) {
  const dispatch=useDispatch();
  const handler=()=>{
    dispatch(DeleteEntry(props.entry.id));
  }
  return (
    <div>
      <li className="list-group-item list-group-item-action d-flex justify-content-between ">
        <div >{props.entry.item}</div>
        
        <span >{props.entry.cal}</span>
        
        <button className="btn-close" onClick={handler}></button>
      </li>
    </div>
  )
}

export default Entry