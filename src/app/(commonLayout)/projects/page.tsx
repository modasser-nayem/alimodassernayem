"use client";

import BackLink from "@/components/shared/BackLink";
import Loading from "@/components/shared/Loading";
import ProjectCard from "@/components/ui/home/Projects/ProjectCard";
import { useGetAllProjectsQuery } from "@/redux/api/projectApi";
import React from "react";

const ProjectsPage = () => {
   const { data, isLoading, isError } = useGetAllProjectsQuery(undefined);

   const projects = data?.data;

   if (isError) {
      return (
         <h2 className="text-center p-8">Something went wrong try again?</h2>
      );
   }

   return (
      <div className="cs-container mt-5 mb-[5rem]">
         <BackLink
            href="/"
            className="mb-5 w-fit"
         />
         {isLoading ? (
            <Loading />
         ) : !projects ? (
            <h2>No Have any data</h2>
         ) : (
            <div className="grid gap-10">
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
            </div>
         )}
      </div>
   );
};

export default ProjectsPage;
