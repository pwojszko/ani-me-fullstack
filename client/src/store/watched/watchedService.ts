import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../apiSettings";
import { Watched } from "./WatchedTypes";

export const watchedApi = createApi({
  reducerPath: "watchedApi",
  baseQuery: baseQuery({ withToken: true }),
  endpoints: (builder) => ({
    getWatched: builder.query<Watched[], void>({
      query: () => ({
        url: "/watched",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetWatchedQuery } = watchedApi;
