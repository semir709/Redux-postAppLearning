import { configureStore } from "@reduxjs/toolkit";
import postSlice from "../feauters/posts/postSlice";
import userSlice from "../feauters/users/userSlice";

export const store = configureStore({
  reducer: {
    posts: postSlice,
    users: userSlice,
  },
});
