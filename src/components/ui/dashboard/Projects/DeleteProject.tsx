"use client";

import { isReduxRTQError } from "@/redux/api/baseApi";
import { useDeleteProjectMutation } from "@/redux/api/projectApi";
import React, { useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { toast } from "sonner";
import Swal from "sweetalert2";

const DeleteProject = ({ id }: { id: string }) => {
   const [deleteProject, { data, error }] = useDeleteProjectMutation();

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
               deleteProject({ id });
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
         className="w-full rounded-md cs-btn-outline hover:rounded-md bg-cs-yellow text-gray-800"
      >
         <MdDelete /> Delete
      </button>
   );
};

export default DeleteProject;
