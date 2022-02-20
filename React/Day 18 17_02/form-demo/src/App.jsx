import React, { useState } from 'react';

const App = () => {
    const [data, setData] = useState([
        {
            'fname': "",
            'lname': "",
            'age':"",
            'num':""
        }
    ]);
    const handleClick=(event) => {
        event.preventDefault();
    }
    const handleChange=(event) => {
        setData(event.target.value);
    }

  return (
      <>
          <form action="">
              <input type="text" placeholder='Enter First Name' onChange={handleChange} value={data}/>
              <br />
              <input type="text" placeholder='Enter Last Name' onChange={handleChange} value={data}/>
              <br />
              <input type="text" placeholder='Enter Age' onChange={handleChange} value={data}/>
              <br />
              <input type="text" placeholder='Enter Number'onChange={handleChange} value={data}/>


            </form>
      
      </>

  )
}

export default App