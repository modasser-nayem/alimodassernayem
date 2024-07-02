import Link from "next/link";
import React from "react";
import { IoArrowBackCircle } from "react-icons/io5";

const BackLink = ({
   href,
   className,
   text,
}: {
   href: string;
   className?: string;
   text?: string;
}) => {
   return (
      <Link
         href={href}
         className={`${className} text-cs-orange text-xl flex items-center gap-2 hover:text-cs-orange/60`}
      >
         <span>
            <IoArrowBackCircle />
         </span>{" "}
         <span>{text ? text : "Back"}</span>
      </Link>
   );
};

export default BackLink;
