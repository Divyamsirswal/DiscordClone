import React from "react";
import { useParams } from "react-router-dom";
import PostData from "../data/posts.json";

export default function PostDetail() {
  const { id } = useParams();
  const post = PostData.list[id - 1];
  // Fetch the post details using the ID and display them

  return (
    <div className="w-screen h-screen grid place-content-center">
      <h1 className=" flex justify-center">Kiva</h1>
    </div>
  );
}
