import Link from "next/link";
import { IoMdEye } from "react-icons/io";
import { FaCode } from "react-icons/fa6";
import { BiDetail } from "react-icons/bi";
import Image from "next/image";

type TProject = {
   id: string;
   title: string;
   about: string;
   image: string;
   technology: string[];
   code: {
      client?: string;
      server?: string;
   };
   preview?: string;
};

const ProjectCard = ({
   id,
   title,
   about,
   image,
   technology,
   code,
   preview,
}: TProject) => {
   return (
      <div className="bg-cs-blue-deep w-full shadow-2xl grid lg:grid-cols-2 xl:grid-cols-9 gap-5 p-4 md:p-8">
         <div className="col-span-1 xl:col-span-4">
            <Image
               src={image}
               alt={title}
               className="w-full h-full max-w-[600px] max-h-[500px]"
               width={600}
               height={500}
            />
         </div>
         <div className="col-span-1 xl:col-span-5 flex flex-col justify-between gap-4">
            <div>
               <h3 className="text-3xl text-cs-orange font-semibold mb-2">
                  {title}
               </h3>
               <p className="text-cs-white leading-relaxed tracking-wide">
                  {about}
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
            <div className="flex flex-wrap items-center gap-5 mb-2">
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
         </div>
      </div>
   );
};

export default ProjectCard;