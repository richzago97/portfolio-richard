"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import { useState } from "react";

export interface Project {
   title: string;
   description: string;
   link: string;
   deploy?: string | undefined;
   category: string;
   image?: string | undefined;
   technologies: string[];
}
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
      technologies: ["Javascript", "Node.JS", "PostgreSQL", "Docker"],
   },
   {
      title: "Usuários",
      description:
         "Gerenciamento de usuários com CRUD (Create, Read, Update, Delete). Containerizado com Docker para fácil implantação e escalabilidade.",
      link: "https://github.com/richzago97/crud-typeorm-s4-14",
      category: "Back-end",
      image: "/images/api.png",
      technologies: ["Typescript", "Node.JS", "PostgreSQL", "Docker"],
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
      title: "Transaction Hub",
      description:
         "Implementa um sistema básico de gerenciamento de usuários e transações, utilizando PostgreSQL como banco de dados.",
      link: "https://github.com/richzago97/transaction-hub",
      category: "Back-end",
      image: "/images/api.png",
      technologies: ["Java", "Spring Boot", "PostgreSQL"],
   },
   {
      title: "Movies",
      description:
         "O desafio proposto envolve a criação de um sistema de autenticação JWT e uma API CRUD para um catálogo de filmes.",
      link: "https://github.com/richzago97/movies-auth-nestjs",
      category: "Back-end",
      image: "/images/api.png",
      technologies: ["Nest.JS", "Redis", "Docker", "PostgreSQL"],
   },
   {
      title: "Kenzie Buster",
      description:
         "Uma aplicação para gerenciar usuários, filmes e compras, incluindo autenticação e permissionamento de rotas para diferentes tipos de usuário.",
      link: "https://github.com/richzago97/kenzie-Buster",
      category: "Back-end",
      image: "/images/api.png",
      technologies: ["Python", "Django"],
   },
   {
      title: "Conversor CNAB",
      description:
         "O projeto Conversor CNAB é um desafio proposto pela Kenzie Academy Brasil, que tem como objetivo parsear arquivos de texto CNAB, normalizar as informações e armazená-las em um banco de dados relacional",
      link: "https://github.com/richzago97/conversor-cnab",
      category: "Back-end",
      image: "/images/api.png",
      technologies: ["Python", "Django"],
   },
   {
      title: "Kimoveis",
      description:
         "Um serviço de back-end responsável por gerenciar uma imobiliária",
      link: "https://github.com/richzago97/kimoveis-typeorm-s5-11",
      category: "Back-end",
      image: "/images/api.png",
      technologies: ["Typescript", "Node.JS", "Docker", "PostgreSQL"],
   },
   {
      title: "Usuários TypeORM",
      description:
         "Um serviço de back-end responsável por gerenciar um CRUD (Create, Read, Update, Delete) de usuário utilizando o TypeORM. Containerizado com Docker para fácil implantação e escalabilidade.",
      link: "https://github.com/richzago97/crud-typeorm-s4-14",
      category: "Back-end",
      image: "/images/api.png",
      technologies: ["Typescript", "Node.JS", "PostgreSQL", "Docker"],
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
                     deploy={project.deploy}
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
