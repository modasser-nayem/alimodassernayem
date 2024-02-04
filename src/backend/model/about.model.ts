import { Schema, model } from "mongoose";
import { TAbout } from "../interface/about.interface";

const myInformationSchema = new Schema<TAbout>({
   name: String,
   title: String,
   email: String,
   phone: String,
   resume: String,
   sortDescriptions: {
      intro: String,
      about: String,
      skills: String,
      projects: String,
      services: String,
      blogs: String,
      testimonial: String,
      contact: String,
   },
   description: String,
   speech: String,
   images: {
      intro: String,
      about: String,
   },
   socialMedia: [
      {
         name: String,
         logo: String,
         url: String,
         order: {
            type: Number,
            default: 1,
         },
      },
   ],
});

export const MyInformation = model<TAbout>(
   "MyInformation",
   myInformationSchema
);
