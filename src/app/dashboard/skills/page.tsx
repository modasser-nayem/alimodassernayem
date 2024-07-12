"use client";

import AddSkill from "@/components/ui/dashboard/skills/AddSkill";
import DeleteSkill from "@/components/ui/dashboard/skills/DeleteSkill";
import UpdateSkill from "@/components/ui/dashboard/skills/UpdateSkill";
import { useGetAllSkillsQuery } from "@/redux/api/skillApi";
import Image from "next/image";

const DashboardSkillsPage = () => {
   const { data, isLoading } = useGetAllSkillsQuery(undefined);
   const skills = data?.data;

   return (
      <div>
         <div className="my-6 flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Skills</h2>
            <AddSkill />
         </div>
         {isLoading ? (
            <p>Loading...</p>
         ) : !skills ? (
            <h2>No have any skills</h2>
         ) : (
            <div className="flex flex-wrap items-center gap-8 mt-[5rem] justify-center">
               {skills.map((skill) => (
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
                     <div className="flex items-center gap-2">
                        <UpdateSkill id={skill._id} />
                        <DeleteSkill id={skill._id} />
                     </div>
                  </div>
               ))}
            </div>
         )}
      </div>
   );
};

export default DashboardSkillsPage;
