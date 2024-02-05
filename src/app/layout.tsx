import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TLayout } from "@/types";
import StoreProvider from "../Redux/StoreProvider";
import CustomTheme from "./CustomTheme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "Ali Modasser Nayem",
   description: "I am a Fullstack web developer and Software Developer",
};

export default function RootLayout({ children }: TLayout) {
   return (
      <html
         lang="en"
         suppressHydrationWarning={true}
      >
         <body className={inter.className}>
            <StoreProvider>
               <CustomTheme>{children}</CustomTheme>
            </StoreProvider>
         </body>
      </html>
   );
}
