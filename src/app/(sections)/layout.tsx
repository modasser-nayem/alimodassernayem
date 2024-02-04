import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import { TLayout } from "@/types";
import { FaCircleArrowUp } from "react-icons/fa6";

const SectionLayout = ({ children }: TLayout) => {
   return (
      <div className="dark:bg-slate-900 dark:text-cs-white">
         <Navbar />
         <div className="navbar"></div>
         {children}
         <div className="fixed right-5 bottom-5 rounded-full flex items-center justify-center cursor-pointer border-2 border-cs-orange">
            <ScrollToTop className="relative p-1.5 md:p-2 rounded-full overflow-hidden">
               <FaCircleArrowUp className="relative z-50 top-1 animate-bounce shadow-xl shadow-cs-orange text-2xl md:text-3xl text-cs-orange" />
               <div className="p-[60%] absolute top-[-10%] left-[-10%] transition-all bg-gradient-to-r from-cyan-500 to-purple-500 animate-spin duration-[3000ms]"></div>
            </ScrollToTop>
         </div>
      </div>
   );
};

export default SectionLayout;
