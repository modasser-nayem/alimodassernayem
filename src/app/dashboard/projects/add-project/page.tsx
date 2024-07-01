"use client";

import FormWrapper, { TValidationErrors } from "@/components/form/FormWrapper";
import InputItem from "@/components/form/InputItem";
import MultiSelect from "@/components/form/MultipleSelect";
import { isReduxRTQError } from "@/redux/api/baseApi";
import { useAddNewProjectMutation } from "@/redux/api/projectApi";
import { isFormValidationErrors } from "@/utils/isValidationErrors";
import { useEffect, useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

const AddProjectPage = () => {
   const [errors, setErrors] = useState<TValidationErrors[]>([]);

   const [addNewProject, { data, error, isLoading }] =
      useAddNewProjectMutation();

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

         addNewProject(modifyData);
      } catch (error) {
         toast.error("Something went wrong! Try again.");
      }
   };

   useEffect(() => {
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
   }, [data, error]);

   return (
      <div className="my-20">
         <FormWrapper
            onSubmit={handleOnSubmit}
            errors={errors}
            successSubmit={data?.success}
            className="mx-auto"
         >
            <h2 className="text-2xl font-semibold text-center mb-4">
               Add New Project
            </h2>
            <div className="grid grid-cols-2 gap-4">
               <div className="col-span-2">
                  <InputItem
                     label="Title"
                     type="text"
                     name="title"
                     placeholder="Enter project title"
                     required
                  />
               </div>
               <div className="col-span-2">
                  <InputItem
                     label="Image Url"
                     type="url"
                     name="image"
                     placeholder="Enter image link"
                  />
               </div>
               <div className="col-span-2">
                  <InputItem
                     label="About"
                     type="text"
                     name="about"
                     placeholder="About your project"
                     required
                  />
               </div>
               <div className="col-span-2">
                  <InputItem
                     label="Description"
                     type="text"
                     name="description"
                     placeholder="Describe your project in details"
                  />
               </div>
               <InputItem
                  label="Client Code Link"
                  type="url"
                  name="code.client"
                  placeholder="Enter client code link"
               />
               <InputItem
                  label="Server Code Link"
                  type="url"
                  name="code.server"
                  placeholder="Enter server code link"
               />
               <InputItem
                  label="Preview Live Link"
                  type="url"
                  name="preview"
                  placeholder="Enter preview link"
               />
               <InputItem
                  label="Serial Number"
                  type="number"
                  name="order"
                  placeholder="Enter project show serial number"
               />
               <div className="col-span-2">
                  <MultiSelect
                     label="Technology"
                     name="technology"
                     required
                  />
               </div>
               <div className="col-span-2">
                  <MultiSelect
                     label="Features"
                     name="features"
                     required
                  />
               </div>
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

export default AddProjectPage;
