"use client";

import FormDialog from "@/components/form/FormDialog";
import InputItem from "@/components/form/InputItem";
import InputSelect from "@/components/form/InputSelect";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { MdEdit } from "react-icons/md";

type TUpdateProjectProps = {
   id: string;
};

const UpdateProject = ({ id }: TUpdateProjectProps) => {
   const handleDialogSubmit: SubmitHandler<FieldValues> = (formData) => {
      console.log(formData);
   };

   return (
      <>
         <FormDialog
            openText="Edit"
            title="Update Project"
            openClassName="w-full rounded-md hover:rounded-md bg-cs-yellow text-gray-900 cs-btn-outline shadow-none"
            openIcon={<MdEdit />}
            onSubmit={handleDialogSubmit}
         >
            <InputItem
               label="Title"
               type="text"
               name="title"
               placeholder="Enter project title"
               required
            />
            <InputSelect
               label="Stack"
               name="stack"
               options={[
                  { label: "Frontend", value: "frontend" },
                  { label: "Backend", value: "Backend" },
                  { label: "Fullstack", value: "Fullstack" },
               ]}
               className="mb-10"
            />
            <button className="cs-btn">Submit</button>
         </FormDialog>
      </>
   );
};

export default UpdateProject;
