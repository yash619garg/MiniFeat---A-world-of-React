import React from "react";
import { FaClipboard } from "react-icons/fa6";

const SingleColor = ({ rgb, weight, index, hexColor, setMsg }) => {
  const grb = rgb.join(",");
  const hexValue = `#${hexColor}`;

  return (
    <div
      className={`single-color ${index >= 10 && "light-color"}`}
      style={{ backgroundColor: `rgb(${grb})` }}
    >
      <h4>{weight}%</h4>
      <p>{hexValue}</p>
      <button
        className={`copy ${index > 10 && "light-color1"} `}
        onClick={() => {
          navigator.clipboard.writeText(hexValue);
          setMsg(`color-copied`);
        }}
      >
        copy{" "}
        <span>
          <FaClipboard />
        </span>
      </button>
    </div>
  );
};

export default SingleColor;
