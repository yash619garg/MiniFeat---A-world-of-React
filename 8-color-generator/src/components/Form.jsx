import React from "react";
import Values from "values.js";

const Form = ({ color, setColor, setList, setMsg }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello");
    try {
      let colors = new Values(color).all(10);
      setList(colors);
      console.log(colors);
    } catch (error) {
      console.log(error);
      setMsg("Invalid Color");
    }
  };
  return (
    <div className="color-form">
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          id="color"
          placeholder="#a7e7ce"
          value={color}
          onChange={(e) => {
            setColor(e.target.value);
          }}
        />
        <button type="submit" className="btn">
          Generate
        </button>
      </form>
    </div>
  );
};

export default Form;
