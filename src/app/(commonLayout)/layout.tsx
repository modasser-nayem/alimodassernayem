import ScrollToTop from "@/components/shared/ScrollToTop";
import Footer from "@/components/shared/Footer";
import { TChildren } from "@/types";
import Navbar from "@/components/shared/Navbar";

const CommonLayout = ({ children }: TChildren) => {
   return (
      <div className="dark:bg-slate-900 dark:text-cs-white text-black/80">
         <Navbar />
         <div className="h-[80px]"></div>
         {/* Main page */}
         {children}
         {/* Main page end */}
         <ScrollToTop />
         <Footer />
      </div>
   );
};

export default CommonLayout;
