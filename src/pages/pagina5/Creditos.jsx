import React from 'react';
import { useNavigate } from 'react-router-dom';

const Creditos = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-white p-4 relative">
      {/* Contenido de Créditos */}
      <div className="text-center bg-gray p-8 rounded-lg shadow-lg max-w-2xl w-full mx-4">
        <h1 className="text-5xl font-bold mb-6 text-gray-800">Créditos</h1>
        <div className="space-y-4 text-gray-700">
          <p className="text-lg">
            <span className="font-semibold">Desarrollado por:</span> [Tu Nombre o Equipo]
          </p>
          <p className="text-lg">
            <span className="font-semibold">Diseño:</span> [Nombre del Diseñador]
          </p>
          <p className="text-lg">
            <span className="font-semibold">Ilustraciones:</span> [Nombre del Ilustrador]
          </p>
          <p className="text-lg">
            <span className="font-semibold">Música:</span> [Nombre del Compositor]
          </p>
          <p className="text-lg">
            <span className="font-semibold">Agradecimientos especiales a:</span> [Nombre de Personas o Entidades]
          </p>
        </div>
      </div>

      {/* Botón de Menú Principal */}
      <div className="absolute bottom-8 right-8">
        <button
          onClick={() => navigate('/Principal')}
          className="bg-[#007B3E] hover:bg-[#009e4f] text-white px-6 py-3 rounded-lg shadow-md transition duration-300 cursor-pointer"
        >
          Menú Principal
        </button>
      </div>
    </div>
  );
};

export default Creditos;