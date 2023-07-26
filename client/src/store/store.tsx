import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import notificationReducer from "./notification/notification";
import authReducer from "./auth/authSlice";

import { animeApi } from "./anime/animeService";
import { watchedApi } from "./watched/watchedService";
import { authApi } from "./auth/authService";

export const store = configureStore({
  reducer: {
    notification: notificationReducer,
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [animeApi.reducerPath]: animeApi.reducer,
    [watchedApi.reducerPath]: watchedApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(animeApi.middleware)
      .concat(watchedApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
