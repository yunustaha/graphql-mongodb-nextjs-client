import React from "react";

const Post = ({ params }) => {
  return (
    <>
      <span>Post - </span>
      <span>{params.postId}</span>
    </>
  );
};

export default Post;
