import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../apiSettings";
import { Anime, Character } from "./AnimeTypes";

export const animeApi = createApi({
  reducerPath: "animeApi",
  baseQuery: baseQuery({ baseUrl: "https://api.jikan.moe/v4" }),
  endpoints: (builder) => ({
    getAnimeById: builder.query<Anime, string | number>({
      query: (id) => `anime/${id}`,
      transformResponse: (response: { data: Anime }) => response.data,
    }),
    getAnimeCharacters: builder.query<Character[], string | number>({
      query: (id) => `anime/${id}/characters`,
      transformResponse: (response: { data: Character[] }) => response.data,
    }),
    getAnimeList: builder.query<Anime[], string>({
      query: (path) => path,
      transformResponse: (response: { data: Anime[] }) => response.data,
    }),
    getRandomAnime: builder.query<Anime, string>({
      query: (path) => path,
      transformResponse: (response: { data: Anime[] }) =>
        response.data[Math.floor(Math.random() * response.data.length)],
    }),
  }),
});

export const {
  useGetAnimeByIdQuery,
  useGetAnimeCharactersQuery,
  useGetAnimeListQuery,
  useGetRandomAnimeQuery,
  useLazyGetAnimeListQuery,
} = animeApi;
