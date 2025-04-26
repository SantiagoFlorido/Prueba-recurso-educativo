import React from 'react';
import { useNavigate } from 'react-router-dom';
import useSound from 'use-sound';

const Pagina2 = () => {
  const navigate = useNavigate();

  // Importa el sonido (usa la URL proporcionada)
  const [playClick] = useSound(
    'https://res.cloudinary.com/dufzsv87k/video/upload/v1744909247/ClickSound.mp3',
    { volume: 1.0 }
  );

  // Función combinada para navegación + sonido
  const handleNavigationWithSound = () => {
    playClick();
    setTimeout(() => {
      navigate('/Principal');
    }, 200); // Pequeño delay para que suene antes de navegar
  };

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
              src="https://res.cloudinary.com/dufzsv87k/image/upload/v1741304025/ConexionAnimacion_njz2gw.gif"
              alt="Conexión Plug and Play animación"
              className="w-full h-40 md:h-70 object-cover rounded-md"
            />
          </div>

          {/* Imagen de la derecha */}
          <div className="bg-gray-100 p-4 rounded-lg flex-1">
            <img
              src="https://res.cloudinary.com/dufzsv87k/image/upload/v1741305003/proyectofuncionando_fyeqnh.gif"
              alt="Proyecto funcionando video"
              className="w-full h-40 md:h-70 object-cover rounded-md"
            />
          </div>
        </div>

        {/* Texto descriptivo mejorado */}
        <div className="text-center text-base md:text-lg mb-4 md:mb-2 px-4 space-y-2">
          <p className="font-medium">Conexión del mBot:</p>
          <p>• <span className="font-semibold">USB (PC):</span> Conecta el cable USB al puerto del mBot y al computador para programación directa</p>
          <p>• <span className="font-semibold">Bluetooth (Mobile):</span> Empareja mediante la app mBlock usando el módulo Bluetooth integrado</p>
          <p>• Ambos métodos permiten cargar programas y controlar el robot en tiempo real</p>
        </div>

        {/* Referencias y patterns */}
        <div className="bg-gray-100 p-4 rounded-lg w-full max-w-4xl mx-4 mb-4 md:mb-8">
          <h2 className="text-lg md:text-xl font-bold text-center mb-2">Referencias</h2>
          <div className="text-center text-sm">
            <p>Cristian Mateo Velez Duran - cmvelez@ucundinamarca.edu.co</p>
            <p>David Santiago Florido Ortiz - dflorido@ucundinamarca.edu.co</p>
          </div>
        </div>
      </div>

      {/* Botón "Regresar" */}
      <button
        onClick={handleNavigationWithSound}
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