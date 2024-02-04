import type { Config } from "tailwindcss";

const config: Config = {
   darkMode: "class",
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      container: {
         padding: {
            DEFAULT: "1rem",
            sm: "2rem",
            lg: "2rem",
            xl: "2.5rem",
            "2xl": "6rem",
         },
      },
      extend: {
         backgroundImage: {
            "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            "gradient-conic":
               "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
         },
         colors: {
            "cs-orange": "#FCA61F",
            "cs-yellow": "#F5C32C",
            // "cs-gray": "#788097",
            "cs-gray": "#5c6170",
            "cs-white": "#cfd0d1",
            "cs-blue-deep": "#242D49",
         },
         animation: {
            "spin-border": "spin 5s linear infinite",
         },
      },
   },
   plugins: [require("daisyui")],
};
export default config;
