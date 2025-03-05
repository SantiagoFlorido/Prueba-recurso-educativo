import React from 'react';
import { useNavigate } from 'react-router-dom';

const Pagina2 = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white p-4 h-screen flex flex-col">
      {/* Título */}
      <h1 className="text-2xl font-bold text-center mb-6">Formas de conexión</h1>

      {/* Contenido principal */}
      <div className="flex-grow flex flex-col items-center justify-center">
        {/* Contenedor para las imágenes en fila */}
        <div className="flex space-x-4 mb-6">
          {/* Imagen de la izquierda */}
          <div className="bg-gray-100 p-4 rounded-lg flex-1">
            <img
              src="public/image/animaciones/ConexionAnimacion.gif" // Ruta de la animación plug and play
              alt="Conexión Plug and Play animación "
              className="w-full h-70 object-cover rounded-md"
            />
          </div>

          {/* Imagen de la derecha */}
          <div className="bg-gray-100 p-4 rounded-lg flex-1">
            <img
              src="public/image/animaciones/proyectofuncionando.gif" // Ruta de la animación proyecto funcionando
              alt="Proyecto funcionando video"
              className="w-full h-70 object-cover rounded-md"
            />
          </div>
        </div>

        {/* Texto descriptivo */}
        <p className="text-center text-lg mb-6">
          Conexión a dispositivos Plug and Play y un proyecto funcionando
        </p>

        {/* Referencias y patterns */}
        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="text-xl font-bold text-center mb-4">Referencias y patterns</h2>
          <p className="text-center text-sm">
            Aquí puedes agregar las referencias y patterns relacionados con la conexión Plug and Play.
          </p>
        </div>
      </div>

      {/* Pie de página */}
      <div className="mt-6 text-center">
        <p className="text-xs text-green-600">www.ucundinamarca.edu.co | Vigilada Mineducación</p>
      </div>
      {/* Botón "Siguiente" */}
      <button
        onClick={() => navigate('/Principal')}
        className="fixed bottom-2 right-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-green-700 transition-colors"
      >
        Siguiente
      </button>
      {/* Botón "Regresar" */}
      <button
        onClick={() => navigate('/')}
        className="fixed bottom-2 left-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-green-700 transition-colors"
      >
        Regresar
      </button>
    </div>
  );
};

export default Pagina2;