import { TBlog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMdEye } from "react-icons/io";
import BlogCard from "./BlogCard";

type TBlogsProps = {
   sortDescription: string;
   blogs?: TBlog[];
   isError: boolean;
   isLoading: boolean;
};

const Blogs = ({ sortDescription, blogs, isLoading }: TBlogsProps) => {
   return (
      <section
         id="blogs"
         className="cs-container"
      >
         <div>
            <div className="cs-title-box text-center">
               <h1 className="text-2xl">My Awesome.</h1>
               <h1>Blogs</h1>
               {sortDescription && <p className="mx-auto">{sortDescription}</p>}
            </div>
            {isLoading ? (
               <p>Loading...</p>
            ) : !blogs ? (
               <h2>No have any Blogs</h2>
            ) : (
               <div>
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
                  <Link href="/blogs">
                     <button className="cs-btn mx-auto mt-12">
                        <IoMdEye /> View more...
                     </button>
                  </Link>
               </div>
            )}
         </div>
      </section>
   );
};

export default Blogs;
