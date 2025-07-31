export type TProject = {
   _id: string;
   title: string;
   about: string;
   image: string;
   technology: string[];
   code?: {
      client?: string;
      server?: string;
   };
   preview?: string;
   order: number;
};

export type TSingleProject = {
   _id: string;
   title: string;
   about: string;
   description?: string;
   image: string;
   technology: string[];
   features: string[];
   code?: {
      client?: string;
      server?: string;
   };
   preview?: string;
   order: number;
};

export type TCreateProject = {
   title: string;
   image: string;
   about: string;
   description?: string;
   code: {
      client?: string;
      server?: string;
   };
   preview?: string;
   technology: string[];
   features: string[];
   order?: number;
};
