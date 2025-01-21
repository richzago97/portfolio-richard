"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import {
   FaHtml5,
   FaCss3Alt,
   FaReact,
   FaNodeJs,
   FaPython,
   FaPhp,
   FaJava,
} from "react-icons/fa";
import {
   SiStyledcomponents,
   SiTailwindcss,
   SiJavascript,
   SiTypescript,
   SiNestjs,
   SiNextdotjs,
   SiDjango,
   SiLaravel,
   SiSpringboot,
   SiMysql,
   SiPostgresql,
   SiMongodb,
   SiJira,
   SiTrello,
   SiLua,
   SiJetbrains,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { motion } from "framer-motion";

export default function About() {
   return (
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white">
         <Header />
         <main className="flex-grow max-w-4xl mx-auto px-6 sm:px-8 lg:px-10 py-12">
            {/* Título */}
            <motion.h1
               className="text-4xl font-extrabold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500"
               initial={{ opacity: 0, y: -50 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
            >
               Sobre Mim
            </motion.h1>

            {/* Imagem do perfil */}
            <motion.div
               className="flex justify-center mb-8"
               initial={{ scale: 0 }}
               animate={{ scale: 1 }}
               transition={{ duration: 0.5 }}
            >
               <img
                  src="/images/richard.jpg"
                  alt="Foto de Richard Zago"
                  className="w-40 h-40 rounded-full border-4 border-blue-500 shadow-lg transform transition duration-500 hover:scale-105"
               />
            </motion.div>

            {/* Texto sobre mim */}
            <motion.p
               className="text-lg leading-8 text-justify bg-gray-800 bg-opacity-70 p-6 rounded-lg shadow-lg border border-gray-700"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.5, duration: 0.8 }}
            >
               Me chamo Richard Zago, sou desenvolvedor Full Stack com foco em
               back-end. Iniciei minha trajetória em 2022, participando de um
               curso intensivo de desenvolvimento web com duração de 1 ano e
               carga total de 2.000 horas. Desde então, venho me aprimorando
               constantemente, acumulando experiências que me permitiram
               desenvolver soluções eficientes e escaláveis para diversas
               demandas. Durante minha formação na Kenzie Academy, atuei como
               Monitor de Back-End, auxiliando alunos no desenvolvimento de
               aplicações, corrigindo entregas e oferecendo suporte técnico.
               Essa experiência não só fortaleceu minhas habilidades técnicas,
               mas também consolidou meu gosto por colaborar em equipe e
               contribuir para o crescimento coletivo. Em março de 2024, darei
               início à minha graduação em{" "}
               <span className="text-yellow-400 font-semibold">
                  Análise e Desenvolvimento de Sistemas
               </span>{" "}
               pela UNISC, buscando expandir ainda mais minha base de
               conhecimento técnico e acadêmico. Estou comprometido com a
               entrega de projetos inovadores e com a busca constante pela
               excelência técnica, sempre visando a evolução contínua.
            </motion.p>

            {/* Seção de Tecnologias */}
            <motion.section
               className="mt-4"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.8, duration: 0.8 }}
            >
               {/* Tecnologias por nível */}
               <div className="space-y-12">
                  {/* Tecnologias com 2 anos + de experiencia */}
                  <div>
                     <h3 className="text-2xl font-semibold text-center mb-4">
                        Tecnologias com 2 anos+ de Experiência
                     </h3>
                     <motion.div
                        className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-6"
                        initial="hidden"
                        animate="visible"
                        variants={{
                           hidden: { opacity: 0, y: 20 },
                           visible: {
                              opacity: 1,
                              y: 0,
                              transition: { staggerChildren: 0.1 },
                           },
                        }}
                     >
                        {[
                           { icon: SiJavascript, name: "JavaScript" },
                           { icon: SiTypescript, name: "TypeScript" },
                           { icon: FaReact, name: "React.js" },
                           { icon: FaNodeJs, name: "Node.js" },
                           { icon: SiNestjs, name: "Nest.js" },
                           { icon: FaCss3Alt, name: "CSS" },
                           {
                              icon: SiStyledcomponents,
                              name: "Styled Components",
                           },
                           { icon: SiPostgresql, name: "PostgreSQL" },
                        ].map((tech, index) => (
                           <motion.div
                              key={index}
                              className="flex flex-col items-center transition transform hover:scale-110"
                              whileHover={{ scale: 1.1 }}
                           >
                              <tech.icon className="text-4xl mb-2" />
                              <span className="text-sm">{tech.name}</span>
                           </motion.div>
                        ))}
                     </motion.div>
                  </div>

                  {/* Tecnologias com experiência */}
                  <div>
                     <h3 className="text-2xl font-semibold text-center mb-4">
                        Tecnologias com menos de 2 anos de Experiência
                     </h3>
                     <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-6">
                        {[
                           { icon: SiNextdotjs, name: "Next.js" },
                           { icon: FaJava, name: "Java" },
                           { icon: SiSpringboot, name: "Spring Boot" },
                           { icon: FaPython, name: "Python" },
                           { icon: SiDjango, name: "Django" },
                           { icon: FaPhp, name: "PHP" },
                           { icon: SiLaravel, name: "Laravel" },
                           { icon: SiLua, name: "Lua" },
                           { icon: SiTailwindcss, name: "Tailwind CSS" },
                           { icon: SiMysql, name: "MySQL" },
                           { icon: SiMongodb, name: "MongoDB" },
                        ].map((tech, index) => (
                           <motion.div
                              key={index}
                              className="flex flex-col items-center transition transform hover:scale-110"
                              whileHover={{ scale: 1.1 }}
                           >
                              <tech.icon className="text-4xl mb-2" />
                              <span className="text-sm">{tech.name}</span>
                           </motion.div>
                        ))}
                     </div>
                  </div>

                  {/* Outras tecnologias */}
                  <div>
                     <h3 className="text-2xl font-semibold text-center mb-4">
                        Outras Tecnologias
                     </h3>
                     <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-6">
                        {[
                           { icon: VscVscode, name: "Vscode" },
                           { icon: SiJetbrains, name: "Jetbrains" },
                           { icon: SiJira, name: "Jira" },
                           { icon: SiTrello, name: "Trello" },
                        ].map((tech, index) => (
                           <motion.div
                              key={index}
                              className="flex flex-col items-center transition transform hover:scale-110"
                              whileHover={{ scale: 1.1 }}
                           >
                              <tech.icon className="text-4xl mb-2" />
                              <span className="text-sm">{tech.name}</span>
                           </motion.div>
                        ))}
                     </div>
                  </div>
               </div>
            </motion.section>
         </main>
         <Footer />
      </div>
   );
}
