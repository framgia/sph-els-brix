import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "..";

export const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {},
});

export const {} = userSlice.actions;
export const selectUser = (state: RootState) => state.user;
