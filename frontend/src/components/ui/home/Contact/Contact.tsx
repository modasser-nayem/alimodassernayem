import Link from "next/link";
import React from "react";
import { FaFacebookF, FaGithub, FaInstagram } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import ContactForm from "./ContactForm";
import EmailCopy from "../../../shared/CopyClipboard";
import CopyClipboard from "../../../shared/CopyClipboard";

type TContactProps = {
   sortDescription: string;
   email: string;
   facebook?: string;
   instagram?: string;
   linkedin?: string;
   github?: string;
};

const Contact = ({
   sortDescription,
   email,
   facebook,
   instagram,
   linkedin,
   github,
}: TContactProps) => {
   return (
      <section
         id="contact"
         className="cs-container"
      >
         <div>
            <div className="cs-title-box text-center">
               <h1 className="text-2xl">Contact.</h1>
               <h1>{"_Let's talk_"}</h1>
               <p className="mx-auto">{sortDescription}</p>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-10 mt-[1rem] lg:mt-[7rem]">
               <div className="flex-1">
                  <div className="hidden lg:block cs-title-box text-center">
                     <h1 className="text-2xl">GET IN TOUCH</h1>
                     <h1 className="text-4xl">Contact me</h1>
                  </div>
                  <div className="bg-cs-blue-deep flex items-center justify-around gap-4 sm:gap-8 p-7 sm:p-10 rounded-xl my-5 md:mt-16">
                     <CopyClipboard textToCopy={email}>
                        <p className="cs-social-icon cursor-pointer">
                           <MdEmail />
                           <span className="text-base hidden lg:block">
                              Email
                           </span>
                        </p>
                     </CopyClipboard>
                     {facebook && (
                        <Link
                           className="cs-social-icon"
                           href={facebook}
                        >
                           <FaFacebookF />
                           <p className="text-base hidden lg:block">Facebook</p>
                        </Link>
                     )}
                     {instagram && (
                        <Link
                           className="cs-social-icon"
                           href={instagram}
                        >
                           <FaInstagram />
                           <p className="text-base hidden lg:block">
                              Instagram
                           </p>
                        </Link>
                     )}
                     {linkedin && (
                        <Link
                           className="cs-social-icon"
                           href={linkedin}
                        >
                           <FaLinkedin />
                           <p className="text-base hidden lg:block">Linkedin</p>
                        </Link>
                     )}
                     {github && (
                        <Link
                           className="cs-social-icon"
                           href={github}
                        >
                           <FaGithub />
                           <p className="text-base hidden lg:block">Github</p>
                        </Link>
                     )}
                  </div>
               </div>
               <div className="flex-1 mx-auto">
                  <ContactForm />
               </div>
            </div>
         </div>
      </section>
   );
};

export default Contact;
