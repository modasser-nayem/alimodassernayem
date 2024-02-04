import Link from "next/link";
import NavLink from "./NavLink";
import ToggleTheme from "./ToggleTheme";
import { Bars3CenterLeftIcon } from "@heroicons/react/24/outline";

type TNavLinks = {
   name: string;
   path: string;
};

const Navbar = () => {
   const navLinks: TNavLinks[] = [
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
      // {
      //    name: "Blogs",
      //    path: "blogs",
      // },
      // {
      //    name: "Testimonial",
      //    path: "testimonial",
      // },
   ];

   return (
      <nav className="navbar dark:bg-slate-900 bg-white bg-opacity-95 fixed z-[999] mx-auto px-[1rem] sm:px-[2rem] lg:px-[2rem] xl:px-[2.5rem] 2xl:px-[6rem]">
         <div className="navbar-start">
            <div className="dropdown">
               <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-sm px-1.5 btn-ghost lg:hidden block"
               >
                  <Bars3CenterLeftIcon className="w-8 h-8" />
               </div>
               <ul
                  tabIndex={1}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow-lg bg-base-100 rounded-box w-52"
               >
                  {navLinks.map((item) => (
                     <li key={item.name}>
                        <NavLink path={item.path}>{item.name}</NavLink>
                     </li>
                  ))}
               </ul>
            </div>
            <Link
               href="/"
               className="text-2xl font-bold scroll-smooth"
            >
               Nayem
            </Link>
         </div>
         {/*  */}
         <div className="navbar-center hidden lg:block">
            <div className="flex gap-5 px-1">
               {navLinks.map((item) => (
                  <NavLink
                     className="uppercase cursor-pointer"
                     activeClass="text-cs-orange"
                     path={item.path}
                     key={item.name}
                  >
                     {item.name}
                  </NavLink>
               ))}
            </div>
         </div>
         <div className="navbar-end">
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
      </nav>
   );
};

export default Navbar;
