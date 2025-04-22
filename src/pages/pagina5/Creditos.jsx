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
    <div className="w-full h-screen flex flex-col justify-center items-center bg-white p-4 relative">
      {/* Contenido de Créditos */}
      <div className="text-center bg-gray-100 p-8 rounded-lg shadow-lg max-w-2xl w-full mx-4">
        <h1 className="text-5xl font-bold mb-6 text-gray-800">Créditos</h1>
        <div className="space-y-6 text-gray-700 text-left">
          {/* Docentes */}
          <div>
            <h2 className="text-2xl font-semibold mb-3 text-[#007B3E]">Docentes:</h2>
            <ul className="space-y-2">
              <li>Ana Esperanza Merchan Hernandez - anaesperanzamerchan@ucundinamarca.edu.co</li>
              <li>Diego Orlando Méndez Pineda - dmendezp@ucundinamarca.edu.co</li>
              <li>Jorge Enrique Quevedo Buitrago - jequevedo@ucundinamarca.edu.co</li>
              <li>Eva Patricia Vasquez Gomez - evasquezgomez@ucundinamarca.edu.co</li>
            </ul>
          </div>

          {/* Desarrolladores (Estudiantes) */}
          <div>
            <h2 className="text-2xl font-semibold mb-3 text-[#007B3E]">Desarrolladores:</h2>
            <ul className="space-y-2">
              <li>Cristian Mateo Velez Duran - cmvelez@ucundinamarca.edu.co</li>
              <li>David Santiago Florido Ortiz - dflorido@ucundinamarca.edu.co</li>
            </ul>
          </div>

          {/* Autores originales de los talleres */}
          <div>
            <h2 className="text-2xl font-semibold mb-3 text-[#007B3E]">Autores originales de los talleres:</h2>
            <ul className="space-y-2">
              <li>Nicole Alejandra Timara Beltran - ntimaran@ucundinamarca.edu.co</li>
              <li>Ana Ximena Vanegas Mateus - axvanegas@ucundinamarca.edu.co</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Botón de Menú Principal */}
      <div className="absolute bottom-8 right-8">
        <button
          onClick={handleNavigationWithSound}
          className="bg-[#007B3E] hover:bg-[#009e4f] text-white px-6 py-3 rounded-lg shadow-md transition duration-300 cursor-pointer"
        >
          Menú Principal
        </button>
      </div>
    </div>
  );
};

export default Creditos;