"use client";

import Loading from "@/components/shared/Loading";
import ProjectCard from "@/components/ui/home/Projects/ProjectCard";
import { TProject } from "@/types/project";
import Link from "next/link";
import { IoMdEye } from "react-icons/io";

type TProjectProps = {
   sortDescription: string;
   projects?: TProject[];
   isError: boolean;
   isLoading: boolean;
};

const Projects = ({
   sortDescription,
   projects,
   isLoading,
   isError,
}: TProjectProps) => {
   return (
      <section
         id="projects"
         className="cs-container"
      >
         <div className="cs-title-box text-center">
            <h1 className="text-2xl">Masterpiece collection.</h1>
            <h1>_Portfolio_</h1>
            {sortDescription && <p className="mx-auto">{sortDescription}</p>}
         </div>
         {isLoading ? (
            <Loading />
         ) : isError ? (
            <h2>Something Went wrong</h2>
         ) : !projects ? (
            <h2>No Have any data</h2>
         ) : (
            <div className="mt-[5rem] grid gap-10">
               {projects.map((item) => (
                  <ProjectCard
                     key={item._id}
                     id={item._id}
                     title={item.title}
                     about={item.about}
                     image={item.image}
                     technology={item.technology}
                     code={item.code}
                     preview={item.preview}
                  />
               ))}
               <Link href="/projects">
                  <button className="cs-btn mx-auto mt-8">
                     <IoMdEye /> View more...
                  </button>
               </Link>
            </div>
         )}
      </section>
   );
};

export default Projects;
