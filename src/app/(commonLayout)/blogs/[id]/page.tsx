"use client";

import Loading from "@/components/shared/Loading";
import { useGetSingleBlogQuery } from "@/redux/api/blogApi";
import Image from "next/image";
import { useParams } from "next/navigation";

const BlogDetailsPage = () => {
   const params = useParams();
   const blogId = params.id as string;
   const { data, isLoading } = useGetSingleBlogQuery({ id: blogId });
   const blog = data?.data;

   return (
      <div className="cs-container">
         {isLoading ? (
            <Loading />
         ) : !blog ? (
            <h2>Try again</h2>
         ) : (
            <div className="w-full max-w-[1080px] mx-auto p-2 md:p-4">
               <div className="">
                  <Image
                     src={blog.thumbnail}
                     alt={blog.title}
                     // className="w-full h-full max-w-[900px] max-h-[500px]"
                     width={1080}
                     height={700}
                  />
               </div>
               <div className="flex flex-col justify-between gap-8">
                  <h3 className="text-3xl text-cs-orange font-semibold mt-4">
                     {blog.title}{" "}
                     <span className="text-xl font-semibold text-gray-200">{`( ${blog.category} )`}</span>
                  </h3>
                  <div>
                     <h4 className="text-xl font-semibold mb-1">Content</h4>
                     <div
                        className="text-cs-white leading-relaxed tracking-wide"
                        dangerouslySetInnerHTML={{ __html: blog.content }}
                     />
                  </div>
                  <div>
                     <h4 className="text-xl font-semibold mb-1">Tags</h4>
                     <div className="flex flex-wrap items-center gap-x-5 gap-y-1  uppercase">
                        {blog.tags.map((item, i) => (
                           <p
                              key={i}
                              className="text-xl text-cs-orange font-semibold"
                           >
                              {item}
                           </p>
                        ))}
                     </div>
                  </div>
                  {blog.createdAt && (
                     <p className="text-cs-white leading-relaxed tracking-wide">
                        Publish {blog.createdAt.slice(0, 10)}
                     </p>
                  )}
               </div>
            </div>
         )}
      </div>
   );
};

export default BlogDetailsPage;
