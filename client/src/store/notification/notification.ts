import { createSlice } from "@reduxjs/toolkit";

export const notification = createSlice({
  name: "notification",
  initialState: {
    message: "",
    isActive: false,
  },
  reducers: {
    showNotification: (state, action) => {
      state.message = action.payload;
    },
    setNotificationActivity: (state, action) => {
      state.isActive = action.payload;
    },
  },
});

export const { showNotification, setNotificationActivity } =
  notification.actions;
export default notification.reducer;
