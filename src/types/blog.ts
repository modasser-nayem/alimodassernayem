export type TBlog = {
   _id: string;
   title: string;
   thumbnail: string;
   category: string;
   status: "draft" | "publish";
   createdAt: string;
};

export type TSingleBlog = {
   _id: string;
   title: string;
   thumbnail: string;
   content: string;
   tags: string[];
   category: string;
   status: "draft" | "publish";
   createdAt: string;
};
