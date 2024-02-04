import { TProject } from "@/Redux/features/project/projectSlice";
import ProjectCard from "@/components/ProjectCard";
import { IoMdEye } from "react-icons/io";

type TProjectProps = {
   sortDescription: string;
   projects: TProject[];
};

const Projects = ({ sortDescription, projects }: TProjectProps) => {
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
         <div className="mt-[5rem] grid gap-10">
            {projects.map((item) => (
               <ProjectCard
                  key={item._id}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  technology={item.technology}
                  code={item.code}
                  preview={item.preview}
                  docs={item.docs}
               />
            ))}
            <button className="cs-btn mx-auto mt-8">
               <IoMdEye /> View more...
            </button>
         </div>
      </section>
   );
};

export default Projects;
