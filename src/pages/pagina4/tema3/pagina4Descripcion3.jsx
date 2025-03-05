import React from 'react';
import { useNavigate } from 'react-router-dom';

const Pagina4Descripcion3 = () => {
    const navigate = useNavigate();
  return (
    <div className="bg-white w-[1369px] h-[642px] p-8 flex flex-col">
      {/* Título centrado en la parte superior */}
      <h1 className="border text-3xl font-bold text-center mb-6">Tema 3 + Historia</h1>

      {/* Contenedor principal */}
      <div className="flex flex-1">
        {/* Contenedor izquierdo */}
        <div className="border w-1/2 pr-4">
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Descripción</h2>
            <ul className="list-disc pl-5">
              <li>Duración</li>
              <li>Materiales</li>
            </ul>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">
              Nivel de dificultad: <span className="text-blue-400">FACIL</span>
            </h2>
            <ul className="list-disc pl-5">
              <li>Objetivos</li>
              <li>Finalidades</li>
            </ul>
          </div>
        </div>

        {/* Contenedor derecho */}
        <div className="w-1/2 pl-4 flex flex-col">
          {/* Imagen, video y guion */}
          <div className="border flex-1 mb-4">
            <div className="bg-gray-200 h-full flex items-center justify-center">
              <p>Imagen, video y guion</p>
            </div>
          </div>

          {/* Botones en la parte inferior */}
          <div className="flex space-x-4">
            <button onClick={() => navigate('/Proyectos')} className="bg-green-600 text-white px-4 py-2 rounded shadow-lg hover:bg-green-700 transition-colors w-80">Regresar</button>
            <button onClick={() => navigate('/')} className="bg-green-600 text-white px-4 py-2 rounded shadow-lg hover:bg-green-700 transition-colors w-80">Iniciar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagina4Descripcion3;