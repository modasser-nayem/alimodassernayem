"use client";

import { isReduxRTQError } from "@/redux/api/baseApi";
import { useDeleteSkillMutation } from "@/redux/api/skillApi";
import { useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { toast } from "sonner";
import Swal from "sweetalert2";

const DeleteSkill = ({ id }: { id: string }) => {
   const [deleteSkill, { data, error }] = useDeleteSkillMutation();

   const handleDelete = () => {
      try {
         Swal.fire({
            title: "Do you want to Delete!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "primary.main",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes",
         }).then((result) => {
            if (result.isConfirmed) {
               deleteSkill({ id });
            }
         });
      } catch (error) {
         toast.error("Something went wrong! Try again.");
      }
   };

   useEffect(() => {
      if (data) {
         toast.success(data.message);
      }
      if (isReduxRTQError(error)) {
         toast.error(error?.data?.message || "An error occurred");
      }
   }, [data, error]);

   return (
      <button
         onClick={handleDelete}
         className="hover:text-cs-orange cursor-pointer text-3xl"
      >
         <MdDelete />
      </button>
   );
};

export default DeleteSkill;
