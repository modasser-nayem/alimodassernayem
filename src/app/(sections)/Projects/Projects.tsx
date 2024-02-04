import ProjectCard from "@/components/ProjectCard";
import { IoMdEye } from "react-icons/io";

type TProject = {
   title: string;
   description: string;
   image: string;
   technology: string[];
   code: {
      client?: string;
      server?: string;
   };
   preview?: string;
   docs?: string;
   order?: number;
};

const Projects = () => {
   const projects: TProject[] = [
      {
         title: "E-commerce",
         description:
            "My personal portfolio site that shows my experience and skills. Furthermore you get a closer look on who I am. It's all crafted by myself. From the idea, over the design and development to the DevOps part. This site was a great teacher in terms of deployment and how to setup a proper CI/CD Pipeline in combination with a Linux Server. I also learned a lot more about Docker and Docker Compose and shifted from just a user of docker containers to a builder of own docker images and how to compose them. I wouldn't call myself a Docker expert yet, but I'm progressing more and more.",
         image: "https://jean-marc.io/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2F3Yg4fofVRXWZ5yrWhzrY&w=1920&q=90",
         technology: [
            "Javascript",
            "reactjs",
            "Node",
            "Mongodb",
            "tailwindcss",
            "docker",
         ],
         code: {
            client: "https://toys-house1.web.app/",
            server: "https://toys-house1.web.app/",
         },
         preview: "https://toys-house1.web.app/",
         docs: "https://toys-house1.web.app/",
      },
      {
         title: "Food Devvary",
         description:
            "My personal portfolio site that shows my experience and skills. Furthermore you get a closer look on who I am. It's all crafted by myself. From the idea, over the design and development to the DevOps part. This site was a great teacher in terms of deployment and how to setup a proper CI/CD Pipeline in combination with a Linux Server. I also learned a lot more about Docker and Docker Compose and shifted from just a user of docker containers to a builder of own docker images and how to compose them. I wouldn't call myself a Docker expert yet, but I'm progressing more and more.",
         image: "https://jean-marc.io/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2F3Yg4fofVRXWZ5yrWhzrY&w=1920&q=90",
         technology: [
            "Javascript",
            "reactjs",
            "Node",
            "Mongodb",
            "tailwindcss",
            "docker",
         ],
         code: {
            client: "https://toys-house1.web.app/",
            server: "https://toys-house1.web.app/",
         },
         preview: "https://toys-house1.web.app/",
         docs: "https://toys-house1.web.app/",
      },
      {
         title: "E-commerce",
         description:
            "My personal portfolio site that shows my experience and skills. Furthermore you get a closer look on who I am. It's all crafted by myself. From the idea, over the design and development to the DevOps part. This site was a great teacher in terms of deployment and how to setup a proper CI/CD Pipeline in combination with a Linux Server. I also learned a lot more about Docker and Docker Compose and shifted from just a user of docker containers to a builder of own docker images and how to compose them. I wouldn't call myself a Docker expert yet, but I'm progressing more and more.",
         image: "https://jean-marc.io/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2F3Yg4fofVRXWZ5yrWhzrY&w=1920&q=90",
         technology: [
            "Javascript",
            "reactjs",
            "Node",
            "Mongodb",
            "tailwindcss",
            "docker",
         ],
         code: {
            client: "https://toys-house1.web.app/",
            server: "https://toys-house1.web.app/",
         },
         preview: "https://toys-house1.web.app/",
         docs: "https://toys-house1.web.app/",
      },
      {
         title: "E-commerce",
         description:
            "My personal portfolio site that shows my experience and skills. Furthermore you get a closer look on who I am. It's all crafted by myself. From the idea, over the design and development to the DevOps part. This site was a great teacher in terms of deployment and how to setup a proper CI/CD Pipeline in combination with a Linux Server. I also learned a lot more about Docker and Docker Compose and shifted from just a user of docker containers to a builder of own docker images and how to compose them. I wouldn't call myself a Docker expert yet, but I'm progressing more and more.",
         image: "https://jean-marc.io/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2F3Yg4fofVRXWZ5yrWhzrY&w=1920&q=90",
         technology: [
            "Javascript",
            "reactjs",
            "Node",
            "Mongodb",
            "tailwindcss",
            "docker",
         ],
         code: {
            client: "https://toys-house1.web.app/",
            server: "https://toys-house1.web.app/",
         },
         preview: "https://toys-house1.web.app/",
         docs: "https://toys-house1.web.app/",
      },
   ];
   return (
      <section
         id="projects"
         className="cs-container"
      >
         <div className="cs-title-box text-center">
            <h1 className="text-2xl">Masterpiece collection.</h1>
            <h1>_Portfolio_</h1>
            <p className="mx-auto">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
               ipsa quaerat deleniti necessitatibus officiis totam architecto
               repellat natus, optio ipsam.
            </p>
         </div>
         <div className="mt-[5rem] grid gap-10">
            {projects.map((item, i) => (
               <ProjectCard
                  key={i}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  technology={item.technology}
                  code={item.code}
                  preview={item.preview}
                  docs={item.docs}
               />
            ))}
            <button className="cs-btn mx-auto mt-8">
               <IoMdEye /> View more...
            </button>
         </div>
      </section>
   );
};

export default Projects;
