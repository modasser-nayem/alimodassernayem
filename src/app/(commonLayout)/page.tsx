"use client";

import About from "@/components/ui/home/About/About";
import Blogs from "@/components/ui/home/Blogs/Blogs";
import Contact from "@/components/ui/home/Contact/Contact";
import Introduction from "@/components/ui/home/Introduction/Introduction";
import Projects from "@/components/ui/home/Projects/Projects";
import Services from "@/components/ui/home/Services/Services";
import Skills from "@/components/ui/home/Skills/Skills";
import { useGetAllBlogQuery } from "@/redux/api/blogApi";
import { useGetAllProjectsQuery } from "@/redux/api/projectApi";
import { useGetAllSkillsQuery } from "@/redux/api/skillApi";
import { useAppSelector } from "@/redux/hook";

const SectionPage = () => {
   const {
      data: projectsData,
      isLoading: projectsIsLoading,
      isError: projectsIsError,
   } = useGetAllProjectsQuery({ query: [{ name: "limit", value: 4 }] });

   const {
      data: skillsData,
      isLoading: skillsIsLoading,
      isError: skillsIsError,
   } = useGetAllSkillsQuery(undefined);

   const {
      data: blogsData,
      isLoading: blogsIsLoading,
      isError: blogsIsError,
   } = useGetAllBlogQuery({
      query: [
         { name: "status", value: "publish" },
         { name: "limit", value: 4 },
      ],
   });

   const projects = projectsData?.data;
   const blogs = blogsData?.data;
   const skills = skillsData?.data;

   const state = useAppSelector((state) => state.auth);

   const information = useAppSelector((state) => state.information);
   const services = useAppSelector((state) => state.services);

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
                  isError={skillsIsError}
                  isLoading={skillsIsLoading}
               />
               <Projects
                  sortDescription={sortDescriptions.project}
                  projects={projects}
                  isLoading={projectsIsLoading}
                  isError={projectsIsError}
               />
               <Services
                  sortDescription={sortDescriptions.service}
                  services={services}
               />
               <Blogs
                  sortDescription={sortDescriptions.blog}
                  blogs={blogs}
                  isLoading={blogsIsLoading}
                  isError={blogsIsError}
               />
               {/* <Testimonial />  */}
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
