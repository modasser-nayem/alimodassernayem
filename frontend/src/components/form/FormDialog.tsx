import React, { ReactNode, useEffect, useState } from "react";
import FormWrapper, { TValidationErrors } from "./FormWrapper";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { ZodType } from "zod";
import { IoMdClose } from "react-icons/io";

interface DialogProps {
   openText?: string;
   openIcon?: ReactNode;
   title?: string;
   openClassName?: string;
   children: ReactNode;
   submitBtnText?: string;
   submitBtnLoading?: boolean;
   onSubmit: SubmitHandler<FieldValues>;
   successSubmit?: boolean;
   errors?: TValidationErrors[];
   defaultValues?: Record<string, any>;
   validationSchema?: ZodType<any, any, any>;
   className?: string;
}

const FormDialog: React.FC<DialogProps> = ({
   openText,
   openIcon,
   openClassName,
   title,
   children,
   onSubmit,
   successSubmit,
   errors,
   defaultValues,
   validationSchema,
   className,
}) => {
   const [isOpen, setIsOpen] = useState(false);

   const handleOpenDialog = () => {
      setIsOpen(true);
   };

   const handleCloseDialog = () => {
      setIsOpen(false);
   };

   const handleOnSubmit = (
      data: FieldValues,
      event?: React.BaseSyntheticEvent<object, any, any> | undefined
   ) => {
      if (event) {
         event.stopPropagation();
      }
      onSubmit(data);
   };

   useEffect(() => {
      if (successSubmit) {
         handleCloseDialog();
      }
   }, [successSubmit]);

   return (
      <>
         <button
            onClick={handleOpenDialog}
            className={`${openClassName}`}
         >
            {openIcon && openIcon} {openText && <span>{openText}</span>}
         </button>
         {isOpen && (
            <div className="fixed z-[999999] inset-0 flex items-center justify-center bg-opacity-50">
               <div className="bg-white rounded-lg shadow-2xl w-fit">
                  <div className={`${className} sm:min-w-[550px] p-8 relative`}>
                     <button
                        className="absolute right-2 top-2 text-3xl hover:bg-gray-100 p-2 rounded-full text-gray-500"
                        onClick={handleCloseDialog}
                     >
                        <IoMdClose />
                     </button>
                     <FormWrapper
                        onSubmit={handleOnSubmit}
                        successSubmit={successSubmit}
                        validationSchema={validationSchema}
                        defaultValues={defaultValues}
                        errors={errors}
                     >
                        <h2 className="text-2xl font-semibold mb-4 dark:text-gray-700">
                           {title && title}
                        </h2>
                        {children}
                     </FormWrapper>
                  </div>
               </div>
            </div>
         )}
      </>
   );
};

export default FormDialog;
