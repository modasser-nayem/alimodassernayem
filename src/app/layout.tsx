import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TChildren } from "@/types";
import Providers from "@/lib/Providers/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "Ali Modasser Nayem",
   description: "I am a Fullstack web developer and Software Developer",
};

export default function RootLayout({ children }: TChildren) {
   return (
      <html
         lang="en"
         suppressHydrationWarning={true}
      >
         <body className={inter.className}>
            <Providers>{children}</Providers>
         </body>
      </html>
   );
}
