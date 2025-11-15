import React, { useState } from 'react';
import Header from './components/Header';
import ProfessionalGrid from './components/ProfessionalGrid';
import ProfessionalModal from './components/ProfessionalModal';
import SearchFilters from './components/SearchFilters';
import { professionalsData } from './data/professionalsData';

function App() {
  const [professionals, setProfessionals] = useState(professionalsData);
  const [selectedProfessional, setSelectedProfessional] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    area: '',
    city: '',
    technology: ''
  });

  const filteredProfessionals = professionals.filter(professional => {
    const matchesSearch = !searchTerm || 
      professional.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      professional.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
      professional.skills.some(skill => 
        skill.toLowerCase().includes(searchTerm.toLowerCase())
      );

    const matchesArea = !filters.area || professional.area === filters.area;
    const matchesCity = !filters.city || professional.city === filters.city;
    const matchesTech = !filters.technology || 
      professional.technologies.includes(filters.technology);

    return matchesSearch && matchesArea && matchesCity && matchesTech;
  });

  const handleProfessionalClick = (professional) => {
    setSelectedProfessional(professional);
    setIsModalOpen(true);
  };

  const handleRecommend = (professionalId) => {
    console.log(`Recomendando profissional ${professionalId}`);
    // Lógica de recomendação
  };

  const handleSendMessage = (professionalId) => {
    console.log(`Enviando mensagem para ${professionalId}`);
    // Lógica de mensagem
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Futuro do Trabalho
          </h1>
          <p className="text-xl opacity-80">
            Conecte-se com os melhores talentos do mercado
          </p>
        </div>

        <SearchFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filters={filters}
          setFilters={setFilters}
          professionals={professionals}
          darkMode={darkMode}
        />

        <ProfessionalGrid
          professionals={filteredProfessionals}
          onProfessionalClick={handleProfessionalClick}
          darkMode={darkMode}
        />

        {isModalOpen && selectedProfessional && (
          <ProfessionalModal
            professional={selectedProfessional}
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onRecommend={handleRecommend}
            onSendMessage={handleSendMessage}
            darkMode={darkMode}
          />
        )}
      </main>
    </div>
  );
}

export default App;