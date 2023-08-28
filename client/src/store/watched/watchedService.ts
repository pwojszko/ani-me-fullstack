import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../apiSettings";
import {
  AddWatchedBody,
  RateWatchedBody,
  RemoveWatchedBody,
  Watched,
} from "./WatchedTypes";

const TAGS = {
  WATCHED: "WATCHED",
};

export const watchedApi = createApi({
  reducerPath: "watchedApi",
  baseQuery: baseQuery({ withToken: true }),
  tagTypes: [TAGS.WATCHED],
  endpoints: (builder) => ({
    getWatchedList: builder.query<Watched[], void>({
      query: () => ({
        url: "/watched",
        method: "GET",
      }),
      providesTags: [TAGS.WATCHED],
    }),
    getWatched: builder.query<Watched, string>({
      query: (animeId) => ({
        url: `/watched/${animeId}`,
        method: "GET",
      }),
      providesTags: [TAGS.WATCHED],
    }),
    postAddWatched: builder.mutation<void, AddWatchedBody>({
      query: (body) => ({
        url: "/watched/add",
        method: "POST",
        body,
      }),
      invalidatesTags: [TAGS.WATCHED],
    }),
    postRemoveWatched: builder.mutation<void, RemoveWatchedBody>({
      query: (body) => ({
        url: "/watched/remove",
        method: "POST",
        body,
      }),
      invalidatesTags: [TAGS.WATCHED],
    }),
    postRateWatched: builder.mutation<void, RateWatchedBody>({
      query: (body) => ({
        url: "/watched/rate",
        method: "POST",
        body,
      }),
      invalidatesTags: [TAGS.WATCHED],
    }),
  }),
});

export const {
  useGetWatchedQuery,
  useGetWatchedListQuery,
  usePostAddWatchedMutation,
  usePostRemoveWatchedMutation,
  usePostRateWatchedMutation,
} = watchedApi;
