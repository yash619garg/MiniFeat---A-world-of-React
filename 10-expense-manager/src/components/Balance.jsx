import React, { useContext } from "react";
import { GlobalContext } from "../context/GloabalContext";
import { LiaRupeeSignSolid } from "react-icons/lia";

const Balance = () => {
  const { transition } = useContext(GlobalContext);
  const arr = transition.map((trans) => {
    return trans.amount;
  });
  const Total = arr.reduce((total, value) => {
    return total + value;
  }, 0);
  return (
    <div className="balance-container">
      <h2>Your Balance</h2>
      <span className="money">
        {Total.toFixed(2)}{" "}
        <span className="rupee">
          <LiaRupeeSignSolid />
        </span>
      </span>
    </div>
  );
};

export default Balance;
