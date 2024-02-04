"use client";

import { ReactNode } from "react";
import { Link } from "react-scroll";

type TNavLink = {
   children: ReactNode;
   path: string;
   className?: string;
   activeClass?: string;
};

const NavLink = ({ children, path, className, activeClass }: TNavLink) => {
   return (
      <Link
         className={className}
         activeClass={activeClass}
         to={path}
         spy={true}
         smooth={true}
         offset={-100}
         duration={800}
      >
         {children}
      </Link>
   );
};

export default NavLink;
