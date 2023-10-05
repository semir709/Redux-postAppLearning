import React from "react";
import { useSelector } from "react-redux";
import { selectAllPosts } from "./postSlice";

const PostList = () => {
  const posts = useSelector(selectAllPosts);

  const allPosts = posts.map(({ id, title, content }) => (
    <article className="my-4 bg-green-400 p-4" key={id}>
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p>{content.substring(0, 100)}</p>
    </article>
  ));

  return (
    <section>
      <h2 className="text-4xl">Posts</h2>
      {allPosts}
    </section>
  );
};

export default PostList;
