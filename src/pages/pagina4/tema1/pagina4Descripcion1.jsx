import React from 'react';
import { useNavigate } from 'react-router-dom';
import useSound from 'use-sound';

const Pagina4Descripcion1 = () => {
  const navigate = useNavigate();
  const [playClick] = useSound(
    'https://res.cloudinary.com/dufzsv87k/video/upload/v1744909247/ClickSound.mp3',
    { volume: 1.0 }
  );

  const handleNavigationWithSound = (path) => {
    playClick();
    setTimeout(() => {
      navigate(path);
    }, 200);
  };

  return (
    <div className="bg-white w-full h-screen p-4 md:p-8 flex flex-col">
      {/* Título centrado en la parte superior */}
      <h1 className="border text-2xl md:text-3xl font-bold text-center mb-4 md:mb-6 rounded-lg">
        Taller 1: Introducción a app 
      </h1>

      {/* Contenedor principal */}
      <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
        {/* Contenedor izquierdo (contenido del taller con scroll) */}
        <div className="border w-full md:w-1/2 pr-0 md:pr-4 mb-4 md:mb-0 rounded-lg p-6 bg-white shadow-md overflow-y-auto">
          {/* Sección de Descripción */}
          <div className="mb-4 md:mb-6">
            <h2 className="text-lg md:text-xl mb-2 font-bold">Descripción</h2>
            <p className="text-gray-700 mb-4">
              Este taller introduce a los estudiantes de 6to grado a la programación utilizando la aplicación mBlock. A través de actividades prácticas, los niños aprenderán a ubicar objetos en un espacio bidimensional utilizando coordenadas (X, Y), construir ángulos y clasificar polígonos. El taller culmina con una actividad práctica en la que los estudiantes programarán el movimiento de un panda siguiendo una historia, aplicando los conceptos aprendidos.
            </p>
            <ul className="list-disc pl-5 text-gray-700">
              <li><strong>Duración:</strong> 60 minutos (1 hora).</li>
              
              <li>
                <strong>Materiales:</strong>
                <ul className="list-disc pl-5">
                  <li>Computadoras con mBlock instalado.</li>
                  <li>Guía de trabajo impresa o digital.</li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Sección de Nivel de Dificultad, Objetivos y Finalidades */}
          <div className="mb-4 md:mb-6">
            <h2 className="text-lg md:text-xl font-semibold mb-2">
              Nivel de dificultad: <span className="text-blue-400">FÁCIL.</span>
            </h2>
            <ul className="list-disc pl-5 text-gray-700">
              <li>
                <strong>Objetivos:</strong>
                <ul className="list-disc pl-5">
                  <li>Familiarizar a los estudiantes con la interfaz de mBlock y sus funcionalidades básicas.</li>
                  <li>Enseñar a los estudiantes a ubicar objetos en un espacio bidimensional utilizando coordenadas (X, Y).</li>
                  <li>Introducir conceptos de ángulos y polígonos a través de la programación.</li>
                  <li>Fomentar la creatividad y el trabajo en equipo mediante la resolución de problemas prácticos.</li>
                </ul>
              </li>
              <li>
                <strong>Finalidades:</strong>
                <ul className="list-disc pl-5">
                  <li>Desarrollar habilidades básicas de programación en los estudiantes.</li>
                  <li>Promover el pensamiento lógico y la resolución de problemas.</li>
                  <li>Integrar conceptos STEM (Ciencia, Tecnología, Ingeniería y Matemáticas) en actividades cotidianas.</li>
                  <li>Preparar a los estudiantes para programar el mBot en futuras sesiones.</li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Sección de Resumen de habilidades STEM aplicadas */}
          <div className="mb-4 md:mb-6">
            <h2 className="text-lg md:text-xl font-semibold mb-2">Resumen de habilidades STEM aplicadas: </h2>
            {/* Habilidad: Ciencia */}
            <div className="mb-4">
              <h3 className="text-md font-semibold text-blue-600">Ciencia</h3>
              <p className="text-gray-700">
                Exploración de movimiento, dirección y rotación de objetos en un espacio bidimensional.
              </p>
            </div>
            {/* Habilidad: Tecnología */}
            <div className="mb-4">
              <h3 className="text-md font-semibold text-blue-600">Tecnología</h3>
              <p className="text-gray-700">
                Uso de mBlock para programar y controlar el movimiento del panda.
              </p>
            </div>
            {/* Habilidad: Ingeniería */}
            <div className="mb-4">
              <h3 className="text-md font-semibold text-blue-600">Ingeniería</h3>
              <p className="text-gray-700">
                Diseño de secuencias de comandos y resolución de problemas para crear trayectorias.
              </p>
            </div>
            {/* Habilidad: Matemáticas */}
            <div className="mb-4">
              <h3 className="text-md font-semibold text-blue-600">Matemáticas</h3>
              <p className="text-gray-700">
                Uso de coordenadas (X, Y), ángulos y construcción de polígonos mediante programación.
              </p>
            </div>
          </div>
        </div>

        {/* Contenedor derecho (imagen, video y botones) */}
        <div className="w-full md:w-1/2 pl-0 md:pl-4 flex flex-col">
          {/* Imagen o video */}
          <div className="border flex-1 mb-4 rounded-lg overflow-hidden">
            <div className="bg-gray-200 h-48 md:h-full flex items-center justify-center rounded-lg">
              <img
                src="https://res.cloudinary.com/dufzsv87k/image/upload/v1743639636/taller1slide1.png"
                alt="Imagen, video y guion"
                className="w-full h-full object-fill rounded-md"
              />
            </div>
          </div>

          {/* Botones en la parte inferior */}
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 w-full">
            <button
              onClick={() => handleNavigationWithSound('/Proyectos')}
              className="bg-[#007B3E] text-white px-4 py-2 rounded shadow-lg hover:bg-[#009e4f] transition-colors w-full flex-1 cursor-pointer"
            >
              Regresar
            </button>
            <button
              onClick={() => handleNavigationWithSound('/Contenido1')}
              className="bg-[#007B3E] text-white px-4 py-2 rounded shadow-lg hover:bg-[#009e4f] transition-colors w-full flex-1 cursor-pointer"
            >
              Iniciar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagina4Descripcion1;