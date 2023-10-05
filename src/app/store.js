import { configureStore } from "@reduxjs/toolkit";
import postSlice from "../feauters/posts/postSlice";

export const store = configureStore({
  reducer: {
    posts: postSlice,
  },
});
