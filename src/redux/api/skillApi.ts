import { apiMethod } from "@/constant/apiMethod";
import { baseApi } from "./baseApi";
import { TQueryParams, TRtqQueryResponse } from "@/types/redux";
import { TSingleSkill, TSkill } from "@/types/skill";
import { makeQueryParams } from "@/utils/rtqApi";

const skillApi = baseApi.injectEndpoints({
   endpoints: (builder) => ({
      addNewSkill: builder.mutation({
         query: (data) => ({
            url: "/skills",
            method: apiMethod.POST,
            body: data,
         }),
         invalidatesTags: ["skills"],
      }),
      updateSkill: builder.mutation({
         query: ({ data, id }: { data: any; id: string }) => ({
            url: `/skills/${id}`,
            method: apiMethod.PUT,
            body: data,
         }),
         invalidatesTags: ["skills"],
      }),
      getAllSkills: builder.query<TRtqQueryResponse<TSkill[]>, any>({
         query: (args?: { query?: TQueryParams[] }) => {
            const params = makeQueryParams(args?.query);

            return {
               url: "/skills",
               method: apiMethod.GET,
               params: params,
            };
         },
         providesTags: ["skills"],
      }),
      getSingleSkill: builder.query<TRtqQueryResponse<TSingleSkill>, any>({
         query: ({ id }: { id: string }) => ({
            url: `/skills/${id}`,
            method: apiMethod.GET,
         }),
         providesTags: ["skills"],
      }),
      deleteSkill: builder.mutation({
         query: ({ id }: { id: string }) => ({
            url: `/skills/${id}`,
            method: apiMethod.DELETE,
         }),
         invalidatesTags: ["skills"],
      }),
   }),
});

export const {
   useAddNewSkillMutation,
   useGetAllSkillsQuery,
   useGetSingleSkillQuery,
   useUpdateSkillMutation,
   useDeleteSkillMutation,
} = skillApi;
