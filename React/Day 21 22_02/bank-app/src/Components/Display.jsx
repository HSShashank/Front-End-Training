import React, { useContext, useState } from 'react'
import { BankContext } from '../bank-context';

const Display = () => {
    const { balance, addAmount, withdrawAmount, fixedDeposit, deleteAccount} = useContext(BankContext);
   const [amt, setAmt] = useState(0);
   const amtHandler = (newAmt) => {
       setAmt(newAmt);
   }
  return (
      <>
      <h1>Balance is ${balance}</h1>
    <input type="text" onChange={(event) => {
              amtHandler(parseInt(event.target.value));
            }}/>
    <button onClick={() => addAmount(amt)}>Deposit</button>  
    <button onClick={() => withdrawAmount(amt)}>Withdraw</button>      
    <button onClick={() => fixedDeposit()}>Fixed Deposit</button>      
    <button onClick={() => deleteAccount()}>Delete</button>      

      </>

  )
}

export default Display