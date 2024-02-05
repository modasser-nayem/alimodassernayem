import { createSlice } from "@reduxjs/toolkit";

export type TProject = {
   _id: string;
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

const initialState: { projects: TProject[] } = {
   projects: [
      {
         _id: "1",
         title: "E-commerce",
         description:
            "My personal portfolio site that shows my experience and skills. Furthermore you get a closer look on who I am. It's all crafted by myself. From the idea, over the design and development to the DevOps part. This site was a great teacher in terms of deployment and how to setup a proper CI/CD Pipeline in combination with a Linux Server. I also learned a lot more about Docker and Docker Compose and shifted from just a user of docker containers to a builder of own docker images and how to compose them.",
         image: "https://themeforest.img.customer.envatousercontent.com/files/261150567/theme-preview3.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=0dbb748ee7e6fba15ddff5953a4c6145",
         technology: [
            "Typescript",
            "React",
            "Node",
            "Express",
            "Mongodb",
            "Mongoose",
            "Tailwind",
            "Docker",
         ],
         code: {
            client: "https://toys-house1.web.app/",
            server: "https://toys-house1.web.app/",
         },
         preview: "https://toys-house1.web.app/",
         docs: "https://toys-house1.web.app/",
      },
      {
         _id: "2",
         title: "Food Delivery",
         description:
            "My personal portfolio site that shows my experience and skills. Furthermore you get a closer look on who I am. It's all crafted by myself. From the idea, over the design and development to the DevOps part. This site was a great teacher in terms of deployment and how to setup a proper CI/CD Pipeline in combination with a Linux Server. I also learned a lot more about Docker and Docker Compose and shifted from just a user of docker containers to a builder of own docker images and how to compose them.",
         image: "https://themeforest.img.customer.envatousercontent.com/files/297800248/yummi-preview-no-price.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=de945918224e0f393e8d126c36c762e3",
         technology: [
            "Typescript",
            "React",
            "Node",
            "Express",
            "Mongodb",
            "Mongoose",
            "Material UI",
         ],
         code: {
            client: "https://toys-house1.web.app/",
            server: "https://toys-house1.web.app/",
         },
         preview: "https://toys-house1.web.app/",
         docs: "https://toys-house1.web.app/",
      },
      {
         _id: "3",
         title: "Task Management",
         description:
            "My personal portfolio site that shows my experience and skills. Furthermore you get a closer look on who I am. It's all crafted by myself. From the idea, over the design and development to the DevOps part. This site was a great teacher in terms of deployment and how to setup a proper CI/CD Pipeline in combination with a Linux Server.",
         image: "https://s3.envato.com/files/411228393/01_Screenshot.jpg.jpg",
         technology: [
            "Javascript",
            "React",
            "Node",
            "Express",
            "Mongodb",
            "Mongoose",
            "Tailwind",
         ],
         code: {
            client: "https://toys-house1.web.app/",
            server: "https://toys-house1.web.app/",
         },
         preview: "https://toys-house1.web.app/",
         docs: "https://toys-house1.web.app/",
      },
      {
         _id: "4",
         title: "Blog Site",
         description:
            "My personal portfolio site that shows my experience and skills. Furthermore you get a closer look on who I am. It's all crafted by myself. From the idea, over the design and development to the DevOps part. This site was a great teacher in terms of deployment and how to setup a proper CI/CD Pipeline in combination with a Linux Server. I also learned a lot more about Docker and Docker Compose",
         image: "https://themeforest.img.customer.envatousercontent.com/files/337087141/preview.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=3e9393907f51bb0c36e981e961372f5f",
         technology: ["Typescript", "Next JS", "Mongodb", "tailwind", "Docker"],
         code: {
            client: "https://toys-house1.web.app/",
            server: "https://toys-house1.web.app/",
         },
         preview: "https://toys-house1.web.app/",
         docs: "https://toys-house1.web.app/",
      },
   ],
};

const projectSlice = createSlice({
   name: "project",
   initialState,
   reducers: {
      setProjects: (state, action) => {
         state.projects = action.payload;
      },
   },
});

export const {} = projectSlice.actions;
export const projectReducer = projectSlice.reducer;
