import { dummyProjectData } from "@/data/projects";
import ProjectCardForDashboard from "./ProjectCardForDashboard";

const AllProject = () => {
   return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
         {dummyProjectData.map(({ title, image, code, preview, order }, i) => (
            <ProjectCardForDashboard
               key={i}
               title={title}
               id={(i + 1).toString()}
               image={image}
               code={code}
               preview={preview}
               order={order}
            />
         ))}
      </div>
   );
};

export default AllProject;
