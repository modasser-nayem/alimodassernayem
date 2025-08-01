import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
   persistStore,
   persistReducer,
   FLUSH,
   REHYDRATE,
   PAUSE,
   PERSIST,
   PURGE,
   REGISTER,
} from "redux-persist";
import { themeReducer } from "./features/themeSlice";
import { authReducer } from "./features/auth";
import { baseApi } from "./api/baseApi";
import { informationReducer } from "./features/information";
import { projectsReducer } from "./features/projects";
import { skillsReducer } from "./features/skills";
import { servicesReducer } from "./features/services";

const persistConfig = {
   key: "auth",
   storage,
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
   reducer: {
      [baseApi.reducerPath]: baseApi.reducer,
      auth: persistedAuthReducer,
      theme: themeReducer,
      information: informationReducer,
      projects: projectsReducer,
      skills: skillsReducer,
      services: servicesReducer,
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
         },
      }).concat(baseApi.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
