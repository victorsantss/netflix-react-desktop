import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authenticated: false,
};

const userSlice = createSlice({
  name: "user",
  reducers,
  initialState,
});

export default userSlice;
