import AllProject from "@/components/ui/dashboard/Projects/AllProject";
import Link from "next/link";
import React from "react";
import { FaPlus } from "react-icons/fa6";

const ProjectsPage = () => {
   return (
      <div>
         <div className="my-6 flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Projects</h2>
            <Link
               href="/dashboard/projects/add-project"
               className="cs-btn shadow-none hover:shadow-2xl"
            >
               <FaPlus /> Add Project
            </Link>
         </div>
         <AllProject />
      </div>
   );
};

export default ProjectsPage;
