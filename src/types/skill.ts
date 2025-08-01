export type TStack = "frontend" | "backend" | "tools" | "all";

export type TSkill = {
   _id: string;
   name: string;
   icon: string;
   stack: string;
};

export type TSingleSkill = {
   _id: string;
   name: string;
   icon: string;
   stack: string;
   order: number;
};
