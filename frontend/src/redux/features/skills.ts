import { TSkill } from "@/types/skill";
import { createSlice } from "@reduxjs/toolkit";

const initialState: TSkill[] = [
   {
      _id: "1",
      name: "Html",
      icon: "https://cdn-icons-png.flaticon.com/128/1051/1051277.png",
   },
   {
      _id: "2",
      name: "CSS",
      icon: "https://cdn-icons-png.flaticon.com/128/732/732190.png",
   },
   {
      _id: "3",
      name: "Javascript",
      icon: "https://cdn-icons-png.flaticon.com/128/5968/5968292.png",
   },
   {
      _id: "4",
      name: "React",
      icon: "https://cdn-icons-png.flaticon.com/128/1126/1126012.png",
   },
   {
      _id: "5",
      name: "Typescript",
      icon: "https://cdn-icons-png.flaticon.com/128/5968/5968381.png",
   },
   {
      _id: "6",
      name: "Node js",
      icon: "https://cdn-icons-png.flaticon.com/128/919/919825.png",
   },
   {
      _id: "7",
      name: "Express",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-8-mv_KTf1BnBnNjaiRhNVJKBfrd-k0Q__w&usqp=CAU",
   },
   {
      _id: "8",
      name: "MongoDB",
      icon: "https://cdn-icons-png.flaticon.com/128/9698/9698555.png",
   },
   {
      _id: "9",
      name: "Tailwind CSS",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuh_IjW2EY0jHuFpsXhskjYuD7GNarsDjlPQ&usqp=CAU",
   },
   {
      _id: "10",
      name: "Next js",
      icon: "https://cdn-icons-png.flaticon.com/128/1126/1126012.png",
   },
];

const skillsSlice = createSlice({
   name: "skills",
   initialState,
   reducers: {
      setSkills: (state, action) => {
         state = action.payload;
      },
   },
});

export const { setSkills } = skillsSlice.actions;
export const skillsReducer = skillsSlice.reducer;
