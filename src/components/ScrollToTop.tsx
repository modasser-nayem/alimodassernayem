"use client";

import { ReactNode } from "react";
import { animateScroll } from "react-scroll";

type TScrollToTopProps = {
   children?: ReactNode;
   className?: string;
   duration?: number;
   smooth?: true;
};

const ScrollToTop = ({
   children,
   className,
   duration,
   smooth,
}: TScrollToTopProps) => {
   const options = {
      duration: duration || 500,
      smooth: smooth || true,
   };

   const handleScrollToTop = () => {
      animateScroll.scrollToTop(options);
   };

   return (
      <div
         onClick={handleScrollToTop}
         className={className}
      >
         {children}
      </div>
   );
};

export default ScrollToTop;
