import React from "react";
import ShowAuthor from "./ShowAuthor";
import DatePublished from "./DatePublished";
import ReactionButtons from "./ReactionButtons";
import { Link } from "react-router-dom";

const PostsExcerpt = ({ post }) => {
  return (
    <article className="my-4 bg-green-400 p-4">
      <h2 className="text-2xl font-semibold">{post.title}...</h2>
      <p>{post.body.substring(0, 75)}</p>
      <Link to={`post/${post.id}`}>View Post</Link>
      <ShowAuthor userId={post.userId} />
      <DatePublished date={post.date} />
      <ReactionButtons post={post} />
    </article>
  );
};

export default PostsExcerpt;
