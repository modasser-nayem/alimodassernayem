import React from "react";
import { MdFormatQuote, MdOutlineFileDownload } from "react-icons/md";
import Link from "next/link";
import NavLink from "@/components/shared/NavLink";
import Image from "next/image";

type TAboutProps = {
   description: string;
   sortDescription: string;
   image: string;
   resume?: string;
   speech?: string;
   name: string;
};

const About = ({
   description,
   sortDescription,
   image,
   resume,
   speech,
   name,
}: TAboutProps) => {
   return (
      <section
         id="about"
         className="cs-container relative"
      >
         <div className="">
            <div className="cs-title-box text-center">
               <h1 className="text-2xl">About Me.</h1>
               <h1>_WHOMI_</h1>
               <p className="mx-auto">{sortDescription}</p>
            </div>
            <div className="flex flex-col items-center lg:flex-row gap-10 lg:mt-[5rem]">
               <div className="">
                  {speech && (
                     <div className="my-10 max-w-[700px] text-3xl italic font-semibold text-center">
                        <MdFormatQuote className="mx-auto text-cs-orange text-4xl" />
                        <h3 className="text-cs-orange">{speech}</h3>
                        <p className="text-2xl font-semibold mt-5">
                           - {name} -
                        </p>
                     </div>
                  )}
                  <p className="dark:text-cs-white text-cs-gray text-justify text-lg leading-relaxed max-w-[700px]">
                     {description}
                  </p>
                  <div className="flex items-center gap-5 mt-[4rem]">
                     {resume && (
                        <Link
                           href={resume}
                           className="cs-btn-outline flex items-center gap-2"
                        >
                           CV Download
                           <MdOutlineFileDownload className="w-5 h-5" />
                        </Link>
                     )}
                     <NavLink
                        path="contact"
                        className="cs-btn"
                     >
                        Contact Me
                     </NavLink>
                  </div>
               </div>
               <div className="mt-[3rem]">
                  {image && (
                     <Image
                        src={image}
                        alt="about"
                        className="w-full max-w-[350px] max-h-[500px] md:max-w-[450px] md:max-h-[600px] bg-blend-lighten rounded-xl"
                        width={450}
                        height={600}
                     />
                  )}
               </div>
            </div>
         </div>
         <div className="cs-bg-blur top-[65%] bg-rose-100"></div>
         <div className="cs-bg-blur bg-yellow-100 top-[30%] right-[8%]"></div>
      </section>
   );
};

export default About;
