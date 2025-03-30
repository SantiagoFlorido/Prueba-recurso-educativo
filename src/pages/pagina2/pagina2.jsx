import React from 'react';
import { useNavigate } from 'react-router-dom';

const Pagina2 = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white p-4 h-screen flex flex-col">
      {/* Título */}
      <h1 className="text-xl md:text-2xl font-bold text-center mb-4 md:mb-6">Formas de conexión</h1>

      {/* Contenido principal */}
      <div className="flex-grow flex flex-col items-center justify-center">
        {/* Contenedor para las imágenes en fila */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-4 md:mb-6 w-full max-w-4xl px-4">
          {/* Imagen de la izquierda */}
          <div className="bg-gray-100 p-4 rounded-lg flex-1">
            <img
              src="https://res.cloudinary.com/dufzsv87k/image/upload/v1741304025/ConexionAnimacion_njz2gw.gif" // Ruta de la animación plug and play
              alt="Conexión Plug and Play animación"
              className="w-full h-40 md:h-70 object-cover rounded-md"
            />
          </div>

          {/* Imagen de la derecha */}
          <div className="bg-gray-100 p-4 rounded-lg flex-1">
            <img
              src="https://res.cloudinary.com/dufzsv87k/image/upload/v1741305003/proyectofuncionando_fyeqnh.gif" // Ruta de la animación proyecto funcionando
              alt="Proyecto funcionando video"
              className="w-full h-40 md:h-70 object-cover rounded-md"
            />
          </div>
        </div>

        {/* Texto descriptivo */}
        <p className="text-center text-base md:text-lg mb-4 md:mb-2 px-4">
          Conexión a dispositivos Plug and Play y un proyecto funcionando
        </p>

        {/* Referencias y patterns */}
        <div className="bg-gray-100 p-4 rounded-lg w-full max-w-4xl mx-4 mb-4 md:mb-8">
          <h2 className="text-lg md:text-xl font-bold text-center mb-0 md:mb-0">Referencias y patterns</h2>
          <p className="text-center text-xs md:text-sm">
            Aquí puedes agregar las referencias y patterns relacionados con la conexión Plug and Play. 
          </p>
        </div>
      </div>

      {/* Botón "Regresar" */}
      <button
        onClick={() => navigate('/Principal')}
        className="cursor-pointer mt-0 md:mt-0 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-green-700 transition-colors md:mx-auto md:w-200"
      >
        Regresar
      </button>

      {/* Pie de página */}
      <div className="mt-4 md:mt-6 w-full">
        <p className="text-xs text-green-600 text-center pr-4 md:pr-0">
          www.ucundinamarca.edu.co | Vigilada Mineducación
        </p>
      </div>
    </div>
  );
};

export default Pagina2;