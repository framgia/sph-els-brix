import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const fetchBaseUrl = process.env.MIX_BASE_URL;

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: fetchBaseUrl }),
  endpoints: (builder) => ({
    signup: builder.mutation<
      ELearning.SuccessfulSignupResponse,
      ELearning.UserSignupBody
    >({
      query: (body) => ({
        url: "signup",
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body,
      }),
    }),
  }),
});

export const { useSignupMutation } = userApi;
