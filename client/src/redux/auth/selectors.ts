import { RootState } from "../store";

export const selectAuthData = (state: RootState) => state.auth.data;
export const selectIsAuth = (state: RootState) => Boolean(state.auth.data);
