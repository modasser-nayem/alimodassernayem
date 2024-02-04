import { createSlice } from "@reduxjs/toolkit";

export type TService = {
   _id: string;
   name: string;
   icon: string;
   description: string;
   order?: number;
};

const initialState: { services: TService[] } = {
   services: [
      {
         _id: "1",
         order: 4,
         name: "Front-end development",
         icon: "https://cdn-icons-png.flaticon.com/128/2888/2888407.png",
         description:
            "Building visually appealing and interactive user interfaces using HTML, CSS, JavaScript and most popular frontend framework React.js.",
      },
      {
         _id: "2",
         order: 4,
         name: "Backend Development",
         icon: "https://cdn-icons-png.flaticon.com/128/6213/6213731.png",
         description:
            "Implementing server-side logic, database integration, and API development for seamless functionality. I use server-side technologies Node.js for prototyping and development, producing fast and scalable web apps.",
      },
      {
         _id: "3",
         order: 4,
         name: "Fullstack Development",
         icon: "https://t3.ftcdn.net/jpg/04/25/67/04/240_F_425670493_RkkKS2h9okr7wcMUmxMt2gZmiud49ymR.jpg",
         description:
            "Implementing server-side logic, database integration, and API development for seamless functionality. I use server-side technologies Node.js for prototyping and development, producing fast and scalable web apps.",
      },
      {
         _id: "4",
         order: 4,
         name: "Update Website",
         icon: "https://cdn-icons-png.flaticon.com/128/4275/4275127.png",
         description:
            "Implementing server-side logic, database integration, and API development for seamless functionality. I use server-side technologies Node.js for prototyping and development, producing fast and scalable web apps.",
      },
      {
         _id: "5",
         order: 4,
         name: "Web bug Fixing",
         icon: "https://cdn-icons-png.flaticon.com/128/8297/8297449.png",
         description:
            "Implementing server-side logic, database integration, and API development for seamless functionality. I use server-side technologies Node.js for prototyping and development, producing fast and scalable web apps.",
      },
      {
         _id: "6",
         order: 4,
         name: "Troubleshoot",
         icon: "https://cdn-icons-png.flaticon.com/128/10531/10531744.png",
         description:
            "Systematically identifying and resolving technical issues or problems in websites or web applications.",
      },
   ],
};

const serviceSlice = createSlice({
   name: "service",
   initialState,
   reducers: {
      setServices: (state, action) => {
         state.services = action.payload;
      },
   },
});

export const { setServices } = serviceSlice.actions;
export const serviceReducer = serviceSlice.reducer;
