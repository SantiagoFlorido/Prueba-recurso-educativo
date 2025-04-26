import React from 'react';
import { useNavigate } from 'react-router-dom';
import useSound from 'use-sound';

const Creditos = () => {
  const navigate = useNavigate();
  const [playClick] = useSound(
    'https://res.cloudinary.com/dufzsv87k/video/upload/v1744909247/ClickSound.mp3',
    { volume: 1.0 }
  );

  const handleNavigationWithSound = () => {
    playClick();
    setTimeout(() => {
      navigate('/Principal');
    }, 200);
  };

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-white p-4 relative overflow-y-auto">
      {/* Contenedor principal con márgenes superior e inferior */}
      <div className="my-8 w-full flex justify-center items-center flex-grow">
        {/* Contenido de Créditos con márgenes y tamaño ajustable */}
        <div className="text-center bg-gray-100 p-6 md:p-8 rounded-lg shadow-lg max-w-2xl w-full mx-4 my-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gray-800">Créditos</h1>
          <div className="space-y-6 text-gray-700 text-left">
            {/* Financiador */}
            <div>
              <h2 className="text-xl md:text-2xl font-semibold mb-3 text-[#007B3E]">Financiador:</h2>
              <ul className="space-y-2">
                <li className="text-sm md:text-base">Universidad de Cundinamarca</li>
              </ul>
            </div>

            {/* Docentes */}
            <div>
              <h2 className="text-xl md:text-2xl font-semibold mb-3 text-[#007B3E]">Docentes:</h2>
              <ul className="space-y-2">
                <li className="text-sm md:text-base">Ana Esperanza Merchan Hernandez - anaesperanzamerchan@ucundinamarca.edu.co</li>
                <li className="text-sm md:text-base">Diego Orlando Méndez Pineda - dmendezp@ucundinamarca.edu.co</li>
                <li className="text-sm md:text-base">Jorge Enrique Quevedo Buitrago - jequevedo@ucundinamarca.edu.co</li>
                <li className="text-sm md:text-base">Eva Patricia Vasquez Gomez - evasquezgomez@ucundinamarca.edu.co</li>
              </ul>
            </div>

            {/* Desarrolladores (Estudiantes) */}
            <div>
              <h2 className="text-xl md:text-2xl font-semibold mb-3 text-[#007B3E]">Desarrolladores:</h2>
              <ul className="space-y-2">
                <li className="text-sm md:text-base">Cristian Mateo Velez Duran - cmvelez@ucundinamarca.edu.co</li>
                <li className="text-sm md:text-base">David Santiago Florido Ortiz - dflorido@ucundinamarca.edu.co</li>
              </ul>
            </div>

            {/* Autores originales de los talleres */}
            <div>
              <h2 className="text-xl md:text-2xl font-semibold mb-3 text-[#007B3E]">Autores originales de los talleres:</h2>
              <ul className="space-y-2">
                <li className="text-sm md:text-base">Nicole Alejandra Timara Beltran - ntimaran@ucundinamarca.edu.co</li>
                <li className="text-sm md:text-base">Ana Ximena Vanegas Mateus - axvanegas@ucundinamarca.edu.co</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Botón de Menú Principal - Siempre fijo */}
      <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8">
        <button
          onClick={handleNavigationWithSound}
          className="bg-[#007B3E] hover:bg-[#009e4f] text-white px-4 py-2 md:px-6 md:py-3 rounded-lg shadow-md transition duration-300 cursor-pointer text-sm md:text-base"
        >
          Menú Principal
        </button>
      </div>
    </div>
  );
};

export default Creditos;