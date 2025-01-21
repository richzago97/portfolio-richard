"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
   const [isOpen, setIsOpen] = useState(false);

   const toggleMenu = () => {
      setIsOpen(!isOpen);
   };

   return (
      <header className="bg-gray-900 text-white shadow-lg sticky top-0 z-50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
               {/* Logo com iniciais */}
               <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white flex items-center justify-center rounded-full font-bold text-xl">
                  RZ
               </div>

               {/* Hamburger Menu */}
               <div className="lg:hidden">
                  <button
                     onClick={toggleMenu}
                     className="text-white focus:outline-none"
                  >
                     {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                  </button>
               </div>

               {/* Navigation */}
               <nav
                  className={`${
                     isOpen ? "block" : "hidden"
                  } lg:block absolute lg:static top-full left-0 w-full lg:w-auto bg-gray-900 lg:bg-transparent`}
               >
                  <ul className="flex flex-col lg:flex-row lg:space-x-4 text-center lg:text-left">
                     <li>
                        <a
                           href="/"
                           className="block py-2 px-2 lg:py-0 hover:text-teal-400 transition-all duration-300"
                        >
                           Início
                        </a>
                     </li>
                     <li>
                        <a
                           href="/about"
                           className="block py-2 px-2 lg:py-0 hover:text-teal-400 transition-all duration-300"
                        >
                           Sobre
                        </a>
                     </li>
                     <li>
                        <a
                           href="/projects"
                           className="block py-2 px-2 lg:py-0 hover:text-teal-400 transition-all duration-300"
                        >
                           Projetos
                        </a>
                     </li>
                     <li>
                        <a
                           href="/contact"
                           className="block py-2 px-2 lg:py-0 hover:text-teal-400 transition-all duration-300"
                        >
                           Contato
                        </a>
                     </li>
                  </ul>
               </nav>
            </div>
         </div>
      </header>
   );
}
