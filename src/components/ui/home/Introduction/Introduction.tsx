import Link from "next/link";
import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import {
   FaFacebookF,
   FaGithub,
   FaInstagram,
   FaLinkedinIn,
} from "react-icons/fa6";
import vector1 from "@/assets/Vector1.png";
import vector2 from "@/assets/Vector2.png";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import NavLink from "@/components/shared/NavLink";

type TIntroductionProps = {
   name: string;
   title: string[];
   resume?: string;
   sortDescription: string;
   image: string;
   facebook?: string;
   instagram?: string;
   linkedin?: string;
   github?: string;
   whatsapp?: string;
};

const Introduction = ({
   name,
   title,
   resume,
   sortDescription,
   image,
   facebook,
   instagram,
   linkedin,
   github,
}: TIntroductionProps) => {
   const transformedTitle: (string | number)[] = title.flatMap((occupation) => [
      occupation,
      3000,
   ]);

   return (
      <section
         id="introduction"
         className="cs-container relative"
      >
         <div className="flex flex-col lg:flex-row items-center justify-center">
            {/* Left */}
            <div className="flex-1 py-[6rem]">
               <div className="cs-title-box">
                  <h1>Hey!, I AM</h1>
                  <h1>{name ? name : "Ali Modasser Nayem"}</h1>
               </div>
               <h3 className="text-2xl italic font-semibold mt-2 h-14 md:h-auto">
                  I am a __
                  <TypeAnimation
                     sequence={
                        transformedTitle
                           ? transformedTitle
                           : ["Full-Stack Developer"]
                     }
                     speed={10}
                     className="text-cs-orange"
                     wrapper="span"
                     repeat={Infinity}
                  />
               </h3>
               <p className="dark:text-cs-white text-cs-gray text-lg my-8">
                  {sortDescription}
               </p>
               <div className="flex items-center gap-5">
                  {resume && (
                     <a
                        href={resume}
                        className="cs-btn-outline"
                     >
                        CV Download
                        <MdOutlineFileDownload />
                     </a>
                  )}
                  <NavLink
                     path="projects"
                     className="cs-btn"
                  >
                     Projects
                  </NavLink>
               </div>
               <div className="flex items-center gap-8 mt-16">
                  {facebook && (
                     <Link
                        className="cs-social-icon"
                        href={facebook}
                     >
                        <FaFacebookF />
                     </Link>
                  )}
                  {instagram && (
                     <Link
                        className="cs-social-icon"
                        href={instagram}
                     >
                        <FaInstagram />
                     </Link>
                  )}
                  {linkedin && (
                     <Link
                        className="cs-social-icon"
                        href={linkedin}
                     >
                        <FaLinkedinIn />
                     </Link>
                  )}
                  {github && (
                     <Link
                        className="cs-social-icon"
                        href={github}
                     >
                        <FaGithub />
                     </Link>
                  )}
               </div>
            </div>
            {/* Right */}
            <div className="flex-1 flex items-center justify-center">
               {/* image */}
               <div className="w-[310px] h-[400px] md:w-[450px] md:h-[550px] relative flex items-center justify-center overflow-hidden border-4 border-cs-orange bg-blend-multiply shadow-[-10px_10px] shadow-cs-orange">
                  <Image
                     className="absolute origin-center -rotate-180 w-full h-full"
                     src={vector1}
                     alt="vector1"
                  />
                  <Image
                     className="absolute top-32 -origin-bottom-left -rotate-90 w-full h-full"
                     src={vector2}
                     alt="vector2"
                  />
                  {image && (
                     <Image
                        className="absolute w-full h-full"
                        src={image}
                        alt="ali modasser nayem"
                        width={450}
                        height={500}
                     />
                  )}
               </div>
            </div>
         </div>
         {/* bg blur */}
         <div className="">
            <div className="-z-10 cs-bg-blur right-0 top-0 bg-purple-400 md:bg-purple-200"></div>
            <div className="-z-10 cs-bg-blur left-[35%] bottom-0"></div>
         </div>
      </section>
   );
};

export default Introduction;
