import { MyInformation } from "@/backend/model/about.model";

export const getMyInformation = async () => {
   try {
      const result = await MyInformation.find();

      return result;
   } catch (error) {
      console.log(error);
   }
};
