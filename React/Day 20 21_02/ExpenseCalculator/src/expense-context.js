import { createContext, useState } from "react";

export const ExpenseContext = createContext();

export const ExpenseProvider = (props) => {
  const [entries, setEntries] = useState([
    { id: 1, description: "Pizza", amount: -99 },
    { id: 2, description: "Samosa", amount: -7 },
    { id: 3, description: "Dosa", amount: -15 },
    { id: 4, description: "Salary", amount: 200 },
    { id: 5, description: "Stocks", amount: 50 }
  ]);
  const [newentry, setnewentry] = useState({
    id: entries.length > 0 ? entries[entries.length - 1].id + 1 : 1,
    description: "",
    amount: ""
  });
  const handleDelete = (id) => {
    setEntries(entries.filter((entry) => entry.id !== id));
  };
  const handleAdd = () => {
    let newid = entries.length > 0 ? entries[entries.length - 1].id + 1 : 1;
    console.log(newid);
    // setnewentry({
    //   ...newentry,
    //   id: newid,
    // });
    entries.push(newentry);
    entries[entries.length - 1].id = newid;
    setEntries([...entries]);
    setnewentry({ ...newentry, description: "", amount: "" });
  };
  const descHandler = (val) => {
    setnewentry({ ...newentry, description: val });
  };
  const amtHandler = (val) => {
    setnewentry({ ...newentry, amount: val === "-" ? "-" : parseInt(val) });
  };
  return (
    <ExpenseContext.Provider
      value={{
        entries,
        handleDelete,
        handleAdd,
        descHandler,
        amtHandler,
        newentry
      }}
    >
      {props.children}
    </ExpenseContext.Provider>
  );
};
