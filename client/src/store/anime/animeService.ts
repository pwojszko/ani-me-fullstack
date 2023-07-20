import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQueryWithToken } from "../apiSettings";
import { Anime, Character } from "./AnimeTypes";

export const animeApi = createApi({
  reducerPath: "animeApi",
  baseQuery: fetchBaseQueryWithToken("https://api.jikan.moe/v4"),
  endpoints: (builder) => ({
    getAnimeById: builder.query<Anime, string>({
      query: (id) => `anime/${id}`,
      transformResponse: (response: { data: Anime }) => {
        return response.data;
      },
    }),
    getAnimeCharacters: builder.query<Character[], string>({
      query: (id) => `anime/${id}/characters`,
      transformResponse: (response: { data: Character[] }) => {
        return response.data;
      },
    }),
    getAnimeList: builder.query<Anime[], string>({
      query: (path) => path,
      transformResponse: (response: { data: Anime[] }) => {
        return response.data;
      },
    }),
  }),
});

export const {
  useGetAnimeByIdQuery,
  useGetAnimeCharactersQuery,
  useGetAnimeListQuery,
  useLazyGetAnimeListQuery,
} = animeApi;
