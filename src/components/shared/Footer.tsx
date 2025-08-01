"use client";

import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import CopyClipboard from "./CopyClipboard";

const Footer = () => {
   return (
      <footer className="bg-cs-blue-deep text-cs-white">
         <div className="container mx-auto px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About */}
            <div>
               <h2 className="text-xl font-bold text-cs-orange mb-3">
                  Ali Modasser Nayem
               </h2>
               <p className="text-sm leading-relaxed">
                  Passionate full-stack developer. I build clean, scalable web
                  apps and aim to grow into a tech leader. Always learning,
                  improving, and solving problems with modern web technologies.
               </p>
            </div>

            {/* Quick Links */}
            <div>
               <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
               <ul className="space-y-2 text-base">
                  <li>
                     <a
                        href="#projects"
                        className="hover:text-cs-orange transition-all duration-200"
                     >
                        Projects
                     </a>
                  </li>
                  <li>
                     <a
                        href="#skills"
                        className="hover:text-cs-orange transition-all duration-200"
                     >
                        Skills
                     </a>
                  </li>
                  <li>
                     <a
                        href="#contact"
                        className="hover:text-cs-orange transition-all duration-200"
                     >
                        Contact
                     </a>
                  </li>
                  <li>
                     <a
                        href="#about"
                        className="hover:text-cs-orange transition-all duration-200"
                     >
                        About
                     </a>
                  </li>
               </ul>
            </div>

            {/* Contact & Socials */}
            <div>
               <h3 className="text-xl font-semibold mb-3">Contact</h3>
               <CopyClipboard textToCopy="modassernayem@gmail.com">
                  <div className="flex items-center gap-2 mb-2 text-base hover:text-cs-orange cursor-pointer">
                     <MdEmail size={18} /> <span>modassernayem@gmail.com</span>
                  </div>
               </CopyClipboard>
               <div className="flex gap-4 mt-4 text-2xl">
                  <a
                     href="https://github.com/modasser-nayem"
                     target="_blank"
                     className="hover:text-cs-orange"
                  >
                     <FaGithub />
                  </a>
                  <a
                     href="https://linkedin.com/in/alimodassernayem"
                     target="_blank"
                     className="hover:text-cs-orange"
                  >
                     <FaLinkedin />
                  </a>
                  <a
                     href="https://wa.me/8801816090766?text=Hi%20Nayem%2C%20I%20visited%20your%20portfolio!"
                     target="_blank"
                     className="hover:text-cs-orange"
                  >
                     <FaWhatsapp />
                  </a>
               </div>
            </div>
         </div>

         {/* Bottom Note */}
         <div className="text-center py-4 border-t border-cs-white/10 text-base">
            © {new Date().getFullYear()} — All rights reserved by{" "}
            <span className="text-cs-orange font-medium">
               Ali Modasser Nayem
            </span>
            .
         </div>
      </footer>
   );
};

export default Footer;
