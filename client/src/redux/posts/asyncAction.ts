import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../axios";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const { data } = await instance.get("/posts");
  return data;
});

export const fetchRemovePost = createAsyncThunk(
  "posts/fetchRemovePost",
  async (id) => await instance.delete(`/posts/${id}`)
);
