import React from "react";
import { useDispatch } from "react-redux";
import { reactionAdded } from "./postSlice";

const reactionEmoji = {
  thumsUp: "👍",
  wow: "😃",
  heart: "❤",
  rocket: "🦪",
  coffee: "☕",
};

const ReactionButtons = ({ post }) => {
  const dispatch = useDispatch();

  const buttons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type="button"
        onClick={() => dispatch(reactionAdded({ id: post.id, reaction: name }))}
      >
        {emoji} {post.reactions[name]}
      </button>
    );
  });
  return <div>{buttons}</div>;
};

export default ReactionButtons;
