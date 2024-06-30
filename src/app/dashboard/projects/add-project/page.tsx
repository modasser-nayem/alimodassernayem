"use client";

import FormWrapper from "@/components/form/FormWrapper";
import InputItem from "@/components/form/InputItem";
import MultiSelect from "@/components/form/MultipleSelect";
import { FieldValues, SubmitHandler } from "react-hook-form";

const AddProjectPage = () => {
   const handleOnSubmit: SubmitHandler<FieldValues> = (formData) => {
      try {
         formData.order = formData.order
            ? Number(formData.order)
            : formData.order;
         console.log(formData);
      } catch (error) {}
   };

   return (
      <div className="my-20">
         <FormWrapper
            onSubmit={handleOnSubmit}
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
                     required
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
                  />
               </div>
               <div className="col-span-2">
                  <MultiSelect
                     label="Features"
                     name="features"
                  />
               </div>
               <button
                  className="mt-2 cs-btn shadow-none col-span-2"
                  type="submit"
               >
                  Submit
               </button>
            </div>
         </FormWrapper>
      </div>
   );
};

export default AddProjectPage;
