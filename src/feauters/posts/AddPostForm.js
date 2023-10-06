import React from "react";
import { useState } from "react";
import { postAdded } from "./postSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectAllUsers } from "../users/userSlice";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  const dispatch = useDispatch();

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onUserChanged = (e) => setUserId(e.target.value);

  const onButtonClicked = () => {
    if (title && content && userId) {
      dispatch(postAdded(title, content, userId));

      setTitle("");
      setContent("");
      setUserId("");
    }
  };

  const users = useSelector(selectAllUsers);

  const userOptions = users.map((user) => (
    <option value={user.id}>{user.name}</option>
  ));

  const isAllSelected = Boolean(title) && Boolean(content) && Boolean(userId);

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

        <label htmlFor="userId">User</label>
        <select name="userId" id="userId" onChange={onUserChanged}>
          <option value=""></option>
          {userOptions}
        </select>

        <button
          type="button"
          onClick={onButtonClicked}
          disabled={!isAllSelected}
        >
          Set
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
