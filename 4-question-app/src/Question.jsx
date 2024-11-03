import React, { useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { IoRemoveCircleOutline } from "react-icons/io5";
const Question = (props) => {
  const { info, title } = props;
  const [toggle, setToggle] = useState(false);
  return (
    <div className="list-items {toggle && 'special'}">
      <div className="qus">
        {title}{" "}
        <span>
          <button
            className="btn"
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            {toggle ? <IoRemoveCircleOutline /> : <IoAddCircleOutline />}
          </button>
        </span>
      </div>
      {toggle && <p className="info">{info}</p>}
    </div>
  );
};

export default Question;
