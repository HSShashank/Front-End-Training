// import logo from './logo.svg';
import './App.css';
import Axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [userList, setUserList] = useState([]);
  //GET REQUEST
  useEffect(() => {
    Axios.get("http://localhost:3001/read").then(res => setUserList(res.data));
  }, [])
  return (
    <div className="App">
      {userList.map(item => {
        return (
          <>
          <h1>
            {item.name}
          </h1>
          </>
        )

      })}
    </div>
  );
}
export default App;
