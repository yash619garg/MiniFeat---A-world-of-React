import React from "react";
import SingleColor from "./SingleColor";

const Colors = ({ list, setMsg }) => {
  return (
    <div className="color-box">
      {list.map((color, index) => {
        const hexColor = color.hex;
        return (
          <SingleColor
            key={index}
            {...color}
            index={index}
            hexColor={hexColor}
            setMsg={setMsg}
          />
        );
      })}
    </div>
  );
};

export default Colors;
