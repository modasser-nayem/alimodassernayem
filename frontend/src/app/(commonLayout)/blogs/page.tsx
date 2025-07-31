"use client";

import BackLink from "@/components/shared/BackLink";
import Loading from "@/components/shared/Loading";
import { useGetAllBlogQuery } from "@/redux/api/blogApi";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogsPage = () => {
   const { data, isLoading, isError } = useGetAllBlogQuery({
      query: [{ name: "status", value: "publish" }],
   });

   const blogs = data?.data;

   if (isError) {
      return (
         <h2 className="text-center p-8">Something went wrong try again?</h2>
      );
   }

   return (
      <div className="cs-container mt-5 mb-[5rem]">
         <BackLink
            href="/"
            className="mb-5 w-fit"
         />
         {isLoading ? (
            <Loading />
         ) : !blogs ? (
            <h2>No Have any data</h2>
         ) : (
            <div className="mt-[5rem] grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
               {blogs.map((blog) => (
                  <div
                     key={blog._id}
                     className="bg-cs-blue-deep w-full shadow-2xl p-4 flex flex-col justify-between"
                  >
                     <div>
                        <Link href={`/blogs/${blog._id}`}>
                           <div className="">
                              <Image
                                 src={blog.thumbnail}
                                 alt={blog.title}
                                 className="w-full h-full max-w-[600px] max-h-[500px]"
                                 width={600}
                                 height={500}
                              />
                           </div>
                        </Link>
                        <Link href={`/blogs/${blog._id}`}>
                           <h2 className="text-2xl text-cs-orange font-semibold mt-2 mb-4 hover:underline">
                              {blog.title}{" "}
                              <span className="text-base text-gray-200">{`( ${blog.category} )`}</span>
                           </h2>
                        </Link>
                        <div className="flex items-center justify-between">
                           <p>Publish: {blog.createdAt.slice(0, 10)} </p>
                           <p className="text-base text-cs-orange">
                              <Link href={`/blogs/${blog._id}`}>
                                 See more...
                              </Link>
                           </p>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         )}
      </div>
   );
};

export default BlogsPage;
