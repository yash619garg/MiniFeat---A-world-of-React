import React from "react";
import { BiWorld } from "react-icons/bi";
import Tour from "./Tour";
const Tours = ({ tours, deleteTour }) => {
  return (
    <div className="main-container">
      <div className="heading">
        Tours{" "}
        <span className="world-icon">
          <BiWorld />
        </span>
      </div>
      <div className="tour-box">
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} deleteTour={deleteTour} />;
        })}
      </div>
    </div>
  );
};

export default Tours;
