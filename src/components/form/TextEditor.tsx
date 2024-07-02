import { MdError } from "react-icons/md";
import { Controller, useFormContext } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { modules, formats } from "@/utils/quillConfig";

type TTextEditorProps = {
   label: string;
   name: string;
   placeholder?: string;
   required?: boolean;
   className?: string;
};

const TextEditor = ({
   label,
   name,
   placeholder,
   required,
   className,
}: TTextEditorProps) => {
   const { control } = useFormContext();

   return (
      <Controller
         name={name}
         control={control}
         render={({ field, fieldState: { error } }) => (
            <label className="form-control w-full">
               <div className="label">
                  <span className="text-base font-semibold label-text">
                     {label}{" "}
                     {required && <span className="text-red-600">*</span>}
                  </span>
               </div>
               <ReactQuill
                  modules={modules}
                  formats={formats}
                  theme="snow"
                  value={field.value}
                  onChange={(newContent) => field.onChange(newContent)}
                  placeholder={placeholder}
                  className={`${
                     error && "border-red"
                  } text-editor ${className}`}
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

export default TextEditor;
