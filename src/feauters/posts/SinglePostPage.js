import React from "react";
import { selectPostById } from "./postSlice";
import ShowAuthor from "./ShowAuthor";
import DatePublished from "./DatePublished";
import ReactionButtons from "./ReactionButtons";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const SinglePostPage = () => {
  const { postId } = useParams();
  const post = useSelector((state) => selectPostById(state, Number(postId)));

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  }

  return (
    <article className="my-4 bg-green-400 p-4">
      <h3 className="text-2xl font-semibold">{post.title}</h3>
      <p>{post.body}</p>
      <ShowAuthor userId={post.userId} />
      <DatePublished date={post.date} />
      <ReactionButtons post={post} />
    </article>
  );
};

export default SinglePostPage;
