import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/slice";
import { postsReducer } from "./posts/slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
