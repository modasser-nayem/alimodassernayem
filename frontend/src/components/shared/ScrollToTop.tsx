"use client";

import { FaCircleArrowUp } from "react-icons/fa6";
import { animateScroll } from "react-scroll";

type TScrollToTopProps = {
   duration?: number;
   smooth?: true;
};

const ScrollToTop = ({ duration, smooth }: TScrollToTopProps) => {
   const options = {
      duration: duration || 500,
      smooth: smooth || true,
   };

   const handleScrollToTop = () => {
      animateScroll.scrollToTop(options);
   };

   return (
      <div className="fixed right-5 bottom-5 rounded-full flex items-center justify-center cursor-pointer border-2 border-cs-orange">
         <div
            onClick={handleScrollToTop}
            className="relative p-1.5 md:p-2 rounded-full overflow-hidden"
         >
            <FaCircleArrowUp className="relative z-50 top-1 animate-bounce shadow-xl shadow-cs-orange text-2xl md:text-3xl text-cs-orange" />
            <div className="p-[60%] absolute top-[-10%] left-[-10%] transition-all bg-gradient-to-r from-cyan-500 to-purple-500 animate-spin duration-[3000ms]"></div>
         </div>
      </div>
   );
};

export default ScrollToTop;
