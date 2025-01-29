interface ProjectCardProps {
   title: string;
   description: string;
   link: string;
   deploy?: string;
   category: string;
   image: string | undefined;
   technologies: string[];
}

export default function ProjectCard({
   title,
   description,
   link,
   deploy,
   category,
   image,
   technologies,
}: ProjectCardProps) {
   return (
      <div className="border rounded-lg shadow-md p-4 bg-slate-300 hover:shadow-lg transition-shadow flex flex-col justify-between h-[500px] max-w-[400px]">
         {/* Categoria do projeto */}
         <div className="mb-3">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r from-green-400 to-blue-500 text-white shadow-sm">
               {category}
            </span>
         </div>
         {/* Imagem do projeto */}
         <div className="mb-4">
            {image && (
               <img
                  src={image}
                  alt={`${title} image`}
                  className="w-full max-h-[200px] object-contain rounded-t-md"
               />
            )}
         </div>
         {/* Título do projeto */}
         <div className="mb-2">
            <h3 className="text-xl font-bold text-gray-800 text-center">
               {title}
            </h3>
         </div>
         {/* Descrição do projeto */}
         <div className="mb-4 overflow-hidden">
            <p className="text-gray-700 text-sm text-justify leading-relaxed line-clamp-4">
               {description}
            </p>
         </div>
         {/* Tecnologias do projeto */}
         <div className="mb-3 flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
               <span
                  key={index}
                  className="text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-sm"
               >
                  {tech}
               </span>
            ))}
         </div>
         {/* Links: Ver Mais e Deploy */}
         <div className="mt-auto flex justify-center gap-2">
            <a
               href={link}
               className="bg-blue-500 text-white text-sm font-semibold px-4 py-2 rounded-md hover:bg-blue-700 transition-colors shadow-md"
               target="_blank"
               rel="noopener noreferrer"
            >
               Ver Mais
            </a>
            {deploy && (
               <a
                  href={deploy}
                  className="bg-green-500 text-white text-sm font-semibold px-4 py-2 rounded-md hover:bg-green-700 transition-colors shadow-md"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  Deploy
               </a>
            )}
         </div>
      </div>
   );
}
