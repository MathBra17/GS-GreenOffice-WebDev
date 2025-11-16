import React from 'react';

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className={`sticky top-0 z-50 transition-colors duration-300 ${
      darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
    } border-b shadow-sm`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img src="/public/folha.png" alt="Logo GreenOffice" className="w-10 h-10 md:w-12 md:h-12 object-contain"/>
            <h1 className="text-2xl font-bold">GreenOffice</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-colors ${
                darkMode 
                  ? 'bg-gray-700 hover:bg-gray-600 text-yellow-300' 
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
              }`}
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
            
            <button className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
              darkMode 
                ? 'bg-green-600 hover:bg-green-700 text-white' 
                : 'bg-green-500 hover:bg-green-600 text-white'
            }`}>
              Entrar
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;