import React, { useState } from "react";

const Tour = (props) => {
  const [readMore, setRead] = useState(false);
  const { id, name, image, price, info, deleteTour } = props;
  return (
    <article className="single-Tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <span className="name">{name}</span>
          <span className="price">${price}</span>
        </div>
        <div className="info">
          <span>{readMore ? info : info.substring(0, 200)}</span>
          <span>
            <button
              className="read-btn"
              onClick={() => {
                setRead(!readMore);
              }}
            >
              {readMore ? "show less" : "read more"}
            </button>
          </span>
        </div>
        <div className="delete">
          <button
            className="delete-btn on"
            onClick={() => {
              deleteTour(id);
            }}
          >
            I'm not Interested
          </button>
        </div>
      </footer>
    </article>
  );
};

export default Tour;
