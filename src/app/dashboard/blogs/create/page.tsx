"use client";

import FormWrapper, { TValidationErrors } from "@/components/form/FormWrapper";
import InputItem from "@/components/form/InputItem";
import MultiSelect from "@/components/form/MultipleSelect";
// import TextEditor from "@/components/form/TextEditor";
import { isReduxRTQError } from "@/redux/api/baseApi";
import { useCreateNewBlogMutation } from "@/redux/api/blogApi";
import { isFormValidationErrors } from "@/utils/isValidationErrors";
import { useEffect, useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

const CreateBlogPage = () => {
   const [errors, setErrors] = useState<TValidationErrors[]>([]);

   const [createNewBlog, { data, error, isLoading }] =
      useCreateNewBlogMutation();

   const handleOnSubmit: SubmitHandler<FieldValues> = (formData) => {
      try {
         // Convert formData to a plain object
         const plainObject: { [key: string]: any } = {};

         Object.entries(formData).forEach(([key, value]) => {
            plainObject[key] = value;
         });

         // Convert the plain object to a JSON string
         const jsonData = JSON.stringify(plainObject);

         // Create FormData and append jsonData
         const modifyData = new FormData();
         modifyData.append("data", jsonData);

         console.log(jsonData);
         createNewBlog(modifyData);
      } catch (error) {
         toast.error("Something went wrong! Try again.");
      }
   };

   useEffect(() => {
      console.log({ error, isLoading });
      if (data) {
         toast.success(data.message);
      }
      if (isReduxRTQError(error)) {
         if (isFormValidationErrors(error?.data?.errors)) {
            setErrors(error.data.errors);
         } else {
            toast.error(error?.data?.message || "An error occurred");
         }
      }
   }, [data, error, isLoading]);

   return (
      <div>
         <FormWrapper
            onSubmit={handleOnSubmit}
            errors={errors}
            successSubmit={data?.success}
            className="mx-auto my-20"
         >
            <h2 className="text-2xl font-semibold text-center mb-4">
               Create New Blog
            </h2>
            <div className="flex flex-col gap-4">
               <InputItem
                  label="Title"
                  type="text"
                  name="title"
                  placeholder="Enter blog title"
                  required
               />
               <InputItem
                  label="Thumbnail Url"
                  type="url"
                  name="thumbnail"
                  placeholder="Enter Thumbnail Url"
                  required
               />
               <InputItem
                  label="Category"
                  type="text"
                  name="category"
                  placeholder="Enter blog category"
                  required
               />
               <InputItem
                  label="Content"
                  type="text"
                  name="content"
                  placeholder="Write your blog post"
                  required
               />
               {/* <TextEditor
                  label="Content"
                  name="content"
                  placeholder="Write your blog post"
                  required
               /> */}
               <MultiSelect
                  label="Tags"
                  name="tags"
                  placeholder="Write related tags and press enter"
                  required
               />
               <button
                  className="mt-2 cs-btn shadow-none col-span-2"
                  type="submit"
                  disabled={isLoading}
               >
                  Submit
               </button>
            </div>
         </FormWrapper>
      </div>
   );
};

export default CreateBlogPage;
