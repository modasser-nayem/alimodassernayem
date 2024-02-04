import { createSlice } from "@reduxjs/toolkit";

export interface ISocialMedea {
   facebook?: string;
   instagram?: string;
   twitter?: string;
   linkedin?: string;
   github?: string;
   discord?: string;
   youtube?: string;
   whatsapp?: string;
   fiver?: string;
   upwork?: string;
}

export interface ISortDescriptions {
   introduction?: string;
   about?: string;
   skill?: string;
   project?: string;
   service?: string;
   blog?: string;
   testimonial?: string;
   contact?: string;
}

export interface IInformation {
   name: string;
   title: string[];
   email: string;
   phone: string;
   resume?: string;
   description: string;
   speech?: string;
   images: {
      introduction: string;
      about: string;
   };
   socialMedia: ISocialMedea;
   sortDescriptions: ISortDescriptions;
}

const initialState: IInformation | null = {
   name: "Ali Modasser Nayem",
   title: ["Full-Stack Developer"],
   email: "modassernayem@gamil.com",
   phone: "+88 01816090766",
   resume: "",
   description:
      "I am an accomplished Full-Stack (MERN) web application developer. I am a hard worker and a quick learner. I always try to learn new things to build up my professional skills. I can adjust to any new technology within a very short time. I develop quality responsive websites, clean user interfaces, and rich interactive web apps. Passionate with Typescript, React, Next, Node, Express, and MongoDB.",
   speech:
      "I don't believe just in talent. Consistency, focused work and perseverance beats everything",
   socialMedia: {
      linkedin: "https://www.linkedin.com/in/alimodassernayem/",
      facebook: "https://web.facebook.com/alimodassernayem",
      github: "https://github.com/modasser-nayem",
   },
   sortDescriptions: {
      introduction: "",
      about: "To live a fullfilled live there's a lot to it. You'll get more detailed informations about myself in this section. You also find my resume in here if you want to go deeper.",
      project:
         "Because I’m continuously growing and expanding my knowledge, my projects represent my acquired skills. I love building them in my spare time to gather practical experience and knowledge me and my team mates can benefit from.",
      skill: "",
      service: "",
      contact:
         "Feel free to reach out and drop me a quick line. Just click on one of the icons below.",
   },
   images: {
      introduction: "",
      about: "",
   },
};

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
