import React from "react";
import ShowAuthor from "./ShowAuthor";
import DatePublished from "./DatePublished";
import ReactionButtons from "./ReactionButtons";

const PostsExcerpt = ({ post }) => {
  return (
    <article className="my-4 bg-green-400 p-4">
      <h3 className="text-2xl font-semibold">{post.title}</h3>
      <p>{post.body.substring(0, 100)}</p>
      <ShowAuthor userId={post.userId} />
      <DatePublished date={post.date} />
      <ReactionButtons post={post} />
    </article>
  );
};

export default PostsExcerpt;
