import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const fetchBaseQueryWithToken = (baseUrl = "") =>
  fetchBaseQuery({
    baseUrl: baseUrl,
  });
