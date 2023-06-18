import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../axios";

export const fetchAuth = createAsyncThunk(
  "auth/fetchAuth",
  async (params: any) => {
    const { data } = await instance.post("/auth/login", params);
    return data;
  }
);

export const fetchRegister = createAsyncThunk(
  "auth/fetchRegister",
  async (params: any) => {
    const { data } = await instance.post("/auth/register", params);
    return data;
  }
);

export const fetchAuthMe = createAsyncThunk("auth/fetchAuthMe", async () => {
  const { data } = await instance.get("/auth/me");
  return data;
});
