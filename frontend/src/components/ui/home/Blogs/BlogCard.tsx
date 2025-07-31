import { TBlog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCard: React.FC<TBlog> = ({
   _id,
   title,
   thumbnail,
   content,
   category,
   createdAt,
}) => {
   return (
      <div
         key={_id}
         className="bg-cs-blue-deep w-full shadow-2xl p-4 flex flex-col justify-between"
      >
         <div>
            <Link href={`/blogs/${_id}`}>
               <div className="">
                  <Image
                     src={thumbnail}
                     alt={title}
                     className="w-full h-full max-w-[600px] max-h-[500px]"
                     width={600}
                     height={500}
                  />
               </div>
            </Link>
            <Link href={`/blogs/${_id}`}>
               <h2 className="text-lg text-cs-orange font-semibold mt-2 mb-4 hover:underline">
                  {title}{" "}
                  <span className="text-base text-gray-200">{`( ${category} )`}</span>
               </h2>
            </Link>
            <p className="text-sm">
               {content && content.slice(0, 160)}
               <Link
                  className="ps-2 text-sm text-cs-orange inline hover:underline"
                  href={`/blogs/${_id}`}
               >
                  See more...
               </Link>
            </p>
            <p className="font-semibold pt-2">
               Publish At: {createdAt.slice(0, 10)}{" "}
            </p>
         </div>
      </div>
   );
};

export default BlogCard;
