import { TInputSelectOption } from "@/types";
import { Controller } from "react-hook-form";
import { MdError } from "react-icons/md";

type TInputSelectProps = {
   label: string;
   name: string;
   options: TInputSelectOption[];
   required?: boolean;
   readOnly?: boolean;
   className?: string;
   itemClass?: string;
};

const InputSelect = ({
   label,
   name,
   options,
   required,
   readOnly,
   className,
   itemClass,
}: TInputSelectProps) => {
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
               <select
                  {...field}
                  value={field.value ?? ""}
                  className={`${className} cs-input w-full capitalize ${
                     error && "border-red-600"
                  }`}
               >
                  <option disabled>Select {label}</option>
                  {options.map((item, i) => (
                     <option
                        key={i}
                        value={item.value}
                        className={`${itemClass} capitalize`}
                     >
                        {item.label}
                     </option>
                  ))}
               </select>
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

export default InputSelect;
