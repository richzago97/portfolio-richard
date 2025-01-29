"use client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectCard from "./components/ProjectCard";
import { Project } from "./projects/page";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects: Project[] = [
   {
      title: "Kenzie Hub",
      description:
         "O projeto foi criado pra ser um hub de portfólio de programadores da Kenzie, consumindo uma API existente.",
      link: "https://meuprojetofullstack.com",
      deploy: "https://kenzie-hub-seven-lake.vercel.app/",
      category: "Front-end",
      image: "/images/kenziehub.png",
      technologies: ["Typescript", "ReactJS"],
   },
   {
      title: "Cadastro Clientes",
      description:
         "Sistema de cadastro de clientes que permite a associação de múltiplos contatos a cada cliente. Além disso, o sistema oferece a funcionalidade de geração de relatórios em tela ou em PDF.",
      link: "https://github.com/richzago97/cadastro-clientes-fullstack",
      category: "Fullstack",
      technologies: ["Typescript", "React.JS", "Node.JS"],
      image: "/images/fullstack.png",
   },
   {
      title: "Produtos e Categorias",
      description:
         "O serviço de Gerenciamento de Produtos e Categorias é uma aplicação que oferece uma API para realizar operações relacionadas a produtos e categorias. Containerizado com Docker.",
      link: "https://github.com/richzago97/produtos-categorias-s3-17",
      category: "Back-end",
      image: "/images/api.png",
      technologies: ["Javascript", "PostgreSQL", "Docker"],
   },
   {
      title: "Usuários",
      description:
         "Gerenciamento de usuários com CRUD (Create, Read, Update, Delete). Containerizado com Docker para fácil implantação e escalabilidade.",
      link: "https://github.com/richzago97/crud-typeorm-s4-14",
      category: "Back-end",
      image: "/images/api.png",
      technologies: ["Typescript", "PostgreSQL", "Docker"],
   },
   {
      title: "BandKamp",
      description:
         "Aplicação cujo objetivo é o usuário cadastrar seus álbuns e músicas. Com distinção entre super usuário e usuário, em que as funcionalidades é mais limitado.",
      link: "https://github.com/richzago97/bandkamp",
      category: "Back-end",
      image: "/images/api.png",
      technologies: ["Python", "Django", "PostgreSQL"],
   },
   {
      title: "Zago Bank",
      description:
         "Sistema de Transações, um aplicativo web desenvolvido em Laravel, que permite aos usuários realizar transações financeiras, como depósitos e transferências. Ele fornece uma API para gerenciar usuários e transações.",
      link: "https://github.com/richzago97/zagobank",
      category: "Back-end",
      image: "/images/api.png",
      technologies: ["PHP", "Laravel", "MySQL", "Docker"],
   },
];
export default function Home() {
   const fadeInUp = {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
   };

   return (
      <div className="flex flex-col min-h-screen">
         <Header />
         <main className="flex-grow max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Seção de boas-vindas */}
            <motion.section
               className="my-16 text-center"
               initial="hidden"
               animate="visible"
               variants={fadeInUp}
            >
               <h1 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                  Bem-vindo ao Meu Portfólio!
               </h1>
            </motion.section>

            {/* Seção Sobre Mim */}
            <motion.section
               className="my-8 flex flex-col items-center justify-start py-12 px-6 max-w-4xl mx-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-xl shadow-lg"
               style={{
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)",
               }}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, amount: 0.2 }}
               variants={fadeInUp}
            >
               <div className="flex justify-center w-full">
                  <Image
                     src="/images/richard.jpg"
                     alt="Foto de Richard Zago"
                     className="w-64 h-64 rounded-full object-cover border-4 border-white shadow-lg"
                  />
               </div>
               <div className="mt-6 text-center max-w-xl">
                  {/* Primeiro parágrafo com destaque */}
                  <p className="text-2xl font-extrabold leading-relaxed">
                     Olá, eu sou o{" "}
                     <span className="text-indigo-200">Richard Zago!</span>
                  </p>
                  {/* Descrição com animação de letras em sequência */}
                  <motion.p
                     className="text-lg leading-relaxed mt-4"
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{
                        delay: 0.5,
                        duration: 1.5,
                        ease: "easeInOut",
                     }}
                  >
                     Desenvolvedor Full Stack com foco em back-end. Com uma
                     formação sólida e experiência prática, busco criar soluções
                     eficientes e escaláveis para desafios no mundo do
                     desenvolvimento de software.
                  </motion.p>
                  {/* Botão "Saiba mais" */}
                  <Link
                     href="/about"
                     className="mt-6 inline-block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold text-base rounded-lg shadow-lg transform hover:scale-105 transition duration-300 px-6 py-3"
                  >
                     Saiba mais
                  </Link>
               </div>
            </motion.section>

            {/* Seção Projetos em destaque */}
            <motion.section
               className="my-16"
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, amount: 0.2 }}
               variants={fadeInUp}
            >
               <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text mb-8">
                  Projetos em Destaque!
               </h2>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects.map((project, index) => (
                     <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        link={project.link}
                        deploy={project.deploy}
                        category={project.category}
                        image={project.image}
                        technologies={project.technologies}
                     />
                  ))}
               </div>
            </motion.section>

            {/* Seção para Entrar em Contato */}
            <motion.section
               className="my-16 flex flex-col items-center text-center py-16 px-4"
               style={{
                  background: "linear-gradient(to right, #2d3748, #1a202c)",
                  backgroundImage:
                     "url('/images/pattern2.svg'), linear-gradient(to right, #2d3748, #1a202c)",
                  backgroundBlendMode: "overlay",
                  backgroundSize: "cover",
               }}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, amount: 0.2 }}
               variants={fadeInUp}
            >
               <h2 className="text-3xl font-bold text-white">
                  Entre em Contato
               </h2>
               <p className="text-lg text-gray-300 mt-4 max-w-2xl">
                  Tem interesse em trabalhar comigo ou quer tirar dúvidas? Fique
                  à vontade para entrar em contato. Estou sempre aberto a novas
                  oportunidades e colaborações!
               </p>
               <Link
                  href="/contact"
                  className="mt-6 px-6 py-3 bg-gradient-to-r from-teal-500 via-green-500 to-blue-500 text-white font-semibold text-lg rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
               >
                  Fale Comigo
               </Link>
            </motion.section>
         </main>
         <Footer />
      </div>
   );
}
