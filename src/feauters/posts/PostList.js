import React from "react";
import { useSelector } from "react-redux";
import { selectAllPosts } from "./postSlice";
import ShowAuthor from "./ShowAuthor";
import DatePublished from "./DatePublished";

const PostList = () => {
  const posts = useSelector(selectAllPosts);

  const orderPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));

  const allPosts = orderPosts.map(({ id, title, content, date, userId }) => (
    <article className="my-4 bg-green-400 p-4" key={id}>
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p>{content.substring(0, 100)}</p>
      <ShowAuthor userId={userId} />
      <DatePublished date={date} />
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
