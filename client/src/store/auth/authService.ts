import { createApi } from "@reduxjs/toolkit/query/react";
import { LoginBody, RegisterBody, User } from "./AuthTypes";
import { baseQuery } from "../apiSettings";
import { setUser } from "./authSlice";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: baseQuery({}),
  endpoints: (builder) => ({
    postLogin: builder.mutation<User, LoginBody>({
      query: (body) => ({
        url: "/auth/login",
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
        url: "/auth/register",
        method: "POST",
        body: body,
      }),
    }),
  }),
});

export const { usePostLoginMutation, usePostRegisterMutation } = authApi;
