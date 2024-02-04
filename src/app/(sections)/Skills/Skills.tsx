import React from "react";

const Skills = () => {
   const skills = [
      {
         name: "Html",
         icon: "https://cdn-icons-png.flaticon.com/128/1051/1051277.png",
      },
      {
         name: "CSS",
         icon: "https://cdn-icons-png.flaticon.com/128/732/732190.png",
      },
      {
         name: "Javascript",
         icon: "https://cdn-icons-png.flaticon.com/128/5968/5968292.png",
      },
      {
         name: "React",
         icon: "https://cdn-icons-png.flaticon.com/128/1126/1126012.png",
      },
      {
         name: "Typescript",
         icon: "https://cdn-icons-png.flaticon.com/128/5968/5968381.png",
      },
      {
         name: "Node js",
         icon: "https://cdn-icons-png.flaticon.com/128/919/919825.png",
      },
      {
         name: "Express",
         icon: "https://cdn-icons-png.flaticon.com/128/732/732190.png",
      },
      {
         name: "MongoDB",
         icon: "https://cdn-icons-png.flaticon.com/128/9698/9698555.png",
      },
      {
         name: "Tailwind CSS",
         icon: "https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg",
      },
      {
         name: "Next js",
         icon: "https://cdn-icons-png.flaticon.com/128/5968/5968381.png",
      },
   ];
   return (
      <section
         id="skills"
         className="cs-container"
      >
         <div>
            <div className="cs-title-box text-center">
               <h1 className="text-2xl">My Awesome.</h1>
               <h1>Skills</h1>
               <p className="mx-auto">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente ipsa quaerat deleniti necessitatibus officiis totam
                  architecto repellat natus, optio ipsam.
               </p>
            </div>
            <div className="flex flex-wrap items-center gap-8 mt-[5rem] justify-center">
               {skills.map((skill, i) => (
                  <div
                     key={i}
                     className="flex items-center gap-4 shadow-xl px-5 py-2 rounded-lg border-2 border-hidden hover:shadow-cs-orange border-cs-orange"
                  >
                     <img
                        src={`${skill.icon}`}
                        alt={skill.name}
                        className="w-[40px] h-[40px]"
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
