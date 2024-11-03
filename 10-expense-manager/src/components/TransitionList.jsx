import React, { useContext } from "react";
import { GlobalContext } from "../context/GloabalContext";
import Transition from "./Transition";
const TransitionList = () => {
  const context = useContext(GlobalContext);
  return (
    <>
      <h2 className="header">History</h2>
      {context.transition.length > 0 ? (
        <ul className="transaction-list">
          {context.transition.map((trans) => {
            return <Transition key={trans.id} transition={trans} />;
          })}
        </ul>
      ) : (
        <div className="nodata">No Transaction Yet 🙃</div>
      )}
    </>
  );
};

export default TransitionList;
