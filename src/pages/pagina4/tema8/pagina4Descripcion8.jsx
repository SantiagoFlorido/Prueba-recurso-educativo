import React from 'react';
import { useNavigate } from 'react-router-dom';
import useSound from 'use-sound';

const Pagina4Descripcion8 = () => {
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
        Tema 8: 
      </h1>

      {/* Contenedor principal */}
      <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
        {/* Contenedor izquierdo (contenido del taller con scroll) */}
        <div className="border w-full md:w-1/2 pr-0 md:pr-4 mb-4 md:mb-0 rounded-lg p-6 bg-white shadow-md overflow-y-auto">
          {/* Sección de Descripción */}
          <div className="mb-4 md:mb-6">
            <h2 className="text-lg md:text-xl mb-2 font-bold">Descripción</h2>
            <p className="text-gray-700 mb-4">
            Este taller enseña a los estudiantes de 6to grado a programar el mBot para seguir una línea utilizando sus sensores de infrarrojos. A través de actividades prácticas, los niños aprenderán a configurar los sensores, programar el comportamiento del mBot para seguir una pista y optimizar su rendimiento. El taller culmina con una actividad práctica en la que los estudiantes ponen a prueba sus programas en una pista con curvas y bifurcaciones.
            </p>
            <ul className="list-disc pl-5 text-gray-700">
              <li><strong>Duración:</strong> 85 minutos (1 hora y 25 minutos).</li>
              
              <li>
                <strong>Materiales:</strong>
                <ul className="list-disc pl-5">
                  <li>Computadoras con mBlock instalado.</li>
                  <li>mBot con sensores de infrarrojos conectados.</li>
                  <li>Cable USB o conexión Bluetooth para conectar el mBot a la computadora.</li>
                  <li>Cinta adhesiva negra para crear la pista.</li>
                  <li>Superficie blanca o clara para colocar la pista.</li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Sección de Nivel de Dificultad, Objetivos y Finalidades */}
          <div className="mb-4 md:mb-6">
            <h2 className="text-lg md:text-xl font-semibold mb-2">
              Nivel de dificultad: <span className="text-red-500">DIFICIL (esta informacion hay que cambiar)</span>
            </h2>
            <ul className="list-disc pl-5 text-gray-700">
              <li>
                <strong>Objetivos:</strong>
                <ul className="list-disc pl-5">
                  <li>Enseñar a los estudiantes a configurar y utilizar los sensores de infrarrojos del mBot.</li>
                  <li>Programar el mBot para seguir una línea negra en el suelo.</li>
                  <li>Optimizar el programa para mejorar el rendimiento del mBot en la pista.</li>
                  <li>Aplicar lo aprendido en una actividad práctica que simule un entorno con una pista de seguimiento.</li>
                </ul>
              </li>
              <li>
                <strong>Finalidades:</strong>
                <ul className="list-disc pl-5">
                  <li>Desarrollar habilidades avanzadas de programación y uso de sensores en robótica.</li>
                  <li>Fomentar el pensamiento lógico y la resolución de problemas mediante la programación condicional.</li>
                  <li>Integrar conceptos de tecnología y robótica en actividades prácticas.</li>
                  <li>Preparar a los estudiantes para programar funciones más complejas del mBot en futuras sesiones.</li>
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
               - Exploración de principios físicos, como la detección de luz infrarroja y su reflexión en superficies.
              </p>
              <p className="text-gray-700">
                - Uso de sensores de infrarrojos para interactuar con el entorno.
              </p>
            </div>
            {/* Habilidad: Tecnología */}
            <div className="mb-4">
              <h3 className="text-md font-semibold text-blue-600">Tecnología</h3>
              <p className="text-gray-700">
               - Uso de mBlock para programar el mBot.
              </p>
              <p className="text-gray-700">
               - Configuración y uso de los sensores de infrarrojos.
              </p>
              <p className="text-gray-700">
               - Conexión del mBot a la computadora (USB o Bluetooth).
              </p>
            </div>
            {/* Habilidad: Ingeniería */}
            <div className="mb-4">
              <h3 className="text-md font-semibold text-blue-600">Ingeniería</h3>
              <p className="text-gray-700">
               - Diseño de un programa que toma decisiones basadas en la detección de la línea.
              </p>
              <p className="text-gray-700">
               - Resolución de problemas durante la programación y las pruebas.
              </p>
            </div>
            {/* Habilidad: Matemáticas */}
            <div className="mb-4">
              <h3 className="text-md font-semibold text-blue-600">Matemáticas</h3>
              <p className="text-gray-700">
               - Uso de condiciones lógicas (si... entonces) para programar comportamientos.
              </p>
              <p className="text-gray-700">
                - Aplicación de conceptos de dirección y movimiento en la programación.
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
                src="https://res.cloudinary.com/dufzsv87k/image/upload/v1743644552/taller8slide1_y62yir.png"
                alt="Imagen, video y guion"
                className="w-full h-full object-fill rounded-md"
              />
            </div>
          </div>

          {/* Botones en la parte inferior */}
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <button
              onClick={() => handleNavigationWithSound('/Proyectos')}
              className="bg-[#007B3E] text-white px-4 py-2 rounded shadow-lg hover:bg-[#009e4f] transition-colors w-full md:w-80 cursor-pointer"
            >
              Regresar
            </button>
            <button
              onClick={() => handleNavigationWithSound('/Contenido8')}
              className="bg-[#007B3E] text-white px-4 py-2 rounded shadow-lg hover:bg-[#009e4f] transition-colors w-full md:w-80 cursor-pointer"
            >
              Iniciar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagina4Descripcion8;