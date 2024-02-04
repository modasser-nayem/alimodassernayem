"use client";

import { ChangeEventHandler, FormEvent, useState } from "react";
import ContactInput from "./ContactInput";

const ContactForm = () => {
   const [userInfo, serUserInfo] = useState({
      name: "",
      email: "",
      subject: "",
      message: "",
   });

   const handleOnChange:
      | ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
      | undefined = (e) => {
      serUserInfo({ ...userInfo, [e.target.name]: e.target.value });
   };

   const handleSubmit = (e: FormEvent) => {
      e.preventDefault();
      console.log(userInfo);
   };

   return (
      <form
         onSubmit={handleSubmit}
         className="flex flex-col gap-5 p-8 rounded-2xl border-4 border-cs-orange"
      >
         <ContactInput
            label="Name"
            type="text"
            name="name"
            placeholder="Enter your name"
            value={userInfo.name}
            onchange={handleOnChange}
         />
         <ContactInput
            label="Email"
            type="email"
            name="email"
            placeholder="Enter your email Address"
            value={userInfo.email}
            onchange={handleOnChange}
         />
         <ContactInput
            label="subject"
            type="text"
            name="subject"
            placeholder="Why send the mail"
            value={userInfo.subject}
            onchange={handleOnChange}
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
               value={userInfo.message}
               onChange={handleOnChange}
            ></textarea>
         </div>
         <button className="cs-btn mt-5 w-fit">Send email</button>
      </form>
   );
};

export default ContactForm;
