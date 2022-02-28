import React from "react";
import { useContext } from "react";
import { ExpenseContext } from "../expense-context";
const AddEntry = () => {
  const { descHandler } = useContext(ExpenseContext);
  const { handleAdd } = useContext(ExpenseContext);
  const { amtHandler } = useContext(ExpenseContext);
  const { newentry } = useContext(ExpenseContext);

  return (
    <div className="border border-info rounded p-4 mt-3">
      <form action="" className="form-group">
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            className="form-control"
            value={newentry.description}
            onChange={(event) => {
              descHandler(event.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Amount</label>
          <input
            type="text"
            id="Amount"
            className="form-control"
            value={newentry.amount}
            onChange={(event) => {
              amtHandler(event.target.value);
            }}
          />
        </div>
      </form>
      <button
        className="btn btn-primary mt-3"
        onClick={() => {
          handleAdd();
        }}
      >
        Add Entry
      </button>
    </div>
  );
};
export default AddEntry;
