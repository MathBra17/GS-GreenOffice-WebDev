import React, { useState } from "react";
import ProfessionalGrid from "../components/ProfessionalGrid";
import ProfessionalModal from "../components/ProfessionalModal";
import SearchFilters from "../components/SearchFilters";
import { professionalsData } from "../data/professionalsData";

const Contribuidores = ({ darkMode }) => {
  const [professionals, setProfessionals] = useState(professionalsData);
  const [selectedProfessional, setSelectedProfessional] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    area: "",
    city: "",
    technology: "",
  });

  const filteredProfessionals = professionals.filter((professional) => {
    const matchesSearch =
      !searchTerm ||
      professional.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      professional.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
      professional.skills.some((skill) =>
        skill.toLowerCase().includes(searchTerm.toLowerCase())
      );

    const matchesArea = !filters.area || professional.area === filters.area;
    const matchesCity = !filters.city || professional.city === filters.city;
    const matchesTech =
      !filters.technology ||
      professional.technologies.includes(filters.technology);

    return matchesSearch && matchesArea && matchesCity && matchesTech;
  });

  return (
    <>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Futuro do Trabalho</h1>
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
        onProfessionalClick={(p) => {
          setSelectedProfessional(p);
          setIsModalOpen(true);
        }}
        darkMode={darkMode}
      />

      {isModalOpen && selectedProfessional && (
        <ProfessionalModal
          professional={selectedProfessional}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          darkMode={darkMode}
        />
      )}
    </>
  );
};

export default Contribuidores;
