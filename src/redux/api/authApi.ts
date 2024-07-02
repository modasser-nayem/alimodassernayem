import { apiMethod } from "@/constant/apiMethod";
import { baseApi } from "./baseApi";

const authApi = baseApi.injectEndpoints({
   endpoints: (builder) => ({
      loginUser: builder.mutation({
         query: (data: { email: string; password: string }) => ({
            url: "/auth/login",
            method: apiMethod.POST,
            body: data,
         }),
      }),
   }),
});

export const { useLoginUserMutation } = authApi;
