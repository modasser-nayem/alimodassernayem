import { zodResolver } from "@hookform/resolvers/zod";
import { ReactNode, useEffect } from "react";
import {
   FieldValues,
   FormProvider,
   Resolver,
   SubmitHandler,
   useForm,
} from "react-hook-form";
import { ZodType } from "zod";

type TFormConfig = {
   defaultValues?: Record<string, any>;
   resolver?: Resolver;
};

export type TValidationErrors = {
   path: string;
   message: string;
};

type TFormWrapperProps = {
   children: ReactNode;
   className?: string;
   onSubmit: SubmitHandler<FieldValues>;
   successSubmit?: boolean;
   errors?: TValidationErrors[];
   defaultValues?: Record<string, any>;
   validationSchema?: ZodType<any, any, any>;
};

const FormWrapper = ({
   children,
   className,
   onSubmit,
   defaultValues,
   successSubmit,
   validationSchema,
   errors,
}: TFormWrapperProps) => {
   const formConfig: TFormConfig = {};

   if (defaultValues) {
      formConfig["defaultValues"] = defaultValues;
   }

   if (validationSchema) {
      formConfig["resolver"] = zodResolver(validationSchema);
   }

   const methods = useForm(formConfig);

   const onSubmitHandler: SubmitHandler<FieldValues> = (data) => {
      onSubmit(data);
   };

   useEffect(() => {
      if (successSubmit) {
         methods.reset();
      }
   }, [successSubmit, methods]);

   useEffect(() => {
      if (errors && errors.length) {
         errors.forEach((error) =>
            methods.setError(error.path, {
               type: "manual",
               message: error.message,
            })
         );
      }
   }, [errors, methods]);

   return (
      <FormProvider {...methods}>
         <form
            className={`${className} max-w-xl`}
            onSubmit={methods.handleSubmit(onSubmitHandler)}
         >
            {children}
         </form>
      </FormProvider>
   );
};

export default FormWrapper;
