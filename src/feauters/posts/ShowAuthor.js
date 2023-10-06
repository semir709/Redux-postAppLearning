import React from "react";
import { selectAllUsers } from "../users/userSlice";
import { useSelector } from "react-redux";

const ShowAuthor = ({ userId }) => {
  const allAuthors = useSelector(selectAllUsers);

  const author = allAuthors.filter((user) => user.id === userId);

  console.log(author[0]?.name);

  return (
    <div className="my-4">
      <span>By {author.length === 0 ? "Unknown user" : author[0]?.name}</span>
    </div>
  );
};

export default ShowAuthor;
