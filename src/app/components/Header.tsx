export default function Header() {
   return (
      <header className="bg-gray-900 text-white shadow-lg sticky top-0 z-50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
               {/* Logo */}
               <div className="text-2xl font-bold">
                  <a href="/" className="hover:text-teal-400">
                     Richard.dev
                  </a>
               </div>
               {/* Navigation */}
               <nav>
                  <ul className="flex space-x-6">
                     <a
                        href="/"
                        className="text-neutral-100 hover:text-gray-500"
                     >
                        Início
                     </a>
                     <li>
                        <a
                           href="about"
                           className="hover:text-teal-400 transition"
                        >
                           Sobre
                        </a>
                     </li>
                     <li>
                        <a
                           href="projects"
                           className="hover:text-teal-400 transition"
                        >
                           Projetos
                        </a>
                     </li>
                     <li>
                        <a
                           href="contact"
                           className="hover:text-teal-400 transition"
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
