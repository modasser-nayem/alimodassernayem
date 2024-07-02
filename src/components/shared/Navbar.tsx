"use client";
import Link from "next/link";
import NavLink from "./NavLink";
import ToggleTheme from "./ToggleTheme";
import { useEffect, useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";

type TNavLink = {
   name: string;
   path: string;
};

const Navbar = () => {
   const navLinks: TNavLink[] = [
      {
         name: "Home",
         path: "introduction",
      },
      {
         name: "About",
         path: "about",
      },
      {
         name: "Skills",
         path: "skills",
      },
      {
         name: "Projects",
         path: "projects",
      },
      {
         name: "Services",
         path: "services",
      },
      {
         name: "Blogs",
         path: "blogs",
      },
      // {
      //    name: "Testimonial",
      //    path: "testimonial",
      // },
   ];

   const clickRef = useRef<HTMLDivElement>(null);
   const [isOpen, setIsOpen] = useState(false);

   useEffect(() => {
      document.addEventListener("click", clickOutside, true);
      return () => document.addEventListener("click", clickOutside, true);
   }, []);

   const clickOutside = (e: any) => {
      if (clickRef.current && !clickRef.current.contains(e.target)) {
         setIsOpen(false);
      } else if (e.target.className === "uppercase cursor-pointer nav-link") {
         setIsOpen(false);
      }
   };

   return (
      <nav
         ref={clickRef}
         className="fixed w-full z-40 h-[70px] backdrop-blur-2xl flex justify-center items-center"
      >
         <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
               <Link
                  href="/"
                  className="text-2xl md:text-4xl uppercase font-semibold text-cs-orange font-courgette scroll-smooth"
               >
                  Nayem
               </Link>
               <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="lg:hidden text-3xl tooltip tooltip-right tooltip-warning"
                  data-tip="menu"
               >
                  {isOpen ? (
                     <AiOutlineClose className="" />
                  ) : (
                     <HiMiniBars3CenterLeft />
                  )}
               </button>
            </div>
            {/* nav links */}
            <div
               className={`flex flex-col lg:flex-row items-center gap-10 absolute lg:static left-0 w-full lg:w-auto -z-50 lg:z-auto py-10 lg:py-0 transition-all duration-500 ease-linear lg:transition-none ${
                  isOpen
                     ? "bg-white dark:bg-cs-blue-deep top-[70px]"
                     : " -top-[900px]"
               }`}
            >
               <div className="flex flex-col font-medium items-center lg:flex-row gap-5 px-1">
                  {navLinks.map((item) => (
                     <NavLink
                        key={item.name}
                        className="uppercase cursor-pointer nav-link"
                        activeClass="text-cs-orange"
                        path={item.path}
                     >
                        {item.name}
                     </NavLink>
                  ))}
               </div>
            </div>
            {/* responsive button */}
            <div>
               <div className="flex items-center gap-5">
                  <NavLink
                     className="cs-btn"
                     path="contact"
                  >
                     Contact
                  </NavLink>
                  <ToggleTheme />
               </div>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
