import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
   return (
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white">
         <Header />
         <main className="flex-grow max-w-4xl mx-auto px-6 sm:px-8 lg:px-10 py-12">
            <h1 className="text-4xl font-extrabold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
               Sobre Mim
            </h1>
            {/* Imagem do perfil */}
            <div className="flex justify-center mb-8">
               <img
                  src="/images/richard.jpg"
                  alt="Foto de Richard Zago"
                  className="w-40 h-40 rounded-full border-4 border-blue-500 shadow-lg transform transition duration-500 hover:scale-105"
               />
            </div>
            {/* Texto sobre mim */}
            <p className="text-lg leading-8 text-justify bg-gray-800 bg-opacity-70 p-6 rounded-lg shadow-lg border border-gray-700">
               Me chamo Richard Zago, sou desenvolvedor Full Stack. Iniciei
               minha trajetória em 2022 com um curso intensivo de
               desenvolvimento web, totalizando 2.000 horas, com duração de 1
               ano. Desde então, venho me aprimorando continuamente nas
               principais tecnologias do mercado. Trabalho com linguagens e
               frameworks modernos como{" "}
               <span className="text-blue-400 font-semibold">TypeScript</span>,{" "}
               <span className="text-blue-400 font-semibold">Node.js</span> e{" "}
               <span className="text-blue-400 font-semibold">Next.js</span>,
               aplicados em projetos que demonstram minha capacidade de
               desenvolver soluções eficientes e escaláveis. Durante minha
               formação na Kenzie Academy, atuei como Monitor de Back-End,
               utilizando Node.js para auxiliar alunos no desenvolvimento de
               aplicações, corrigir entregas e oferecer suporte técnico. Essa
               experiência não apenas fortaleceu minhas habilidades técnicas,
               mas também consolidou meu gosto pelo cargo e pela colaboração em
               equipe. Além disso, possuo experiência com outras linguagens e
               frameworks, como{" "}
               <span className="text-green-400 font-semibold">Python</span> com{" "}
               <span className="text-green-400 font-semibold">Django</span>,{" "}
               <span className="text-green-400 font-semibold">Laravel</span> e{" "}
               <span className="text-green-400 font-semibold">Java</span>,
               desenvolvendo projetos que ampliaram minha visão sobre diferentes
               stacks e abordagens no desenvolvimento de software. Em março de
               2024, darei início à minha graduação em{" "}
               <span className="text-yellow-400 font-semibold">
                  Análise e Desenvolvimento de Sistemas
               </span>{" "}
               pela UNISC, fortalecendo ainda mais meu conhecimento técnico e
               acadêmico. Com um portfólio que reflete minha dedicação e
               constante evolução, estou pronto para contribuir com projetos
               inovadores, entregando qualidade e excelência técnica.
            </p>
         </main>
         <Footer />
      </div>
   );
}
