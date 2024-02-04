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
         _id: "2",
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
         _id: "3",
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
         _id: "4",
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
