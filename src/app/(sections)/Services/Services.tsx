import ServiceCart from "@/components/ServiceCart";
import React from "react";

const Services = () => {
   const services = [
      {
         name: "Front-end development",
         icon: "https://cdn-icons-png.flaticon.com/128/2888/2888407.png",
         description:
            "Building visually appealing and interactive user interfaces using HTML, CSS, JavaScript and most popular frontend framework React.js.",
      },
      {
         name: "Backend Development",
         icon: "https://cdn-icons-png.flaticon.com/128/6213/6213731.png",
         description:
            "Implementing server-side logic, database integration, and API development for seamless functionality. I use server-side technologies Node.js for prototyping and development, producing fast and scalable web apps.",
      },
      {
         name: "Fullstack Development",
         icon: "https://t3.ftcdn.net/jpg/04/25/67/04/240_F_425670493_RkkKS2h9okr7wcMUmxMt2gZmiud49ymR.jpg",
         description:
            "Implementing server-side logic, database integration, and API development for seamless functionality. I use server-side technologies Node.js for prototyping and development, producing fast and scalable web apps.",
      },
      {
         name: "Update Website",
         icon: "https://cdn-icons-png.flaticon.com/128/4275/4275127.png",
         description:
            "Implementing server-side logic, database integration, and API development for seamless functionality. I use server-side technologies Node.js for prototyping and development, producing fast and scalable web apps.",
      },
      {
         name: "Web bug Fixing",
         icon: "https://cdn-icons-png.flaticon.com/128/8297/8297449.png",
         description:
            "Implementing server-side logic, database integration, and API development for seamless functionality. I use server-side technologies Node.js for prototyping and development, producing fast and scalable web apps.",
      },
      {
         name: "Troubleshoot",
         icon: "https://cdn-icons-png.flaticon.com/128/10531/10531744.png",
         description:
            "Systematically identifying and resolving technical issues or problems in websites or web applications.",
      },
   ];
   return (
      <section
         id="services"
         className="cs-container"
      >
         <div className="cs-title-box">
            <h1 className="text-2xl">What i do.</h1>
            <h1>_Services_</h1>
            <p className="">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
               ipsa quaerat deleniti necessitatibus officiis totam architecto
               repellat natus, optio ipsam.
            </p>
         </div>
         <div className="mt-[5rem] grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((item, i) => (
               <ServiceCart
                  key={i}
                  name={item.name}
                  icon={item.icon}
                  description={item.description}
               />
            ))}
         </div>
      </section>
   );
};

export default Services;
