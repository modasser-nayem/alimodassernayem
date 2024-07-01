"use client";

import Loading from "@/components/shared/Loading";
import { useGetSingleProjectQuery } from "@/redux/api/projectApi";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { FaCode } from "react-icons/fa6";
import { IoMdEye } from "react-icons/io";
import { MdTaskAlt } from "react-icons/md";

const ProjectDetails = () => {
   const params = useParams();
   const projectId = params.id as string;
   const { data, isLoading } = useGetSingleProjectQuery({ id: projectId });
   const project = data?.data;

   return (
      <div className="cs-container">
         {isLoading ? (
            <Loading />
         ) : !project ? (
            <h2>Try again</h2>
         ) : (
            <div className="w-full max-w-[1080px] mx-auto p-2 md:p-4">
               <div className="">
                  <Image
                     src={project.image}
                     alt={project.title}
                     // className="w-full h-full max-w-[900px] max-h-[500px]"
                     width={1080}
                     height={700}
                  />
               </div>
               <div className="flex flex-col justify-between gap-8">
                  <h3 className="text-3xl text-cs-orange font-semibold mt-4">
                     {project.title}
                  </h3>
                  <div>
                     <h4 className="text-xl font-semibold mb-1">About</h4>
                     <p className="text-cs-white leading-relaxed tracking-wide">
                        {project.about}
                     </p>
                  </div>
                  <div>
                     <h4 className="text-xl font-semibold mb-2">Features</h4>
                     {project.features && (
                        <div className="pl-2">
                           {project.features.map((item, i) => (
                              <p
                                 key={i}
                                 className="text-lg flex items-baseline gap-3 pb-2"
                              >
                                 <span className="text-cs-orange">
                                    <MdTaskAlt />
                                 </span>
                                 <span className="text-cs-white leading-relaxed tracking-wide">
                                    {item}
                                 </span>
                              </p>
                           ))}
                        </div>
                     )}
                  </div>
                  <div>
                     <h4 className="text-xl font-semibold mb-1">Technology</h4>
                     <div className="flex flex-wrap items-center gap-x-5 gap-y-1  uppercase">
                        {project.technology.map((item, i) => (
                           <p
                              key={i}
                              className="text-xl text-cs-orange font-semibold"
                           >
                              {item}
                           </p>
                        ))}
                     </div>
                  </div>
                  <div>
                     <h2 className="text-xl font-semibold mb-2">
                        Important Link
                     </h2>
                     <div className="flex flex-wrap items-center gap-5 mb-2">
                        {/* preview link */}
                        {project.preview && (
                           <Link
                              className="cs-project-icon-link"
                              href={project.preview}
                           >
                              <IoMdEye />
                              <span>preview</span>
                           </Link>
                        )}

                        {/* client code link */}
                        {project?.code?.client && (
                           <Link
                              className="cs-project-icon-link"
                              href={project.code.client}
                           >
                              <FaCode />
                              Client
                           </Link>
                        )}

                        {/* server code link */}
                        {project?.code?.server && (
                           <Link
                              className="cs-project-icon-link"
                              href={project.code.server}
                           >
                              <FaCode />
                              <span>Server</span>
                           </Link>
                        )}
                     </div>
                  </div>
                  {project?.description && (
                     <div>
                        <h4 className="text-xl font-semibold mb-1">
                           Description
                        </h4>
                        <p className="text-cs-white leading-relaxed tracking-wide">
                           {project.description}
                        </p>
                     </div>
                  )}
               </div>
            </div>
         )}
      </div>
   );
};

export default ProjectDetails;
