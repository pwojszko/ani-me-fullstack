import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { User } from "./AuthTypes";

const initialState = <User>{
  token: localStorage.getItem("token") || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: () => {
      localStorage.removeItem("token");
      return initialState;
    },
    setUser: (state, action: PayloadAction<User>) => {
      state.token = action.payload.token;
    },
  },
});

export const { logout, setUser } = authSlice.actions;
export default authSlice.reducer;
