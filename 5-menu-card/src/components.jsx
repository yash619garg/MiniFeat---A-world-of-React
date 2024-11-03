import React from "react";
// import menu from "./data";
const Components = ({ filterItems, category }) => {
  return (
    <div className="btn-container">
      {category.map((cat, index) => {
        return (
          <button
            key={index}
            onClick={() => {
              filterItems(cat);
            }}
            className="btn"
          >
            {cat.toUpperCase()}{" "}
          </button>
        );
      })}
    </div>
  );
};

export default Components;
