import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Contribuidores from "./pages/Contribuidores";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <BrowserRouter>
      <div
        className={`min-h-screen transition-colors duration-300 ${
          darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
        }`}
      >
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home darkMode={darkMode} />} />
            <Route
              path="/contribuidores"
              element={<Contribuidores darkMode={darkMode} />}
            />
          </Routes>
        </main>

        <Footer darkMode={darkMode} />
      </div>
    </BrowserRouter>
  );
}

export default App;
