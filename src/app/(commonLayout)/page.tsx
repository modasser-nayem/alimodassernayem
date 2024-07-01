"use client";

import About from "@/components/ui/home/About/About";
import Contact from "@/components/ui/home/Contact/Contact";
import Introduction from "@/components/ui/home/Introduction/Introduction";
import Projects from "@/components/ui/home/Projects/Projects";
import Services from "@/components/ui/home/Services/Services";
import Skills from "@/components/ui/home/Skills/Skills";
import { useAppSelector } from "@/redux/hook";

const SectionPage = () => {
   const state = useAppSelector((state) => state.auth);

   const information = useAppSelector((state) => state.information);
   const skills = useAppSelector((state) => state.skills);
   const services = useAppSelector((state) => state.services);
   const projects = useAppSelector((state) => state.projects);

   if (!information) return <p>Information Loading..</p>;
   const {
      name,
      email,
      description,
      images,
      phone,
      socialMedia,
      sortDescriptions,
      title,
      resume,
      speech,
   } = information;
   return (
      <>
         {information && (
            <div className="">
               <Introduction
                  name={name}
                  title={title}
                  sortDescription={sortDescriptions.introduction}
                  resume={resume}
                  image={images.introduction}
                  facebook={socialMedia.facebook}
                  linkedin={socialMedia.linkedin}
                  github={socialMedia.github}
               />
               <About
                  description={description}
                  speech={speech}
                  sortDescription={sortDescriptions.about}
                  image={images.introduction}
                  resume={resume}
               />
               <Skills
                  sortDescription={sortDescriptions.skill}
                  skills={skills}
               />
               <Projects
                  sortDescription={sortDescriptions.project}
                  projects={projects}
               />
               <Services
                  sortDescription={sortDescriptions.service}
                  services={services}
               />
               {/* <Blogs />
         <Testimonial /> */}
               {/* "// trigger build" */}
               <Contact
                  sortDescription={sortDescriptions.contact}
                  email={email}
                  facebook={socialMedia.facebook}
                  github={socialMedia.github}
                  instagram={socialMedia.instagram}
                  linkedin={socialMedia.linkedin}
               />
            </div>
         )}
      </>
   );
};

export default SectionPage;
