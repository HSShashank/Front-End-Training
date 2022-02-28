import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { AddEntry } from '../Actions/Action'

function AddEntries() {
  const [item, setitem] = useState('')
  const [cal, setcal] = useState('')
  const dispatch=useDispatch();
  const handler=(e)=>{
    e.preventDefault();
    dispatch(AddEntry({ item, cal }));
    console.log({ item, cal })
    setitem("");
    setcal('');

  }
  return (
    <div className="border border-info rounded p-4 mt-3 ">
      <form action="" className="form-group">
        <div className="form-group">
          <label htmlFor="description">Food</label>
          <input
            type="text"
            id="description"
            className="form-control"
            value={item}
            onChange={(e)=>setitem(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Calories</label>
          <input
            type="text"
            id="Amount"
            className="form-control"
            value={cal}
            onChange={(e)=>{setcal(Number(e.target.value))}}
          />
        </div>
      </form>
      <button
        className="btn btn-primary mt-3"
        onClick={handler}
      >
        Add Entry
      </button>
    </div>
  )
}

export default AddEntries