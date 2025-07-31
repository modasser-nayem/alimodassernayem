import { TSkill } from "@/types/skill";
import Image from "next/image";
import React from "react";

type TSkillsProps = {
   sortDescription: string;
   skills?: TSkill[];
   isError: boolean;
   isLoading: boolean;
};

const Skills = ({ sortDescription, skills }: TSkillsProps) => {
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
               <button className="cs-btn-outline">Frontend</button>
               <button className="cs-btn-outline">Backend</button>
               <button className="cs-btn-outline">Tools</button>
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
