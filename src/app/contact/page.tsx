"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Contact = () => {
   const [submitted, setSubmitted] = useState(false);

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const form = e.target as HTMLFormElement;

      try {
         const response = await fetch(form.action, {
            method: form.method,
            headers: {
               Accept: "application/json",
            },
            body: new FormData(form),
         });

         if (response.ok) {
            setSubmitted(true);
            alert("Erro ao enviar a mensagem. Tente novamente.");
         }
      } catch {
         alert("Erro ao conectar ao servidor.");
      }
   };

   return (
      <div className="min-h-screen flex flex-col">
         <Header />
         <div className="flex-grow flex flex-col items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-800 to-indigo-900 text-white p-4">
            <h1 className="text-4xl font-bold mb-6 text-center">
               Entre em Contato
            </h1>
            {submitted ? (
               <div className="bg-green-500 p-6 rounded shadow-lg text-center">
                  <p className="text-xl font-bold">
                     Mensagem enviada com sucesso!
                  </p>
                  <p className="mt-2">
                     Irei entrar em contato o mais breve possível.
                  </p>
               </div>
            ) : (
               <form
                  action="https://formsubmit.co/005eae8b016e3ea3b9446e4e3b440f5d"
                  method="POST"
                  onSubmit={handleSubmit}
                  className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md space-y-4"
               >
                  <input
                     type="hidden"
                     name="_next"
                     value="http://localhost:3000/contact"
                  />
                  <input type="hidden" name="_captcha" value="false" />
                  <div>
                     <label
                        className="block text-sm font-bold mb-2"
                        htmlFor="name"
                     >
                        Nome
                     </label>
                     <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Seu Nome"
                        required
                        className="w-full p-3 bg-gray-700 text-white rounded focus:ring focus:ring-indigo-500"
                     />
                  </div>
                  <div>
                     <label
                        className="block text-sm font-bold mb-2"
                        htmlFor="email"
                     >
                        E-mail
                     </label>
                     <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Seu E-mail"
                        required
                        className="w-full p-3 bg-gray-700 text-white rounded focus:ring focus:ring-indigo-500"
                     />
                  </div>
                  <div>
                     <label
                        className="block text-sm font-bold mb-2"
                        htmlFor="message"
                     >
                        Mensagem
                     </label>
                     <textarea
                        id="message"
                        name="message"
                        placeholder="Sua Mensagem"
                        rows={4}
                        required
                        className="w-full p-3 bg-gray-700 text-white rounded focus:ring focus:ring-indigo-500"
                     ></textarea>
                  </div>
                  <button
                     type="submit"
                     className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded"
                  >
                     Enviar
                  </button>
               </form>
            )}
         </div>
         <Footer />
      </div>
   );
};

export default Contact;
