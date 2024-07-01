import { IInformation } from "@/types/information";
import { createSlice } from "@reduxjs/toolkit";

const initialState: IInformation | null = {
   name: "Ali Modasser Nayem",
   title: ["Full-Stack Developer"],
   email: "modassernayem@gamil.com",
   phone: "+88 01816090766",
   resume:
      "https://drive.google.com/uc?export=download&id=1Y-BreL73rPkDi_hRu0aAvPoqVUK7ZHYx",
   description:
      "I am an accomplished Full-Stack (MERN) web application developer. I am a hard worker and a quick learner. I always try to learn new things to build up my professional skills. I can adjust to any new technology within a very short time. I develop quality responsive websites, clean user interfaces, and rich interactive web apps. Passionate with Typescript, React, Next, Node, Express, and MongoDB.",
   speech:
      "I don't believe just in talent. Consistency, focused work and perseverance beats everything",
   socialMedia: {
      linkedin: "https://www.linkedin.com/in/alimodassernayem/",
      facebook: "https://web.facebook.com/alimodassernayem",
      github: "https://github.com/modasser-nayem",
      instagram: "https://www.instagram.com/alimodassernayem/",
   },
   sortDescriptions: {
      introduction:
         "I work with Full-Stack development. So I can work with Frontend and Backend of any website.",
      about: "To live a fullfilled live there's a lot to it. You'll get more detailed informations about myself in this section. You also find my resume in here if you want to go deeper.",
      project:
         "Because I’m continuously growing and expanding my knowledge, my projects represent my acquired skills. I love building them in my spare time to gather practical experience and knowledge me and my team mates can benefit from.",
      skill: "Learning new tools is as essential as sharpening my current ones. I love to work with the full stack (Frontend + Backend), but my strength is in Backend Development.",
      service:
         "I offer comprehensive web development services, specializing in creating robust and scalable web applications. With expertise in web bug fixing and troubleshooting, I ensure seamless functionality and optimal performance, delivering reliable solutions tailored to your needs.",
      contact:
         "Feel free to reach out and drop me a quick line. Just click on one of the icons below.",
      blog: "",
      testimonial: "",
   },
   images: {
      introduction:
         "https://alimodassernayem.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnayem4.48d67321.png&w=1920&q=75",
      about: "https://alimodassernayem.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnayem3.b98096a2.png&w=1920&q=75",
   },
};

// const initialState: { information: IInformation | null } = {
//    information: null,
// };

const informationSlice = createSlice({
   name: "information",
   initialState,
   reducers: {
      setInformation: (state, action) => {
         state = action.payload;
      },
   },
});

export const { setInformation } = informationSlice.actions;
export const informationReducer = informationSlice.reducer;
