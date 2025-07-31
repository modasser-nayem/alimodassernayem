"use client";

import ProjectCardForDashboard from "./ProjectCardForDashboard";
import { useGetAllProjectsQuery } from "@/redux/api/projectApi";
import Loading from "@/components/shared/Loading";

const AllProject = () => {
   const { data, isLoading, isError } = useGetAllProjectsQuery(undefined);

   const projects = data?.data;

   if (isError) {
      return (
         <h2 className="text-center p-8">Something went wrong try again?</h2>
      );
   }

   return (
      <>
         {isLoading ? (
            <Loading />
         ) : !projects ? (
            <h2>No Have any data</h2>
         ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
               {projects.map(({ _id, title, image, code, preview, order }) => (
                  <ProjectCardForDashboard
                     key={_id}
                     title={title}
                     id={_id}
                     image={image}
                     code={code}
                     preview={preview}
                     order={order}
                  />
               ))}
            </div>
         )}
      </>
   );
};

export default AllProject;
