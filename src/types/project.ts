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
