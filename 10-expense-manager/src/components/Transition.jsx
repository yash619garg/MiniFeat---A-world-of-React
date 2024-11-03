import React, { useContext } from "react";
import { GlobalContext } from "../context/GloabalContext";
import { FiDelete } from "react-icons/fi";
import { LiaRupeeSignSolid } from "react-icons/lia";
const Transition = ({ transition }) => {
  const { deleteTransition } = useContext(GlobalContext);
  return (
    <li className="list-items">
      <div className="item-name">{transition.text} </div>
      <div className={transition.amount > 0 ? "active" : "inactive"}>
        {Math.abs(transition.amount).toFixed(2)}
        <span className="rupee">
          <LiaRupeeSignSolid />
        </span>
      </div>{" "}
      <div className="buttons">
        <button
          className="delete-btn"
          onClick={() => deleteTransition(transition.id)}
        >
          <FiDelete />
        </button>
      </div>
    </li>
  );
};

export default Transition;
