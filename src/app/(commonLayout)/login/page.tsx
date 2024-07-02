"use client";

import FormWrapper, { TValidationErrors } from "@/components/form/FormWrapper";
import InputItem from "@/components/form/InputItem";
import { useLoginUserMutation } from "@/redux/api/authApi";
import { isReduxRTQError } from "@/redux/api/baseApi";
import { TDecodeUser, setUser } from "@/redux/features/auth";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { isFormValidationErrors } from "@/utils/isValidationErrors";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

const LoginPage = () => {
   const navigate = useRouter();

   const dispatch = useAppDispatch();

   const [errors, setErrors] = useState<TValidationErrors[]>([]);

   const [loginUser, { data, error, isLoading }] = useLoginUserMutation();

   const handleOnSubmit: SubmitHandler<FieldValues> = (formData) => {
      try {
         const modifyData = {
            email: formData.email,
            password: formData.password,
         };

         loginUser(modifyData);
      } catch (error) {
         toast.error("Something went wrong! Try again.");
      }
   };

   useEffect(() => {
      if (data) {
         toast.success(data.message);
         const token = data?.data?.access_token as string;
         const user = jwtDecode(token) as TDecodeUser;
         dispatch(setUser({ user: user, token: token }));
         navigate.push("/dashboard");
      }
      if (isReduxRTQError(error)) {
         if (isFormValidationErrors(error?.data?.errors)) {
            setErrors(error.data.errors);
         } else {
            toast.error(error?.data?.message || "An error occurred");
         }
      }
   }, [data, error, dispatch, navigate]);

   return (
      <div className="cs-container my-20">
         <FormWrapper
            onSubmit={handleOnSubmit}
            errors={errors}
            successSubmit={data?.success}
            className="mx-auto"
         >
            <h2 className="text-2xl font-semibold text-center mb-4">Sign In</h2>
            <div className="flex flex-col gap-4">
               <InputItem
                  label="Email"
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                  required
               />
               <InputItem
                  label="Password"
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  required
               />
               <button
                  className="mt-4 cs-btn shadow-none col-span-2"
                  type="submit"
                  disabled={isLoading}
               >
                  Sign In
               </button>
            </div>
         </FormWrapper>
      </div>
   );
};

export default LoginPage;
