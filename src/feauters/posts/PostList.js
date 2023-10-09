import React from "react";
import { useSelector } from "react-redux";
import {
  selectAllPosts,
  selectPostsError,
  selectPostsStatus,
} from "./postSlice";
import PostsExcerpt from "./PostsExcerpt";

const PostList = () => {
  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(selectPostsStatus);
  const error = useSelector(selectPostsError);

  let content;

  if (postsStatus === "loading") {
    content = <p>"Loading..."</p>;
  } else if (postsStatus === "succeeded") {
    const orderedPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));
    content = orderedPosts.map((post, index) => (
      <PostsExcerpt key={index} post={post} />
    ));
  } else if (postsStatus === "failed") {
    content = <p>{error}</p>;
  }
  return <section>{content}</section>;
};

export default PostList;
