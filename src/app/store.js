import { configureStore } from "@reduxjs/toolkit";
import postSlice from "../feauters/potsSlice";

export const store = configureStore({
  reducer: {
    posts: postSlice,
  },
});
