"use client";

import { persistor, store } from "@/redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";

type ProvidersProps = {
   children: ReactNode;
};

const Providers = ({ children }: ProvidersProps) => {
   return (
      <Provider store={store}>
         <PersistGate
            loading={null}
            persistor={persistor}
         >
            <ThemeProvider
               attribute="class"
               defaultTheme="dark"
            >
               <Toaster
                  position="top-center"
                  richColors
               />
               {children}
            </ThemeProvider>
         </PersistGate>
      </Provider>
   );
};

export default Providers;
