import { configureStore } from "@reduxjs/toolkit";
import { themeReducer } from "./features/themeSlice";
import { baseApi } from "./ReduxApi/baseApi";
import { informationReducer } from "./features/information/informationSlice";
import { projectReducer } from "./features/project/projectSlice";
import { skillsReducer } from "./features/skill/skillSlice";
import { serviceReducer } from "./features/service/serviceSlice";

export const makeStore = () => {
   return configureStore({
      reducer: {
         [baseApi.reducerPath]: baseApi.reducer,
         theme: themeReducer,
         information: informationReducer,
         projects: projectReducer,
         skills: skillsReducer,
         services: serviceReducer,
      },
      middleware: (getDefaultMiddleware) =>
         getDefaultMiddleware().concat(baseApi.middleware),
   });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
