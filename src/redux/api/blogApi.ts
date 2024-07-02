import { apiMethod } from "@/constant/apiMethod";
import { baseApi } from "./baseApi";
import { TQueryParams, TRtqQueryResponse } from "@/types/redux";
import { TBlog, TSingleBlog } from "@/types/blog";
import { makeQueryParams } from "@/utils/rtqApi";

const blogApi = baseApi.injectEndpoints({
   endpoints: (builder) => ({
      createNewBlog: builder.mutation({
         query: (data) => ({
            url: "/blogs",
            method: apiMethod.POST,
            body: data,
         }),
         invalidatesTags: ["blogs"],
      }),
      updateBlog: builder.mutation({
         query: ({ data, id }: { data: FormData; id: string }) => ({
            url: `/blogs/${id}`,
            method: apiMethod.PUT,
            body: data,
         }),
         invalidatesTags: ["blogs"],
      }),
      getAllBlog: builder.query<TRtqQueryResponse<TBlog[]>, any>({
         query: (args?: { query?: TQueryParams[] }) => {
            const params = makeQueryParams(args?.query);

            return {
               url: "/blogs",
               method: apiMethod.GET,
               params: params,
            };
         },
         providesTags: ["blogs"],
      }),
      getSingleBlog: builder.query<TRtqQueryResponse<TSingleBlog>, any>({
         query: ({ id }: { id: string }) => ({
            url: `/blogs/${id}`,
            method: apiMethod.GET,
         }),
         providesTags: ["blogs"],
      }),
      deleteBlog: builder.mutation({
         query: ({ id }: { id: string }) => ({
            url: `/blogs/${id}`,
            method: apiMethod.DELETE,
         }),
         invalidatesTags: ["blogs"],
      }),
   }),
});

export const {
   useCreateNewBlogMutation,
   useUpdateBlogMutation,
   useGetAllBlogQuery,
   useGetSingleBlogQuery,
   useDeleteBlogMutation,
} = blogApi;
