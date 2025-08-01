import { apiMethod } from "@/constant/apiMethod";
import { baseApi } from "./baseApi";
import { TRtqQueryResponse } from "@/types/redux";
import { IInformation } from "@/types/information";

const informationApi = baseApi.injectEndpoints({
   endpoints: (builder) => ({
      getInformation: builder.query<TRtqQueryResponse<IInformation>, any>({
         query: () => ({
            url: "/information",
            method: apiMethod.GET,
         }),
      }),
   }),
});

export const { useGetInformationQuery } = informationApi;
