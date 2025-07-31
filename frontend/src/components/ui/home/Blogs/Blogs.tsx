import { TBlog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMdEye } from "react-icons/io";

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
               <h2>No have any skills</h2>
            ) : (
               <div>
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
