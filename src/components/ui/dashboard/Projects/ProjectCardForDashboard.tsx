import FormDialog from "@/components/form/FormDialog";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiDetail } from "react-icons/bi";
import { FaCode } from "react-icons/fa6";
import { IoMdEye } from "react-icons/io";
import { MdDelete, MdEdit } from "react-icons/md";
import UpdateProject from "./UpdateProject";

type TProjectCardForDashboardProps = {
   id: string;
   title: string;
   image: string;
   code: {
      client: string;
      server: string;
   };
   preview: string;
   order: number;
};

const ProjectCardForDashboard = ({
   id,
   title,
   image,
   code,
   preview,
   order,
}: TProjectCardForDashboardProps) => {
   return (
      <div
         key={id}
         className="bg-cs-blue-deep w-full shadow-2xl p-4 relative"
      >
         <div className="">
            <Image
               src={image}
               alt={title}
               className="w-full h-full max-w-[600px] max-h-[500px]"
               width={600}
               height={500}
            />
         </div>
         <h2 className="text-2xl text-cs-orange font-semibold mt-2 mb-4">
            {title}
         </h2>
         <h3 className="text-xl text-cs-orange font-semibold mt-2 mb-4">
            Order: {order}
         </h3>
         <div className="flex flex-wrap items-center gap-5 mt-2">
            {/* preview link */}
            {preview && (
               <Link
                  className="cs-project-icon-link"
                  href={preview}
               >
                  <IoMdEye />
                  <span>preview</span>
               </Link>
            )}

            {/* client code link */}
            {code.client && (
               <Link
                  className="cs-project-icon-link"
                  href={code.client}
               >
                  <FaCode />
                  Client
               </Link>
            )}

            {/* server code link */}
            {code.server && (
               <Link
                  className="cs-project-icon-link"
                  href={code.server}
               >
                  <FaCode />
                  <span>Server</span>
               </Link>
            )}

            {/* project details */}
            <Link
               className="cs-project-icon-link"
               href={`/projects/${id}`}
            >
               <BiDetail />
               <span>Details</span>
            </Link>
         </div>
         <div className="mt-5 flex items-center justify-between gap-3">
            <UpdateProject id={id} />
            <button className="w-full rounded-md cs-btn-outline hover:rounded-md bg-cs-yellow text-gray-900">
               <MdDelete /> Delete
            </button>
         </div>
      </div>
   );
};

export default ProjectCardForDashboard;
