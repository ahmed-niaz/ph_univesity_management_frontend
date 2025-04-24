import {
  BaseQueryApi,
  BaseQueryFn,
  createApi,
  DefinitionType,
  FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { logout, setUser } from "../features/auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:3000/api",
  credentials: "include",

  // include backend-issued accessToken in the request headers

  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;

    if (token) {
      headers.set("authorization", `${token}`);
    }

    return headers;
  },
});

// Retrieve new access token using refresh token.

const baseQueryWithRefreshToken: BaseQueryFn<
  FetchArgs,
  BaseQueryApi,
  DefinitionType
> = async (args, api, extraOptions): Promise<any> => {
  let result = await baseQuery(args, api, extraOptions);

  console.log(result);

  // if the token is expired

  if (result.error?.status === 500) {
    console.log("sending refresh token");
    // You can later handle token refresh logic here
    const res = await fetch("http://localhost:3000/api/auth/refresh-token", {
      method: "POST",
      credentials: "include", // send cookie to the backend
    });

    const data = await res.json(); // data[new access token]
    console.log("token is ...", data);

    if (data?.data?.accessToken) {
      const user = (api.getState() as RootState).auth.user; // user[local state]

      // retrieved new access token
      api.dispatch(
        setUser({
          user,
          token: data.data.accessToken, // renewed token
        })
      );
    } else {
      // if invalid access token then logout
      api.dispatch(logout());
    }

    result = await baseQuery(args, api, extraOptions);
  }

  return result; // 🔥 This was missing!
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithRefreshToken,
  endpoints: () => ({}),
});
