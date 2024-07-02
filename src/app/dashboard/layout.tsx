"use client";

import ScrollToTop from "@/components/shared/ScrollToTop";
import Footer from "@/components/shared/Footer";
import DashboardNavbar from "@/components/ui/dashboard/DashboardNavbar/DashboardNavbar";
import { TChildren } from "@/types";
import { useAppSelector } from "@/redux/hook";
import { useRouter } from "next/navigation";

const DashboardLayout = ({ children }: TChildren) => {
   const router = useRouter();

   const user = useAppSelector((state) => state.auth.user);

   if (!user) {
      return router.push("/login");
   }

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
