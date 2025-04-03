import React from 'react';
import { useNavigate } from 'react-router-dom';

const Pagina4Descripcion2 = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white w-full h-screen p-4 md:p-8 flex flex-col">
      {/* Título centrado en la parte superior */}
      <h1 className="border text-2xl md:text-3xl font-bold text-center mb-4 md:mb-6 rounded-lg">
        Tema 2: Ensamblado del mBot
      </h1>

      {/* Contenedor principal */}
      <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
        {/* Contenedor izquierdo (contenido del taller con scroll) */}
        <div className="border w-full md:w-1/2 pr-0 md:pr-4 mb-4 md:mb-0 rounded-lg p-6 bg-white shadow-md overflow-y-auto">
          {/* Sección de Descripción */}
          <div className="mb-4 md:mb-6">
            <h2 className="text-lg md:text-xl mb-2 font-bold">Descripción</h2>
            <p className="text-gray-700 mb-4">
              Este taller enseña a los estudiantes de 6to grado a ensamblar el robot mBot, familiarizándolos con sus componentes y su funcionamiento básico. Los niños trabajarán en grupos para armar el mBot siguiendo instrucciones paso a paso, conectar sensores y componentes electrónicos, y realizar pruebas básicas para verificar su correcto funcionamiento.
            </p>
            <ul className="list-disc pl-5 text-gray-700">
              <li><strong>Duración:</strong> 80 minutos (1 hora y 20 minutos).</li>
              
              <li>
                <strong>Materiales:</strong>
                <ul className="list-disc pl-5">
                  <li>Kits de mBot (uno por cada grupo de 2-3 niños)</li>
                  <li>Destornilladores y herramientas necesarias para el ensamblaje</li>
                  <li>Manual de instrucciones del mBot</li>
                  <li>Computadoras con mBlock instalado</li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Sección de Nivel de Dificultad, Objetivos y Finalidades */}
          <div className="mb-4 md:mb-6">
            <h2 className="text-lg md:text-xl font-semibold mb-2">
              Nivel de dificultad: <span className="text-blue-400">FÁCIL</span>
            </h2>
            <ul className="list-disc pl-5 text-gray-700">
              <li>
                <strong>Objetivos:</strong>
                <ul className="list-disc pl-5">
                  <li>Enseñar a los estudiantes a ensamblar el mBot siguiendo instrucciones paso a paso</li>
                  <li>Familiarizar a los estudiantes con los componentes del mBot (chasis, motores, sensores, etc.) y su función</li>
                  <li>Introducir a los estudiantes en la conexión y configuración de componentes electrónicos</li>
                  <li>Realizar pruebas básicas para verificar el correcto funcionamiento del mBot</li>
                </ul>
              </li>
              <li>
                <strong>Finalidades:</strong>
                <ul className="list-disc pl-5">
                  <li>Desarrollar habilidades prácticas de ensamblaje y conexión de componentes electrónicos</li>
                  <li>Fomentar el trabajo en equipo y la resolución de problemas durante el ensamblaje</li>
                  <li>Preparar a los estudiantes para programar y controlar el mBot en futuras sesiones</li>
                  <li>Promover la comprensión de cómo la tecnología y la ingeniería se aplican en la creación de robots</li>
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
                - Exploración de principios físicos básicos, como el movimiento y la transmisión de energía
              </p>
              <p className="text-gray-700">
                - Comprensión del funcionamiento de sensores electrónicos básicos
              </p>
            </div>
            {/* Habilidad: Tecnología */}
            <div className="mb-4">
              <h3 className="text-md font-semibold text-blue-600">Tecnología</h3>
              <p className="text-gray-700">
                - Uso de herramientas tecnológicas para el ensamblaje robótico
              </p>
              <p className="text-gray-700">
                - Conexión de componentes electrónicos y configuración de sensores
              </p>
            </div>
            {/* Habilidad: Ingeniería */}
            <div className="mb-4">
              <h3 className="text-md font-semibold text-blue-600">Ingeniería</h3>
              <p className="text-gray-700">
                - Ensamblaje del mBot siguiendo un proceso estructurado
              </p>
              <p className="text-gray-700">
                - Resolución de problemas durante el montaje y la verificación del funcionamiento
              </p>
            </div>
            {/* Habilidad: Matemáticas */}
            <div className="mb-4">
              <h3 className="text-md font-semibold text-blue-600">Matemáticas</h3>
              <p className="text-gray-700">
                - Seguimiento de instrucciones paso a paso (secuencia lógica)
              </p>
              <p className="text-gray-700">
                - Organización espacial de componentes durante el ensamblaje
              </p>
            </div>
          </div>
        </div>

        {/* Contenedor derecho (imagen, video y botones) */}
        <div className="w-full md:w-1/2 pl-0 md:pl-4 flex flex-col">
          {/* Imagen o video */}
          <div className="border flex-1 mb-4 rounded-lg overflow-hidden">
            <div className=" h-48 md:h-full flex items-center justify-center rounded-lg p-4">
              <img
                src="https://res.cloudinary.com/dufzsv87k/image/upload/v1743642227/taller2slide1_dot4ii.png"
                alt="Imagen, video y guion"
                className="w-full h-auto max-h-[300px] md:max-h-[400px] object-fill rounded-md"
              />
            </div>
          </div>

          {/* Botones en la parte inferior */}
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <button
              onClick={() => navigate('/Proyectos')}
              className="bg-green-600 text-white px-4 py-2 rounded shadow-lg hover:bg-green-700 transition-colors w-full md:w-80 cursor-pointer"
            >
              Regresar
            </button>
            <button
              onClick={() => navigate('/Contenido2')}
              className="bg-green-600 text-white px-4 py-2 rounded shadow-lg hover:bg-green-700 transition-colors w-full md:w-80 cursor-pointer"
            >
              Iniciar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagina4Descripcion2;