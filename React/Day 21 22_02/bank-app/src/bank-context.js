import { createContext, useState } from "react";

export const BankContext = createContext();

export const BankProvider = (props) => {

    const [balance, setBalance] = useState(500);

    const addAmount = (amt) => {
        setBalance(balance + amt);
    }
    const withdrawAmount = (amt) => {
        if(balance > 0){
            setBalance(balance -  amt);
        }
        
    }
    const fixedDeposit = () => {
        setBalance(balance * 1.05);
    } 
    const deleteAccount = () => {
        setBalance(0);
    }

    
    return (
    <BankContext.Provider value={{balance, addAmount, withdrawAmount, fixedDeposit, deleteAccount}}>
      {props.children}
    </BankContext.Provider>
  );
};
