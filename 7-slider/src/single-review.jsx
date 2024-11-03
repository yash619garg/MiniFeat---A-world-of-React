import React from "react";
import { FcNext } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";
import { FaQuoteLeft } from "react-icons/fa";
const SingleReview = ({ people, position, setIndex, index }) => {
  const { id, name, image, title, quote } = people;
  return (
    <div className={`review ${position}`} key={id}>
      <div className="img-box">
        <img className="r-img" src={image} alt={name} />
      </div>
      <div className="info-box">
        <div className="name">{name.toUpperCase()}</div>
        <div className="title">{title.toUpperCase()}</div>
        <p className="text">{quote}</p>
      </div>
      <button className="prev" onClick={() => setIndex(index - 1)}>
        <FcPrevious />
      </button>
      <button className="next" onClick={() => setIndex(index + 1)}>
        <FcNext />
      </button>
      <div className="quote">
        <FaQuoteLeft />
      </div>
    </div>
  );
};

export default SingleReview;
