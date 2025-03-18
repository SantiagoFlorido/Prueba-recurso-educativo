import React from 'react';
import { useNavigate } from 'react-router-dom';

const Pagina4Descripcion3 = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white w-full h-screen p-4 md:p-8 flex flex-col">
      {/* Título centrado en la parte superior */}
      <h1 className="border text-2xl md:text-3xl font-bold text-center mb-4 md:mb-6 rounded-lg">Tema 3 + Historia</h1>

      {/* Contenedor principal */}
      <div className="flex flex-col md:flex-row flex-1 ">
        {/* Contenedor izquierdo */}
        <div className="border w-full md:w-1/2 pr-0 md:pr-4 mb-4 md:mb-0 rounded-lg">
          <div className="mb-4 md:mb-6">
            <h2 className="text-lg md:text-xl font-semibold mb-2">Descripción</h2>
            <ul className="list-disc pl-5">
              <li>Duración</li>
              <li>Materiales</li>
            </ul>
          </div>

          <div className="mb-4 md:mb-6">
            <h2 className="text-lg md:text-xl font-semibold mb-2">
              Nivel de dificultad: <span className="text-orange-400">MEDIA</span>
            </h2>
            <ul className="list-disc pl-5">
              <li>Objetivos</li>
              <li>Finalidades</li>
            </ul>
          </div>
        </div>

        {/* Contenedor derecho */}
        <div className="w-full md:w-1/2 pl-0 md:pl-4 flex flex-col ">
          {/* Imagen, video y guion */}
          <div className="border flex-1 mb-4 rounded-lg">
            <div className="bg-gray-200 h-48 md:h-full flex items-center justify-center rounded-lg">
              <img
                src="url_imagen_1" // Ruta de la animación proyecto funcionando
                alt="Imagen, video y guion"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          </div>

          {/* Botones en la parte inferior */}
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <button
              onClick={() => navigate('/Proyectos')}
              className="bg-green-600 text-white px-4 py-2 rounded shadow-lg hover:bg-green-700 transition-colors w-full md:w-80"
            >
              Regresar
            </button>
            <button
              onClick={() => navigate('/Contenido3')}
              className="bg-green-600 text-white px-4 py-2 rounded shadow-lg hover:bg-green-700 transition-colors w-full md:w-80"
            >
              Iniciar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagina4Descripcion3;