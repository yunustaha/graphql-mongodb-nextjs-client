import React from "react";

const Review = ({ params }) => {
  return (
    <>
      <span>Review - </span>
      <span>{params.reviewId}</span>
    </>
  );
};

export default Review;
