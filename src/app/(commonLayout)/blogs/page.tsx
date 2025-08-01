"use client";

import BackLink from "@/components/shared/BackLink";
import Loading from "@/components/shared/Loading";
import BlogCard from "@/components/ui/home/Blogs/BlogCard";
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
            <div className="mt-[5rem] grid md:grid-cols-2 xl:grid-cols-3 gap-5">
               {blogs.map((blog) => (
                  <BlogCard
                     key={blog._id}
                     _id={blog._id}
                     title={blog.title}
                     thumbnail={blog.thumbnail}
                     content={blog.content}
                     category={blog.category}
                     createdAt={blog.createdAt}
                     status={blog.status}
                  />
               ))}
            </div>
         )}
      </div>
   );
};

export default BlogsPage;
