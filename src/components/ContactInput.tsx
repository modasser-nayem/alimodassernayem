import React from "react";

type TContactInputProps = {
   label: string;
   type: string;
   name: string;
   placeholder?: string;
   value?: string;
   onchange?: any;
};

const ContactInput = ({
   label,
   type,
   name,
   placeholder,
   value,
   onchange,
}: TContactInputProps) => {
   return (
      <div className="flex items-center justify-between md:text-lg">
         <label
            className="min-w-[105px] lg:min-w-[130px] font-medium capitalize"
            htmlFor={name}
         >
            {label}:
         </label>
         <input
            type={type}
            name={name}
            id={name}
            value={value}
            onChange={onchange}
            placeholder={placeholder}
            className="w-full py-1.5 outline-none border-b-2 focus:border-cs-orange focus:text-cs-orange focus:placeholder:text-cs-orange bg-transparent transition-all"
         />
      </div>
   );
};

export default ContactInput;
