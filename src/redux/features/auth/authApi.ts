import { baseApi } from "../../api/baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation({
      query: (userCredentials) => ({
        url: "/auth/login",
        method: "POST",
        body: userCredentials,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
