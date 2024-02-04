import Link from "next/link";
import { IoMdEye } from "react-icons/io";
import { FaCode } from "react-icons/fa6";

type TProject = {
   title: string;
   description: string;
   image: string;
   technology: string[];
   code: {
      client?: string;
      server?: string;
   };
   preview?: string;
   docs?: string;
   order?: number;
};

const ProjectCard = ({
   title,
   description,
   image,
   technology,
   code,
   preview,
   docs,
   order,
}: TProject) => {
   return (
      <div className="bg-cs-blue-deep shadow-2xl grid lg:grid-cols-2 xl:grid-cols-9 gap-5 p-8">
         <div className="col-span-1 xl:col-span-4">
            <img
               src={image}
               alt={title}
               className="w-full h-full max-w-[600px] max-h-[500px]"
            />
         </div>
         <div className="col-span-1 xl:col-span-5 flex flex-col justify-between gap-4">
            <div>
               <h3 className="text-3xl text-cs-orange font-semibold mb-2">
                  {title}
               </h3>
               <p className="text-cs-white leading-relaxed tracking-wide">
                  {description}
               </p>
            </div>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-1  uppercase">
               {technology.map((item, i) => (
                  <p
                     key={i}
                     className="text-xl text-cs-orange font-semibold"
                  >
                     {item}
                  </p>
               ))}
            </div>
            <div className="flex items-center gap-5 mb-2">
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
            </div>
         </div>
      </div>
   );
};

export default ProjectCard;
