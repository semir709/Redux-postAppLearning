import React from "react";
import { useSelector } from "react-redux";
import { selectAllPosts } from "./postSlice";
import ShowAuthor from "./ShowAuthor";
import DatePublished from "./DatePublished";
import ReactionButtons from "./ReactionButtons";

const PostList = () => {
  const posts = useSelector(selectAllPosts);

  const orderPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));

  const allPosts = orderPosts.map((post) => (
    <article className="my-4 bg-green-400 p-4" key={post.id}>
      <h3 className="text-2xl font-semibold">{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
      <ShowAuthor userId={post.userId} />
      <DatePublished date={post.date} />
      <ReactionButtons post={post} />
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
