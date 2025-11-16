import React from "react";
import Header from "../components/Header"
import Footer from "../components/Footer"

const Home = ({darkMode}) => {
    return (
        <div
      className={`min-h-screen px-6 py-24 transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-gray-200" : "bg-gray-100 text-gray-800"
      }`}
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">

        {/* Logo */}
        <img
          src="/public/folha.png"
          alt="GreenOffice Logo"
          className="w-36 h-36 object-contain mb-8 drop-shadow-lg"
        />

        {/* Bem-vindo */}
        <h2
          className={`text-xl font-medium mb-3 ${
            darkMode ? "text-green-300" : "text-green-700"
          }`}
        >
          Bem-vindo ao futuro sustentável
        </h2>

        {/* Título */}
        <h1 className="text-5xl font-bold mb-6 tracking-wide">
          GreenOffice
        </h1>

        {/* Subtítulo */}
        <p
          className={`text-xl font-medium mb-10 ${
            darkMode ? "text-green-400" : "text-green-600"
          }`}
        >
          Tecnologia, consciência e inovação para transformar ambientes de trabalho
        </p>

        {/* Texto */}
        <p className="max-w-3xl text-lg leading-relaxed opacity-90">
          O GreenOffice é uma plataforma desenvolvida para tornar ambientes corporativos
          mais inteligentes e sustentáveis. Nossa solução utiliza sensores conectados,
          automação e análise de dados para reduzir desperdícios, otimizar recursos e
          incentivar hábitos responsáveis dentro das empresas.
          <br /><br />
          Além do monitoramento em tempo real, criamos um sistema gamificado que engaja
          colaboradores, promove desafios ecológicos e ajuda organizações a alcançarem
          metas ambientais de forma prática e eficiente.
          <br /><br />
          Juntos, construímos um espaço de trabalho mais verde, moderno e preparado
          para o futuro.
        </p>
      </div>
    </div>
    )
}

export default Home;