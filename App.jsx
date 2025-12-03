// src/App.jsx

import React from 'react';
import Navbar from './components/Navbar'; 
import Footer from './components/Footer';

// IMPORTAÇÕES DOS COMPONENTES DAS SEÇÕES
import Hero from './components/Hero'; // <--- O componente com a imagem que você criou
import PortfolioGallery from './components/PortfolioGallery';
import SkillCard from './components/SkillCard';
// import SkillCard from './components/SkillCard'; // Não importado se não for usado diretamente aqui
// import { Import } from 'lucide-react'; // Removido, não é usado.

// --- Seção Sobre Mim ---
const About = () => (
    <section 
        id="sobre" 
        className="min-h-screen py-20 bg-gray-700 text-white p-4"
    >
        <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-extrabold mb-8 border-b-4 border-teal-500 pb-2">
                Sobre Mim
            </h2>
            <p className="text-lg leading-relaxed text-gray-300">
                Sou um desenvolvedor apaixonado por **tecnologia** e **inovação**, focado em criar soluções eficientes e escaláveis. 
                Minha jornada na área de TI é marcada pela busca constante por aprendizado e domínio de novas ferramentas, 
                com ênfase em desenvolvimento **Front-end** e **Back-end**.
            </p>
        </div>
    </section>
);

// --- Seção de Habilidades (Skills) ---
const Skills = () => (
    <section 
        id="skills" 
        className="min-h-screen py-20 bg-gray-800 text-white p-4"
    >
        <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-extrabold mb-12 border-b-4 border-teal-500 pb-2 text-center">
                Habilidades Técnicas
            </h2>
            
            {/* O componente SkillCard ou a Galeria de Habilidades*/}
            <div className="text-lg text-center text-gray-400">
                <SkillCard></SkillCard>
                (Aqui você adicionará seu componente de Cards de Habilidades)
            </div>
            
        </div>
    </section>
    
);

// --- Seção de Portfólio ---
const Portfolio = () => (
    <section 
        id="portfolio" 
        className="min-h-screen py-20 bg-gray-700 text-white p-4"
    >
        <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-extrabold mb-12 border-b-4 border-teal-500 pb-2 text-center">
                Portfólio
            </h2>
            
            {/* O componente PortfolioGallery deve ser renderizado diretamente */}
            <PortfolioGallery />
            
        </div>
    </section>
);

// --- Seção de Contato ---
const Contact = () => (
    <section 
        id="contato" 
        className="min-h-screen py-20 bg-gray-800 text-white p-4 flex items-center justify-center"
    >
        <div className="max-w-xl mx-auto text-center p-8 bg-gray-900 rounded-xl shadow-2xl shadow-teal-500/10">
            <h2 className="text-4xl font-extrabold mb-6 text-teal-400">
                Entre em Contato
            </h2>
            <p className="text-xl mb-8 text-gray-300">
                Estou disponível para novas oportunidades de trabalho ou projetos *freelance*.
            </p>
            <a 
                href="mailto:seuemail@exemplo.com" 
                className="inline-block mt-4 bg-teal-600 text-white text-lg font-bold py-3 px-8 rounded-full hover:bg-teal-500 transition duration-300 transform hover:scale-105 shadow-md"
            >
                Enviar E-mail
            </a>
        </div>
    </section>
);

// --- Componente Principal da Aplicação ---
function App() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-900">
            
            <Navbar /> 
            
            <main className="grow">
                {/* O Hero importado de './components/Hero' é renderizado aqui! */}
                <Hero />
                <About />
                <Skills />
                <Portfolio />
                <Contact />
                
            </main>
            
            <Footer />
        </div>
    );
}

export default App;