import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa"; //
import Link from "next/link";

export default function Footer() {
   return (
      <footer className="bg-gray-900 text-white py-6">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
               {/* Texto */}
               <p className="text-sm">
                  &copy; {new Date().getFullYear()} Richard.dev. Todos os
                  direitos reservados.
               </p>
               {/* Links */}
               <ul className="flex space-x-4">
                  <li>
                     <Link
                        href="https://github.com/richzago97"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-teal-400 transition flex items-center space-x-1"
                     >
                        <FaGithub size={20} /> {/* Ícone do GitHub */}
                        <span>GitHub</span>
                     </Link>
                  </li>
                  <li>
                     <Link
                        href="https://www.linkedin.com/in/richzago/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-teal-400 transition flex items-center space-x-1"
                     >
                        <FaLinkedin size={20} /> {/* Ícone do LinkedIn */}
                        <span>LinkedIn</span>
                     </Link>
                  </li>
                  <li>
                     <Link
                        href="#contact"
                        className="hover:text-teal-400 transition"
                     >
                        Contato
                     </Link>
                  </li>
               </ul>
            </div>
         </div>
      </footer>
   );
}
