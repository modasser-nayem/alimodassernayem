"use client";

import React, { useEffect, useState } from "react";

interface DownloadButtonProps {
   driveUrl: string;
   className?: string;
   children: React.ReactNode;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({
   driveUrl,
   className,
   children,
}) => {
   const [downloadLink, setDownloadLink] = useState("");

   useEffect(() => {
      const regex = /\/d\/([a-zA-Z0-9_-]+)\//;
      const match = driveUrl.match(regex);

      if (match && match[1]) {
         const fileId = match[1];
         const link = `https://drive.google.com/uc?export=download&id=${fileId}`;
         setDownloadLink(link);
      } else {
         setDownloadLink("");
      }
   }, [driveUrl]);

   return downloadLink ? (
      <a
         href={downloadLink}
         download
         target="_blank"
         rel="noopener noreferrer"
         className={className}
      >
         {children}
      </a>
   ) : (
      <p className="text-red-500">Invalid Drive URL</p>
   );
};

export default DownloadButton;
