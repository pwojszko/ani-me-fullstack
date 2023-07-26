import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { User } from "./AuthTypes";

const initialState = <User>{
  token: localStorage.getItem("token") || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("token");
      state.token = null;
    },
    setUser: (state, action: PayloadAction<User>) => {
      state.token = action.payload.token;
      localStorage.setItem("token", action.payload.token!);
    },
  },
});

export const { logout, setUser } = authSlice.actions;
export default authSlice.reducer;
