import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts, fetchRemovePost } from "./asyncAction";
import { IPost } from "../../utils/types";

interface PostsState {
  items: IPost[];
  status: "loading" | "loaded" | "error";
}

interface InitialState {
  posts: PostsState;
}

const initialState: InitialState = {
  posts: {
    items: [],
    status: "loading",
  },
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.posts.items = [];
      state.posts.status = "loading";
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts.items = action.payload;
      state.posts.status = "loaded";
    });
    builder.addCase(fetchPosts.rejected, (state) => {
      state.posts.items = [];
      state.posts.status = "error";
    });
    builder.addCase(fetchRemovePost.pending, (state, action) => {
      state.posts.items = state.posts.items.filter(
        (obj) => obj._id !== action.payload
      );
    });
  },
});

export const postsReducer = postsSlice.reducer;
