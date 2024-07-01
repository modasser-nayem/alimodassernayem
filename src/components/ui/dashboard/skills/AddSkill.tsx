"use client";

import FormDialog from "@/components/form/FormDialog";
import { TValidationErrors } from "@/components/form/FormWrapper";
import InputItem from "@/components/form/InputItem";
import InputSelect from "@/components/form/InputSelect";
import { SKILL_STACK } from "@/constant/skill";
import { isReduxRTQError } from "@/redux/api/baseApi";
import { useAddNewSkillMutation } from "@/redux/api/skillApi";
import { TInputSelectOption } from "@/types";
import { isFormValidationErrors } from "@/utils/isValidationErrors";
import { useEffect, useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { FaPlus } from "react-icons/fa6";
import { toast } from "sonner";

const AddSkill = () => {
   const [errors, setErrors] = useState<TValidationErrors[]>([]);

   const [addNewSkill, { data, error, isLoading }] = useAddNewSkillMutation();

   const handleOnSubmit: SubmitHandler<FieldValues> = (formData) => {
      try {
         if (formData.order) {
            formData.order = Number(formData.order);
         }

         addNewSkill(formData);
      } catch (error) {
         toast.error("Something went wrong! Try again.");
      }
   };

   const skillStackOptions: TInputSelectOption[] = Object.keys(SKILL_STACK).map(
      (item) => ({ label: item, value: item })
   );

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
      <FormDialog
         openText="Add Skill"
         openIcon={<FaPlus />}
         openClassName="cs-btn"
         title="Add New Skill"
         onSubmit={handleOnSubmit}
         successSubmit={data?.success}
         submitBtnLoading={isLoading}
         errors={errors}
      >
         <InputItem
            className="text-gray-600"
            label="Name"
            type="text"
            name="name"
            placeholder="Enter skill name"
            required
         />
         <InputItem
            className="text-gray-600"
            label="Icon Url"
            type="url"
            name="icon"
            placeholder="Enter icon link"
            required
         />
         <InputSelect
            className="text-gray-600"
            label="Stack"
            name="stack"
            required
            options={skillStackOptions}
         />
         <InputItem
            className="text-gray-600"
            label="Serial Number"
            type="number"
            name="order"
            placeholder="Enter skill show serial number"
         />
         <button
            className="mt-5 w-full cs-btn shadow-none col-span-2"
            type="submit"
            disabled={isLoading}
         >
            Submit
         </button>
      </FormDialog>
   );
};

export default AddSkill;
