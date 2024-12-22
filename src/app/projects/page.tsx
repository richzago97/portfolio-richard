"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import { useState } from "react";

export interface Project {
   title: string;
   description: string;
   link: string;
   category: string;
   image?: string | undefined;
   technologies: string[];
}
const projects: Project[] = [
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
      title: "Kenzie Hub",
      description:
         "O projeto foi criado pra ser um hub de portfólio de programadores da Kenzie, consumindo uma API existente.",
      link: "https://meuprojetofullstack.com",
      category: "Front-end",
      technologies: ["Typescript", "ReactJS"],
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
   {
      title: "Meu Projeto Fullstack",
      description: "Aplicação completa com Next.js e MongoDB.",
      link: "https://meuprojetofullstack.com",
      category: "Fullstack",
      technologies: ["Typescript"],
   },
];

export default function Projects() {
   const [selectedCategory, setSelectedCategory] = useState<string>("All");

   const filteredProjects =
      selectedCategory === "All"
         ? projects
         : projects.filter((project) => project.category === selectedCategory);

   return (
      <div className="flex flex-col min-h-screen">
         <Header />
         <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-center my-8">Projetos</h1>

            {/* Filtros de Categorias */}
            <div className="flex justify-center mb-8 space-x-4">
               {["All", "Front-end", "Back-end", "Fullstack"].map(
                  (category) => (
                     <button
                        key={category}
                        className={`px-4 py-2 rounded-full font-medium ${
                           selectedCategory === category
                              ? "bg-blue-500 text-white"
                              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        }`}
                        onClick={() => setSelectedCategory(category)}
                     >
                        {category}
                     </button>
                  )
               )}
            </div>

            {/* Lista de Projetos */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
               {filteredProjects.map((project, index) => (
                  <ProjectCard
                     key={index}
                     title={project.title}
                     description={project.description}
                     link={project.link}
                     category={project.category}
                     image={project.image}
                     technologies={project.technologies}
                  />
               ))}
            </div>
         </main>
         <Footer />
      </div>
   );
}
