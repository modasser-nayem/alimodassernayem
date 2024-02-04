"use client";

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
import men from "@/assets/nayem4.png";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import NavLink from "@/components/NavLink";

type TIntroductionProps = {
   name: string;
   title: string[];
   resume?: string;
   description: string;
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
   description,
   image,
   facebook,
   instagram,
   linkedin,
   github,
}: TIntroductionProps) => {
   return (
      <section
         id="introduction"
         className="cs-container"
      >
         <div className="flex flex-col lg:flex-row items-center justify-center relative">
            {/* Left */}
            <div className="flex-1 py-[6rem]">
               <div className="cs-title-box">
                  <h1>Hey!, I AM</h1>
                  <h1>{name ? name : "Ali Modasser Nayem"}</h1>
               </div>
               <h3 className="text-2xl italic capitalize font-semibold mt-2">
                  I am a __
                  <TypeAnimation
                     sequence={
                        title
                           ? title
                                .join(",3000,")
                                .split(",")
                                .map((item: string) => {
                                   if (isNaN(parseInt(item))) {
                                      return item;
                                   } else {
                                      return parseFloat(item);
                                   }
                                })
                           : ["Full-Stack Web Developer", 1000]
                     }
                     speed={50}
                     className="text-cs-orange"
                     wrapper="span"
                     repeat={Infinity}
                  />
                  __
               </h3>
               <p className="dark:text-cs-white text-cs-gray text-lg my-8">
                  {description}
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
                     path="contact"
                     className="cs-btn"
                  >
                     Hire me
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
               <div className="w-[350px] h-[450px] md:w-[450px] md:h-[550px] relative flex items-center justify-center overflow-hidden border-4 border-cs-orange bg-blend-multiply shadow-[-10px_10px] shadow-cs-orange">
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
                  <Image
                     className="absolute w-full h-full"
                     src={men}
                     alt="ali modasser nayem"
                  />
               </div>
            </div>
            {/* bg blur */}
            <div className="cs-bg-blur right-0 top-0 bg-purple-200"></div>
            <div className="cs-bg-blur left-[35%] bottom-0"></div>
         </div>
      </section>
   );
};

export default Introduction;
