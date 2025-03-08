import React from 'react';
import { useNavigate } from 'react-router-dom';

const Creditos = () => {
    const navigate = useNavigate();
  return (
    <div className="w-[1369px] h-[642px] flex flex-col justify-center items-center bg-white p-4 relative">
      {/* Contenido de Créditos */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Créditos</h1>
        <p className="text-gray-700 mb-2">Desarrollado por: [Tu Nombre o Equipo]</p>
        <p className="text-gray-700 mb-2">Diseño: [Nombre del Diseñador]</p>
        <p className="text-gray-700 mb-2">Ilustraciones: [Nombre del Ilustrador]</p>
        <p className="text-gray-700 mb-2">Música: [Nombre del Compositor]</p>
        <p className="text-gray-700 mb-2">Agradecimientos especiales a: [Nombre de Personas o Entidades]</p>
      </div>

      {/* Botón de Menú Principal */}
      <div className="absolute bottom-4 right-4">
        <button onClick={() => navigate('/Proyectos')} className="bg-green-500 text-white px-4 py-2 rounded">Menú Principal</button>
      </div>
    </div>
  );
};

export default Creditos;