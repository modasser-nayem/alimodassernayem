"use client";

import { TSkill, TStack } from "@/types/skill";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type TSkillsProps = {
   sortDescription: string;
   skills?: TSkill[];
   isError: boolean;
   isLoading: boolean;
};

const Skills = ({ sortDescription, skills: dataSkills }: TSkillsProps) => {
   const [stack, setStack] = useState<TStack>("all");

   const [skills, setSkills] = useState<TSkill[] | undefined>(dataSkills);

   useEffect(() => {
      setSkills(dataSkills);
   }, [dataSkills]);

   const handleClick = (stack: TStack) => {
      setStack(stack);

      switch (stack) {
         case "all":
            setSkills(dataSkills);
            break;
         case "frontend":
            setSkills(
               dataSkills?.filter((skill) => skill.stack === "frontend")
            );
            break;
         case "backend":
            setSkills(dataSkills?.filter((skill) => skill.stack === "backend"));
            break;
         case "tools":
            setSkills(dataSkills?.filter((skill) => skill.stack === "tools"));
            break;
         default:
            setSkills(dataSkills);
      }
   };

   return (
      <section
         id="skills"
         className="cs-container min-h-[60vh]"
      >
         <div>
            <div className="cs-title-box text-center">
               <h1 className="text-2xl">My Awesome.</h1>
               <h1>Skills</h1>
               {sortDescription && <p className="mx-auto">{sortDescription}</p>}
            </div>
            <div className="mt-[3rem] w-fit mx-auto flex gap-4">
               <button
                  onClick={() => handleClick("all")}
                  className={`px-3 lg:px-5 py-0.5 lg:py-1 text-sm hover:py-0 ${
                     stack === "all" ? "cs-btn" : "cs-btn-outline"
                  }`}
               >
                  All
               </button>
               <button
                  onClick={() => handleClick("frontend")}
                  className={`px-3 lg:px-5 py-0.5 lg:py-1 text-sm hover:py-0 ${
                     stack === "frontend" ? "cs-btn" : "cs-btn-outline"
                  }`}
               >
                  Frontend
               </button>
               <button
                  onClick={() => handleClick("backend")}
                  className={`px-3 lg:px-5 py-0.5 lg:py-1 text-sm hover:py-0 ${
                     stack === "backend" ? "cs-btn" : "cs-btn-outline"
                  }`}
               >
                  Backend
               </button>
               <button
                  onClick={() => handleClick("tools")}
                  className={`px-3 lg:px-5 py-0.5 lg:py-1 text-sm hover:py-0 ${
                     stack === "tools" ? "cs-btn" : "cs-btn-outline"
                  }`}
               >
                  Tools
               </button>
            </div>
            <div className="flex flex-wrap items-center gap-8 mt-[5rem] justify-center">
               {skills?.map((skill) => (
                  <div
                     key={skill._id}
                     className="flex items-center gap-4 shadow-xl px-5 py-2 rounded-lg border-2 border-hidden hover:shadow-cs-orange border-cs-orange"
                  >
                     <Image
                        src={`${skill.icon}`}
                        alt={skill.name}
                        className="w-[40px] h-[40px]"
                        width={40}
                        height={40}
                     />
                     <h4 className="text-2xl font-semibold">{skill.name}</h4>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default Skills;
