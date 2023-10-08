import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAllPosts,
  selectPostsError,
  selectPostsStatus,
  fetchPosts,
} from "./postSlice";
import PostsExcerpt from "./PostsExcerpt";

const PostList = () => {
  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(selectPostsStatus);
  const error = useSelector(selectPostsError);
  const dispatch = useDispatch();

  useEffect(() => {
    if (postsStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [dispatch, postsStatus]);

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
  return (
    <section>
      <h2 className="text-4xl">Posts</h2>
      {content}
    </section>
  );
};

export default PostList;
