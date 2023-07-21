import { createApi } from "@reduxjs/toolkit/query/react";
import { LoginBody, RegisterBody, User } from "./AuthTypes";
import { fetchBaseQueryWithToken } from "../apiSettings";
import { setUser } from "./authSlice";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQueryWithToken("http://localhost:5000/api/auth"),
  endpoints: (builder) => ({
    postLogin: builder.mutation<User, LoginBody>({
      query: (body) => ({
        url: "/login",
        method: "POST",
        body: body,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        dispatch(setUser(data));
      },
    }),
    postRegister: builder.mutation<void, RegisterBody>({
      query: (body) => ({
        url: "/register",
        method: "POST",
        body: body,
      }),
    }),
  }),
});

export const { usePostLoginMutation, usePostRegisterMutation } = authApi;
