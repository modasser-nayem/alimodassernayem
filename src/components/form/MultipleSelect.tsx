import React, { useState, KeyboardEvent, useRef, useEffect } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { MdError, MdOutlineClose } from "react-icons/md";

interface MultiSelectProps {
   label: string;
   name: string;
   placeholder?: string;
   required?: boolean;
}

const MultiSelect: React.FC<MultiSelectProps> = ({
   label,
   name,
   placeholder,
   required,
}) => {
   const { control, setValue, getValues } = useFormContext();
   const [inputValue, setInputValue] = useState<string>("");
   const [options, setOptions] = useState<string[]>(getValues(name) || []);
   const inputRef = useRef<HTMLInputElement>(null);

   useEffect(() => {
      setValue(name, options);
   }, [options, name, setValue]);

   const addOption = (
      event: React.FormEvent | KeyboardEvent<HTMLInputElement>
   ) => {
      event.preventDefault();
      if (inputValue.trim() && !options.includes(inputValue.trim())) {
         setOptions([...options, inputValue.trim()]);
         setInputValue("");
      }
   };

   const removeOption = (optionToRemove: string) => {
      setOptions(options.filter((option) => option !== optionToRemove));
   };

   return (
      <>
         <Controller
            control={control}
            name={name}
            defaultValue={[]}
            render={({ field, fieldState: { error } }) => (
               <>
                  <label className="form-control w-full">
                     <div className="label">
                        <span className="text-base font-semibold label-text">
                           {label}{" "}
                           {required && <span className="text-red-600">*</span>}
                        </span>
                     </div>
                     <div
                        className={`flex flex-wrap items-center gap-3 cs-input ${
                           error && "border-red-600"
                        }`}
                        onClick={() => inputRef.current?.focus()}
                     >
                        {options.map((option, index) => (
                           <div
                              key={index}
                              className="flex items-center bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
                           >
                              {option}
                              <button
                                 type="button"
                                 onClick={() => removeOption(option)}
                                 className="border bg-gray-300 rounded-full border-gray-500 p-[1px] ml-2 text-red-500 hover:bg-gray-400 text-xs"
                              >
                                 <MdOutlineClose />
                              </button>
                           </div>
                        ))}
                        <input
                           ref={inputRef}
                           type="text"
                           value={inputValue}
                           onChange={(e) => setInputValue(e.target.value)}
                           onKeyDown={(e) => e.key === "Enter" && addOption(e)}
                           placeholder={placeholder}
                           className="flex-grow bg-transparent border-0 focus:ring-0 p-0 m-0 w-16"
                           style={{
                              outline: "none",
                              width: inputValue
                                 ? `${inputValue.length + 1}ch`
                                 : "1ch",
                           }}
                        />
                     </div>
                     {error && (
                        <div className="label flex items-center justify-start gap-1 text-red-500 text-sm">
                           <span>
                              <MdError />
                           </span>
                           <span>{error.message}</span>
                        </div>
                     )}
                  </label>
               </>
            )}
         />
      </>
   );
};

export default MultiSelect;
