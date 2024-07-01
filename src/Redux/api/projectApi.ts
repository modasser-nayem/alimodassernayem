import { apiMethod } from "@/constant/apiMethod";
import { baseApi } from "./baseApi";
import { TProject, TSingleProject } from "@/types/project";
import { TRtqQueryResponse } from "@/types/redux";

const projectApi = baseApi.injectEndpoints({
   endpoints: (builder) => ({
      addNewProject: builder.mutation({
         query: (data) => ({
            url: "/projects",
            method: apiMethod.POST,
            body: data,
         }),
         invalidatesTags: ["projects"],
      }),
      updateProject: builder.mutation({
         query: ({ data, id }: { data: FormData; id: string }) => ({
            url: `/projects/${id}`,
            method: apiMethod.PUT,
            body: data,
         }),
         invalidatesTags: ["projects"],
      }),
      getAllProjects: builder.query<TRtqQueryResponse<TProject[]>, any>({
         query: () => ({
            url: "/projects",
            method: apiMethod.GET,
         }),
         providesTags: ["projects"],
      }),
      getSingleProject: builder.query<TRtqQueryResponse<TSingleProject>, any>({
         query: ({ id }: { id: string }) => ({
            url: `/projects/${id}`,
            method: apiMethod.GET,
         }),
         providesTags: ["projects"],
      }),
      deleteProject: builder.mutation({
         query: ({ id }: { id: string }) => ({
            url: `/projects/${id}`,
            method: apiMethod.DELETE,
         }),
         invalidatesTags: ["projects"],
      }),
   }),
});

export const {
   useAddNewProjectMutation,
   useUpdateProjectMutation,
   useGetAllProjectsQuery,
   useGetSingleProjectQuery,
   useDeleteProjectMutation,
} = projectApi;
