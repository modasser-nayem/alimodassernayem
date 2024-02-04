import Image from "next/image";
import React from "react";
import { MdFormatQuote, MdOutlineFileDownload } from "react-icons/md";
import img from "@/assets/nayem3.png";

const About = () => {
   const aboutText =
      "I am an accomplished Full-Stack (MERN) web application developer. I am a hard worker and a quick learner. I always try to learn new things to build up my professional skills. I can adjust to any new technology within a very short time. I develop quality responsive websites, clean user interfaces, and rich interactive web apps. Passionate with Html, CSS, Tailwind, Javascript, React, Node, Express, and MongoDB.";
   return (
      <section
         id="about"
         className="cs-container relative"
      >
         <div className="">
            <div className="cs-title-box text-center">
               <h1 className="text-2xl">About Me.</h1>
               <h1>_WHOMI_</h1>
               <p className="mx-auto">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente ipsa quaerat deleniti necessitatibus officiis totam
                  architecto repellat natus, optio ipsam.
               </p>
            </div>
            <div className="flex flex-col items-center lg:flex-row gap-10 lg:mt-[5rem]">
               <div className="">
                  <div className="my-10 max-w-[700px] text-3xl italic font-semibold text-center">
                     <MdFormatQuote className="mx-auto text-cs-orange text-4xl" />
                     <h3 className="text-cs-orange">
                        {
                           "I don't believe just in talent. Consistency, focused work and perseverance beats everything"
                        }
                     </h3>
                     <p className="text-2xl font-semibold mt-5">
                        - Ali Modasser Nayem -
                     </p>
                  </div>
                  <p className="dark:text-cs-white text-cs-gray text-justify text-lg leading-relaxed max-w-[700px]">
                     {aboutText}
                  </p>
                  <div className="flex items-center gap-5 mt-5">
                     <button className="cs-btn-outline flex items-center gap-2">
                        CV Download
                        <MdOutlineFileDownload className="w-5 h-5" />
                     </button>
                     <button className="cs-btn">Contact Me</button>
                  </div>
               </div>
               <div className="mt-[3rem]">
                  <Image
                     src={img}
                     alt="about"
                     className="w-full max-w-[350px] max-h-[500px] md:max-w-[450px] md:max-h-[600px] bg-blend-lighten rounded-xl"
                  />
               </div>
            </div>
         </div>
         <div className="cs-bg-blur top-[65%] bg-rose-100"></div>
         <div className="cs-bg-blur bg-yellow-100 top-[30%] right-[8%]"></div>
      </section>
   );
};

export default About;
