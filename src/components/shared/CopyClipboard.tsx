"use client";

import { ReactNode, useState } from "react";

type TCopyClipboardProps = {
   textToCopy: string;
   children: ReactNode;
   hoverTitle?: string;
};

const CopyClipboard = ({
   children,
   textToCopy,
   hoverTitle,
}: TCopyClipboardProps) => {
   const [copied, setCopied] = useState(false);

   const copyToClipboard = async () => {
      try {
         await navigator.clipboard.writeText(textToCopy);
         setCopied(true);
         setTimeout(() => setCopied(false), 2000); // Reset the copied state after 2 seconds
      } catch (err) {
         console.error("Failed to copy: ", err);
      }
   };
   return (
      <div
         className="tooltip tooltip-top tooltip-warning"
         data-tip={copied ? "Copied" : hoverTitle || "Copy"}
         onClick={copyToClipboard}
      >
         {children}
      </div>
   );
};

export default CopyClipboard;
