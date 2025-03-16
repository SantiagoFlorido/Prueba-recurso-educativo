import React from 'react';
import { useNavigate } from 'react-router-dom';

const Pagina3Proyectos = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white flex flex-col md:flex-row">
      {/* Rectángulo izquierdo con el texto "Proyectos" */}
      <div className="w-full md:w-1/4 p-4 md:fixed md:left-0 md:top-0 md:h-screen">
        <div className="border text-2xl font-bold w-full md:w-80 h-40 md:h-140 flex items-center justify-center bg-gray-200 rounded-lg">
          <h1>Proyectos</h1>
        </div>
      </div>

      {/* Contenedor de los temas con desplazamiento vertical */}
      <div className="w-full md:w-3/4 p-4 overflow-y-auto md:ml-[25%] pb-20 md:pb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center content-center">
          {/* Tema 1 */}
          <div onClick={() => navigate('/Tema1')} className="border rounded-lg overflow-hidden">
            <div className="h-10 flex items-center justify-center bg-gray-100">
              <h2 className="text-xl font-semibold">Taller 1: El viaje de Pedro</h2>
            </div>
            <div className="h-64 flex items-center justify-center">
              <img
                src="https://res.cloudinary.com/dufzsv87k/image/upload/v1741305069/mapa_igu9fc.webp"
                alt="Animación 1"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Tema 2 */}
          <div onClick={() => navigate('/Tema2')} className="border rounded-lg overflow-hidden">
            <div className="h-10 flex items-center justify-center bg-gray-100">
              <h2 className="text-xl font-semibold">Taller 2: Armando un Mbot</h2>
            </div>
            <div className="h-64 flex items-center justify-center">
              <img
                src="https://res.cloudinary.com/dufzsv87k/image/upload/v1741305069/piezas_nemtfi.webp"
                alt="Animación 2"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Tema 3 */}
          <div onClick={() => navigate('/Tema3')} className="border rounded-lg overflow-hidden">
            <div className="h-10 flex items-center justify-center bg-gray-100">
              <h2 className="text-xl font-semibold">Taller 3: Conectando un Mbot</h2>
            </div>
            <div className="h-64 flex items-center justify-center">
              <img
                src="https://res.cloudinary.com/dufzsv87k/image/upload/v1741305067/conectar_iv5sdj.webp"
                alt="Animación 3"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Tema 4 */}
          <div onClick={() => navigate('/Tema4')} className="border rounded-lg overflow-hidden">
            <div className="h-10 flex items-center justify-center bg-gray-100">
              <h2 className="text-xl font-semibold">Taller 4: Sensor de ultrasonido de nuestro Mbot</h2>
            </div>
            <div className="h-64 flex items-center justify-center">
              <img
                src="https://res.cloudinary.com/dufzsv87k/image/upload/v1741305070/sensor4_yxeq9c.webp"
                alt="Animación 4"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Tema 5 */}
          <div onClick={() => navigate('/Tema5')} className="border rounded-lg overflow-hidden">
            <div className="h-10 flex items-center justify-center bg-gray-100">
              <h2 className="text-xl font-semibold">Taller 5: Seguidor de linea de nuestro Mbot</h2>
            </div>
            <div className="h-64 flex items-center justify-center">
              <img
                src="https://res.cloudinary.com/dufzsv87k/image/upload/v1741305068/linea5_ixd3hm.webp"
                alt="Animación 5"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Tema 6: Ícono de agregar (comentado) 
          <div
            onClick={() => navigate('/AgregarTaller')}
            className="border rounded-lg overflow-hidden hover:bg-green-100 hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            <div className="h-10 flex items-center justify-center bg-gray-100">
              <h2 className="text-xl font-semibold">Agregar Taller</h2>
            </div>
            <div className="h-64 flex items-center justify-center bg-gray-100 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-green-400 hover:text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
          </div>*/}
        </div>
      </div>

      {/* Botón "Regresar" */}
      <button
        onClick={() => navigate('/Principal')}
        className="fixed bottom-4 left-4 right-4 md:left-4 md:right-auto bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-green-700 transition-colors w-[calc(100%-2rem)] md:w-80 mx-auto max-w-[384px]"
      >
        Regresar
      </button>
    </div>
  );
};

export default Pagina3Proyectos;