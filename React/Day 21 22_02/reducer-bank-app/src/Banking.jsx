import { useContext, useState } from "react";
import { BankingContext } from "./banking-context";

const Banking = () => {
  const { balance, dispatch } = useContext(BankingContext);
  const [amount, setAmount] = useState("");
  const resetInput = () => {
      setAmount(0);
  }
  return (
    <div className="">
      <h1>Balance is {balance}</h1>
      <input
        type="text"
        value={amount}
        onChange={(e) => {
          setAmount(e.target.value);
        }}
      />
      <button onClick={()=>{dispatch({type:'WITHDRAW',amount}); resetInput();}}>
        Withdraw
      </button>
      <button onClick={()=>{dispatch({type:'DEPOSIT',amount}); resetInput();}}>
        Deposit
      </button>
      <button onClick={() => dispatch({ type: "FD"})}>Fixed Deposit</button>
      <button onClick={() => dispatch({ type: "DELETE"})}>Delete Account</button>
    </div>
  );
};
export default Banking;
