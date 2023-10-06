import React from "react";
import { selectAllUsers } from "../users/userSlice";
import { useSelector } from "react-redux";

const ShowAuthor = ({ userId }) => {
  const allAuthors = useSelector(selectAllUsers);

  const author = allAuthors.find((user) => user.id === userId);

  return (
    <div className="my-4">
      <span>By {!author ? "Unknown user" : author.name}</span>
    </div>
  );
};

export default ShowAuthor;
