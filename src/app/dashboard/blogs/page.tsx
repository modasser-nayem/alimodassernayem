"use client";

import DeleteBlog from "@/components/ui/dashboard/blogs/DeleteBlog";
import { useGetAllBlogQuery } from "@/redux/api/blogApi";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaPlus } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";

const BlogPage = () => {
   const { data, isLoading } = useGetAllBlogQuery({
      query: [{ name: "limit", value: 0 }],
   });
   const blogs = data?.data;

   return (
      <div className="">
         <div className="my-6 flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Blogs</h2>
            <Link
               href="/dashboard/blogs/create"
               className="cs-btn shadow-none hover:shadow-2xl"
            >
               <FaPlus /> Create Blog
            </Link>
         </div>
         {isLoading ? (
            <p>Loading...</p>
         ) : !blogs ? (
            <h2>No have any skills</h2>
         ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
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
                              {blog.title}
                           </h2>
                        </Link>
                        <h3 className="text-xl font-semibold mt-2 mb-4">
                           Category:{" "}
                           <span className="text-cs-orange">
                              {blog.category}
                           </span>
                        </h3>
                        <h3 className="text-xl font-semibold mt-2 mb-4">
                           Status:{" "}
                           <span className="text-cs-orange">{blog.status}</span>
                        </h3>
                        <p>Post At: {blog.createdAt} </p>
                     </div>
                     <div className="mt-5 flex items-center justify-between gap-3">
                        <Link
                           className="w-full rounded-md cs-btn-outline hover:rounded-md bg-cs-yellow text-gray-800"
                           href={`/dashboard/blogs/${blog._id}/update`}
                        >
                           <MdEdit />
                           <span>Edit</span>
                        </Link>
                        <DeleteBlog id={blog._id} />
                     </div>
                  </div>
               ))}
            </div>
         )}
      </div>
   );
};

export default BlogPage;
