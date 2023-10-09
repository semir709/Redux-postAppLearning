import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="my-5">
      <h1>Redux Blog</h1>
      <nav>
        <ul>
          <li>
            <Link className="mx-2" to="/">
              Home
            </Link>
            <Link to="post">Post</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
