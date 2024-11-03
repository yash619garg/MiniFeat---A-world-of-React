import React from "react";

import SingleReview from "./single-review";

const Review = ({ person, index, setIndex }) => {
  return (
    <div className="review-box">
      {person.map((people, peopleIndex) => {
        let position = "nextSlide";
        if (index === peopleIndex) {
          position = "activeSlide";
        }
        if (
          peopleIndex === index - 1 ||
          (index === 0 && peopleIndex === person.length - 1)
        ) {
          position = "lastSlide";
        }
        return (
          <SingleReview
            people={people}
            key={peopleIndex}
            position={position}
            setIndex={setIndex}
            index={index}
          />
        );
      })}
    </div>
  );
};

export default Review;
