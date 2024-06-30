import ScrollToTop from "@/components/shared/ScrollToTop";
import Footer from "@/components/shared/Footer";
import DashboardNavbar from "@/components/ui/dashboard/DashboardNavbar/DashboardNavbar";
import { TChildren } from "@/types";

const DashboardLayout = ({ children }: TChildren) => {
   return (
      <div className="dark:bg-slate-900 dark:text-cs-white text-black/80">
         <DashboardNavbar />
         <div className="h-[80px]"></div>
         {/* Main page */}
         <div className="min-h-[90vh]">{children}</div>
         {/* Main page end */}
         <ScrollToTop />
         <Footer />
      </div>
   );
};

export default DashboardLayout;
