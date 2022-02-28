import React from 'react'
import { useSelector } from 'react-redux';
import Entry from './Entry';

function Entries() {
  const cal=useSelector((state)=>state.Cal)
  console.log(cal);
  
  return (
    <div>
      <h1 className='text-center'>Entries</h1>
      <div>{<div className="list-group">
        {cal.map((el) => {
          return <Entry entry={el} />;
        })}
      </div>}</div>
    </div>
  )
}

export default Entries