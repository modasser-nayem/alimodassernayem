import Link from "next/link";
import React from "react";
import { FaFacebookF, FaGithub, FaInstagram } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import ContactInput from "@/components/ContactInput";

const Contact = () => {
   return (
      <section
         id="contact"
         className="cs-container"
      >
         <div>
            <div className="cs-title-box text-center">
               <h1 className="text-2xl">Contact.</h1>
               <h1>{"_Let's talk_"}</h1>
               <p className="mx-auto">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente ipsa quaerat deleniti necessitatibus officiis totam
                  architecto repellat natus, optio ipsam.
               </p>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-10 mt-[1rem] lg:mt-[7rem]">
               <div className="flex-1">
                  <div className="hidden lg:block cs-title-box text-center">
                     <h1 className="text-2xl">GET IN TOUCH</h1>
                     <h1 className="text-4xl">Contact me</h1>
                  </div>
                  <div className="bg-cs-blue-deep flex items-center justify-around gap-8 p-10 rounded-xl my-5 md:mt-16">
                     <p
                        className="cs-social-icon cursor-pointer tooltip tooltip-right md:tooltip-top tooltip-warning"
                        data-tip="modassernayem@gmail.com"
                     >
                        <MdEmail />
                        <p className="text-base hidden lg:block">Email</p>
                     </p>
                     <Link
                        className="cs-social-icon"
                        href={"https://alimodassernayem.web.app/"}
                     >
                        <FaFacebookF />
                        <p className="text-base hidden lg:block">Facebook</p>
                     </Link>
                     <Link
                        className="cs-social-icon"
                        href={"https://alimodassernayem.web.app/"}
                     >
                        <FaInstagram />
                        <p className="text-base hidden lg:block">Instagram</p>
                     </Link>
                     <Link
                        className="cs-social-icon"
                        href={"https://alimodassernayem.web.app/"}
                     >
                        <FaLinkedin />
                        <p className="text-base hidden lg:block">Linkedin</p>
                     </Link>
                     <Link
                        className="cs-social-icon"
                        href={"https://alimodassernayem.web.app/"}
                     >
                        <FaGithub />
                        <p className="text-base hidden lg:block">Github</p>
                     </Link>
                  </div>
               </div>
               <div className="flex-1 mx-auto">
                  <form
                     action=""
                     className="flex flex-col gap-5 p-8 rounded-2xl border-4 border-cs-orange"
                  >
                     <ContactInput
                        label="Name"
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value=""
                     />
                     <ContactInput
                        label="Email"
                        type="email"
                        name="email"
                        placeholder="Enter your email Address"
                        value=""
                     />
                     <ContactInput
                        label="subject"
                        type="text"
                        name="subject"
                        placeholder="Why send the mail"
                        value=""
                     />
                     <div className="flex items-start justify-between text-lg">
                        <label
                           className="min-w-[105px] lg:min-w-[130px] font-medium capitalize"
                           htmlFor="message"
                        >
                           Message:
                        </label>
                        <textarea
                           rows={4}
                           className="w-full resize-none bg-transparent border-b-2 focus:border-cs-orange focus:text-cs-orange focus:placeholder:text-cs-orange outline-none transition-all"
                           id="message"
                           placeholder="Write your message"
                           name="message"
                           required
                        ></textarea>
                     </div>
                     <button className="cs-btn mt-5 w-fit">Send email</button>
                  </form>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Contact;
