import React from 'react';
import { useNavigate } from 'react-router-dom';
import useSound from 'use-sound';

const Pagina4Descripcion7 = () => {
  const navigate = useNavigate();
  const [playClick] = useSound(
    'https://res.cloudinary.com/dufzsv87k/video/upload/v1744909247/ClickSound.mp3',
    { volume: 1.0 }
  );

  const handleNavigationWithSound = (route) => {
    playClick();
    setTimeout(() => {
      navigate(route);
    }, 200);
  };

  return (
    <div className="bg-white w-full h-screen p-4 md:p-8 flex flex-col">
      {/* Título centrado en la parte superior */}
      <h1 className="border text-2xl md:text-3xl font-bold text-center mb-4 md:mb-6 rounded-lg">
        Taller 7: Programación del Sensor de Ultrasonido para Seguimiento de Objetos
      </h1>

      {/* Contenedor principal */}
      <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
        {/* Contenedor izquierdo (contenido del taller con scroll) */}
        <div className="border w-full md:w-1/2 pr-0 md:pr-4 mb-4 md:mb-0 rounded-lg p-6 bg-white shadow-md overflow-y-auto">
          {/* Sección de Descripción */}
          <div className="mb-4 md:mb-6">
            <h2 className="text-lg md:text-xl mb-2 font-bold">Descripción</h2>
            <p className="text-gray-700 mb-4">
              Este taller enseña a los estudiantes a programar el sensor de ultrasonido del mBot para que siga un objeto en movimiento, simulando que el robot sigue la mano de una persona. Los estudiantes aprenderán a configurar el sensor, programar las condiciones de seguimiento y ajustar el comportamiento del robot según la distancia detectada.
            </p>
            <ul className="list-disc pl-5 text-gray-700">
              <li><strong>Duración:</strong> 75 minutos (1 hora y 15 minutos).</li>
              
              <li>
                <strong>Materiales:</strong>
                <ul className="list-disc pl-5">
                  <li>Kit mBot ensamblado</li>
                  <li>Computadoras con mBlock instalado</li>
                  <li>Cables USB para conectar el mBot a la computadora</li>
                  <li>Fuente de energía para el mBot (baterías o cable de alimentación)</li>
                  <li>Objetos como una mano, pelota u otros para que el mBot siga</li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Sección de Nivel de Dificultad, Objetivos y Finalidades */}
          <div className="mb-4 md:mb-6">
            <h2 className="text-lg md:text-xl font-semibold mb-2">
              Nivel de dificultad: <span className="text-red-500">DIFÍCIL</span>
            </h2>
            <ul className="list-disc pl-5 text-gray-700">
              <li>
                <strong>Objetivos:</strong>
                <ul className="list-disc pl-5">
                  <li>Configurar correctamente el sensor de ultrasonido en el mBot.</li>
                  <li>Programar condiciones basadas en la distancia detectada por el sensor.</li>
                  <li>Crear un comportamiento de seguimiento fluido del objeto.</li>
                  <li>Ajustar los parámetros de distancia y velocidad para optimizar el seguimiento.</li>
                </ul>
              </li>
              <li>
                <strong>Finalidades:</strong>
                <ul className="list-disc pl-5">
                  <li>Comprender el funcionamiento del sensor de ultrasonido y sus aplicaciones.</li>
                  <li>Desarrollar habilidades de programación condicional con sensores.</li>
                  <li>Fomentar la resolución de problemas mediante ajustes prácticos.</li>
                  <li>Preparar a los estudiantes para programar interacciones más complejas entre sensores y actuadores.</li>
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
               - Principios del ultrasonido y cómo se mide la distancia mediante ondas sonoras.
              </p>
            </div>
            {/* Habilidad: Tecnología */}
            <div className="mb-4">
              <h3 className="text-md font-semibold text-blue-600">Tecnología</h3>
              <p className="text-gray-700">
               - Programación del sensor de ultrasonido en mBlock.
              </p>
              <p className="text-gray-700">
               - Configuración de hardware del mBot.
              </p>
            </div>
            {/* Habilidad: Ingeniería */}
            <div className="mb-4">
              <h3 className="text-md font-semibold text-blue-600">Ingeniería</h3>
              <p className="text-gray-700">
               - Diseño de un sistema de seguimiento basado en sensores.
              </p>
              <p className="text-gray-700">
               - Optimización del comportamiento del robot mediante ajustes.
              </p>
            </div>
            {/* Habilidad: Matemáticas */}
            <div className="mb-4">
              <h3 className="text-md font-semibold text-blue-600">Matemáticas</h3>
              <p className="text-gray-700">
               - Trabajo con rangos de distancia (menos de 10cm, 10-30cm, más de 30cm).
              </p>
              <p className="text-gray-700">
                - Ajuste de parámetros numéricos para optimizar el seguimiento.
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
                src="https://res.cloudinary.com/dufzsv87k/image/upload/v1743644079/taller7slide1_b0jzxi.png"
                alt="Imagen, video y guion"
                className="w-full h-full object-fill rounded-md"
              />
            </div>
          </div>

          {/* Botones en la parte inferior */}
          {/* Botones en la parte inferior */}
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 w-full">
            <button
              onClick={() => handleNavigationWithSound('/Proyectos')}
              className="bg-[#007B3E] text-white px-4 py-2 rounded shadow-lg hover:bg-[#009e4f] transition-colors w-full flex-1 cursor-pointer"
            >
              Regresar
            </button>
            <button
              onClick={() => handleNavigationWithSound('/Contenido7')}
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

export default Pagina4Descripcion7;