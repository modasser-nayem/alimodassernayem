import React from "react";
import DownloadButton from "./DownloadButton";
import { MdOutlineFileDownload } from "react-icons/md";

interface DownloadCVProps {
   resumeUrl?: string;
}

const DownloadCV: React.FC<DownloadCVProps> = ({
   resumeUrl = "https://drive.google.com/file/d/112HM3rCareaOJVptmk9uEhCb1npfbEke/view?usp=drive_link",
}) => {
   return (
      <div className="dropdown dropdown-top">
         <div
            tabIndex={0}
            role="button"
            className="cs-btn-outline"
         >
            CV Download
            <MdOutlineFileDownload />
         </div>
         <ul
            tabIndex={0}
            className="dropdown-content menu bg-cs-blue-deep text-cs-orange rounded-box z-1 w-52 p-2 shadow-sm"
         >
            <li>
               <a
                  href={resumeUrl}
                  target="_blank"
               >
                  Open As PDF
               </a>
            </li>
            <li>
               <DownloadButton driveUrl={resumeUrl}>
                  Download PDF
               </DownloadButton>
            </li>
         </ul>
      </div>
   );
};

export default DownloadCV;
