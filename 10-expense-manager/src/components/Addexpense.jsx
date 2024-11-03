import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GloabalContext";

const Addexpense = () => {
  const { addTransition } = useContext(GlobalContext);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || !amount || isNaN(amount)) {
      if (isNaN(amount)) {
        alert("Amount Should be a number!!!");
      } else {
        alert("Enter information!!!");
      }
    } else {
      const newTransition = {
        id: new Date().getMilliseconds(),
        text: text,
        amount: Number(amount),
      };
      addTransition(newTransition);
    }
    setAmount("");
    setText("");
  };
  return (
    <div className="addExpense">
      <div className="header2">
        <h2>Add new transaction</h2>
      </div>
      <form className="form-container">
        <div className="form-box">
          <label className="form-label" htmlFor="text">
            Expense
          </label>
          <input
            className="form-input"
            placeholder="e.g. rent"
            type="text"
            id="text"
            onChange={(e) => {
              setText(e.target.value);
            }}
            value={text}
          />
        </div>
        <div className="form-box">
          <label className="form-label" htmlFor="amount">
            Amount
          </label>
          <input
            className="form-input"
            type="text"
            id="amount"
            placeholder="e.g. +500"
            onChange={(e) => {
              setAmount(e.target.value);
            }}
            value={amount}
          />
        </div>
        <div className="note">
          Amount should be - negative for expense and positive for income
        </div>
        <button type="submit" className="btn1" onClick={handleSubmit}>
          submit
        </button>
      </form>
    </div>
  );
};

export default Addexpense;
