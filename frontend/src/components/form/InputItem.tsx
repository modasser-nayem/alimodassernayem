import { MdError } from "react-icons/md";
import { HTMLInputTypeAttribute } from "react";
import { Controller } from "react-hook-form";

type TInputItemProps = {
   label: string;
   type: HTMLInputTypeAttribute;
   name: string;
   placeholder?: string;
   required?: boolean;
   className?: string;
};

const InputItem = ({
   label,
   type,
   name,
   placeholder,
   required,
   className,
}: TInputItemProps) => {
   return (
      <Controller
         name={name}
         render={({ field, fieldState: { error } }) => (
            <label className="form-control w-full">
               <div className="label">
                  <span className="text-base font-semibold label-text">
                     {label}{" "}
                     {required && <span className="text-red-600">*</span>}
                  </span>
               </div>
               <input
                  {...field}
                  value={field.value ?? ""}
                  className={`${className} cs-input w-full ${
                     error && "border-red-600"
                  }`}
                  type={type}
                  placeholder={placeholder}
               />
               {error && (
                  <div className="label flex items-center justify-start gap-1 text-red-500 text-sm">
                     <span>
                        <MdError />
                     </span>
                     <span>{error.message}</span>
                  </div>
               )}
            </label>
         )}
      />
   );
};

export default InputItem;
