import { informationDefaultValue } from "@/constant/information";
import { IInformation } from "@/types/information";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IInformation = informationDefaultValue;

const informationSlice = createSlice({
   name: "information",
   initialState,
   reducers: {
      setInformation: (state, action: PayloadAction<IInformation>) => {
         return { ...informationDefaultValue, ...action.payload };
      },
   },
});

export const { setInformation } = informationSlice.actions;
export const informationReducer = informationSlice.reducer;
