import React, { useState } from "react";
import { FcNext } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";
import { BsChatRightQuoteFill } from "react-icons/bs";
import reviews from "../data";
const Review = () => {
  const [index, setIndex] = useState(2);
  const { name, job, image, text } = reviews[index];
  const checkIndex = (ind) => {
    if (ind > reviews.length - 1) {
      return 0;
    }
    if (ind < 0) {
      return reviews.length - 1;
    }
    return ind;
  };
  const previous = () => {
    setIndex((index) => {
      const newIndex = index - 1;
      return checkIndex(newIndex);
    });
  };
  const next = () => {
    setIndex((index) => {
      const newIndex = index + 1;
      return checkIndex(newIndex);
    });
  };

  const surprise = () => {
    let newIndex = Math.floor(Math.random() * reviews.length);
    if (newIndex === index) {
      newIndex = newIndex + 1;
    }

    setIndex(checkIndex(newIndex));
  };
  return (
    <div className="review-box">
      <div className="img-box">
        <img src={image} alt={name} />
        <span className="quote-icon">
          <BsChatRightQuoteFill />
        </span>
      </div>
      <div className="info">
        <h4>{name.toUpperCase()}</h4>
        <p className="job">{job.toUpperCase()}</p>
        <p className="text">{text}</p>
      </div>
      <div className="buttons">
        <button
          className="btn"
          onClick={() => {
            previous();
          }}
        >
          <FcPrevious />
        </button>
        <button
          className="btn"
          onClick={() => {
            next();
          }}
        >
          <FcNext />
        </button>
      </div>
      <button
        className="surprise"
        onClick={() => {
          surprise();
        }}
      >
        SURPRISE ME
      </button>
    </div>
  );
};

export default Review;
