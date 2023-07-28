import { fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
import { RootState } from "./store";

export const baseQuery = ({
  withToken = false,
  baseUrl = "http://localhost:5000/api",
  maxRetries = 0,
}: {
  withToken?: boolean;
  baseUrl?: string;
  maxRetries?: number;
}) =>
  retry(
    fetchBaseQuery({
      baseUrl: baseUrl,
      prepareHeaders: (headers, { getState }) => {
        if (withToken) {
          const token = (getState() as RootState).auth.token;

          if (token) {
            headers.set("authorization", `Bearer ${token}`);
          }
        }

        return headers;
      },
    }),
    {
      maxRetries,
    }
  );
