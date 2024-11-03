import React, { useContext } from "react";
import { GlobalContext } from "../context/GloabalContext";
import { LiaRupeeSignSolid } from "react-icons/lia";

const ExpenseIncome = () => {
  const { transition } = useContext(GlobalContext);
  const arr = transition.map((trans) => {
    return trans.amount;
  });
  const arr1 = arr.filter((trans) => trans > 0);
  const arr2 = arr.filter((trans) => trans < 0);
  const income = arr1.reduce((total, value) => {
    return total + value;
  }, 0);
  const expense = arr2.reduce((total, value) => {
    return total + value;
  }, 0);
  return (
    <div className="income-expense-container">
      <div className="income">
        <h2>Income</h2>
        <span className="money">
          {income.toFixed(2)}{" "}
          <span className="rupee">
            {" "}
            <LiaRupeeSignSolid />{" "}
          </span>{" "}
        </span>
      </div>
      <div className="expanse">
        <h2>Expense</h2>
        <span className="money">
          {Math.abs(expense).toFixed(2)}{" "}
          <span className="rupee">
            {" "}
            <LiaRupeeSignSolid />
          </span>{" "}
        </span>
      </div>
    </div>
  );
};

export default ExpenseIncome;
