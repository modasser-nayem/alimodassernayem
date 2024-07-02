"use client";

import { useTheme } from "next-themes";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

const ToggleTheme = () => {
   const { theme, setTheme } = useTheme();

   return (
      <div
         onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
         className="relative flex items-center gap-1 border-[3px] border-cs-orange rounded-full p-[2px] cursor-pointer"
      >
         <div className="flex items-center text-cs-orange">
            <IoMoonOutline className="w-5 h-5" />
            <IoSunnyOutline className="w-5 h-5" />
         </div>
         <div
            className="absolute w-5 h-5 bg-orange-400 rounded-full
               dark:left-[2px] right-[2px]"
         ></div>
      </div>
   );
};

export default ToggleTheme;
