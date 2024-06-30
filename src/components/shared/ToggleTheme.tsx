"use client";

import { MoonIcon } from "@heroicons/react/24/outline";
import { SunIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";

const ToggleTheme = () => {
   const { theme, setTheme } = useTheme();

   return (
      <div
         onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
         className="relative flex items-center gap-1 border-[3px] border-cs-orange rounded-full p-[2px] cursor-pointer"
      >
         <div className="flex items-center text-cs-orange">
            <MoonIcon className="w-5 h-5" />
            <SunIcon className="w-5 h-5" />
         </div>
         <div
            className="absolute w-5 h-5 bg-orange-400 rounded-full
               dark:left-[2px] right-[2px]"
         ></div>
      </div>
   );
};

export default ToggleTheme;
