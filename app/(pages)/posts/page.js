import React from "react";
import { client } from "@/app/apollo-client";
import { gql } from "@apollo/client";

const GET_POSTS = gql`
  query GetPosts {
    getPosts {
      description
      id
      title
      url
    }
  }
`;

const Posts = async () => {
  const { data } = await client.query({ query: GET_POSTS });

  return (
    <div>
      {data.getPosts.map((val, index) => {
        return <div key={index}>{val.title}</div>;
      })}
    </div>
  );
};

export default Posts;
