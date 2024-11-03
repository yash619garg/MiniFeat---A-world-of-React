import React, { useState } from "react";

const Menu = ({ items }) => {
  const [readMore, setRead] = useState(false);
  const { title, price, img, desc } = items;
  console.log(title);
  return (
    <article className="single-menu-box">
      <img src={img} alt={title} />
      <footer>
        <div className="menu-info">
          <span className="name">{title}</span>
          <span className="price">${price}</span>
        </div>
        <div className="info">
          <span className="info-text">
            {readMore ? desc : desc.substring(0, 150)}
          </span>
          <span>
            {desc.length > 150 && (
              <button
                className="read-btn"
                onClick={() => {
                  setRead(!readMore);
                }}
              >
                {readMore ? "show less" : "read more"}
              </button>
            )}
          </span>
        </div>
      </footer>
    </article>
  );
};

export default Menu;
