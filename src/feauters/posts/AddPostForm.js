import React from "react";
import { useState } from "react";
import { postAdded } from "./postSlice";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);

  const onButtonClicked = () => {
    if (title && content) {
      dispatch(postAdded(title, content));

      setTitle("");
      setContent("");
    }
  };

  return (
    <section>
      <h2 className="my-4 text-lg">Add a new post</h2>
      <form>
        <label className="text-red-300 mb-2" htmlFor="postTitle">
          Post title:
        </label>
        <input
          className="mb-5"
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label className="text-red-300 mb-2" htmlFor="postContent">
          Add a new content
        </label>
        <input
          className="mb-5"
          type="text"
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />

        <button type="button" onClick={onButtonClicked}>
          Set
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
