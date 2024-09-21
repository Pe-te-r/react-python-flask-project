import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { LoginRequest, LoginResponse,RegisterResponse,RegisterRequest } from "../types/types";
import { url } from "../url";



export const users = createApi({
  reducerPath: "users",
  baseQuery: fetchBaseQuery({ baseUrl: url }),
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (credentials) => ({
        url: "users/login",
        method: "POST",
        body: credentials,
      }),
    }),
    register: builder.mutation<RegisterResponse, RegisterRequest>({
      query: (credentials) => ({
        url: "users/register",
        method: "POST",
        body: credentials,
      }),
    })
  }),
});

export const { useLoginMutation } = users;
export const { useRegisterMutation } = users;
