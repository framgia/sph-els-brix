import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:8000/api/" }),
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
