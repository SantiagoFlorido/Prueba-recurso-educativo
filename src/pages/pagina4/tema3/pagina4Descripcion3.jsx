import React from 'react';
import { useNavigate } from 'react-router-dom';

const Pagina4Descripcion3 = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white w-full h-screen p-4 md:p-8 flex flex-col">
      {/* Título centrado en la parte superior */}
      <h1 className="border text-2xl md:text-3xl font-bold text-center mb-4 md:mb-6 rounded-lg">
        Tema 3: Programar el Movimiento Básico del mBot con las Flechas del Teclado
      </h1>

      {/* Contenedor principal */}
      <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
        {/* Contenedor izquierdo (contenido del taller con scroll) */}
        <div className="border w-full md:w-1/2 pr-0 md:pr-4 mb-4 md:mb-0 rounded-lg p-6 bg-white shadow-md overflow-y-auto">
          {/* Sección de Descripción */}
          <div className="mb-4 md:mb-6">
            <h2 className="text-lg md:text-xl mb-2 font-bold">Descripción</h2>
            <p className="text-gray-700 mb-4">
            Este taller enseña a los estudiantes de 6to grado a programar el mBot para que se mueva utilizando las flechas del teclado. A través de actividades prácticas, los niños aprenderán a conectar el mBot a la computadora, programar movimientos básicos (adelante, atrás, izquierda, derecha) y ajustar el programa para mejorar el control del robot. El taller culmina con un desafío práctico en el que los estudiantes aplican lo aprendido para guiar el mBot a través de una pista o circuito.
            </p>
            <ul className="list-disc pl-5 text-gray-700">
              <li><strong>Duración:</strong> 80 minutos (1 hora y 20 minutos).</li>
              
              <li>
                <strong>Materiales:</strong>
                <ul className="list-disc pl-5">
                  <li>Computadoras con acceso a Internet.</li>
                  <li>mBlock instalado en cada computadora.</li>
                  <li>mBot ensamblado y conectado a la computadora (vía USB o Bluetooth).</li>
                  <li>Espacio despejado para crear una pista o circuito.</li>
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
                  <li>Enseñar a los estudiantes a conectar el mBot a la computadora y configurarlo en mBlock.</li>
                  <li>Programar el mBot para que se mueva en diferentes direcciones utilizando las flechas del teclado.</li>
                  <li>Realizar pruebas y ajustes en el programa para mejorar el control del mBot.</li>
                  <li>Aplicar lo aprendido en un desafío práctico que involucre el movimiento del mBot en una pista.</li>
                </ul>
              </li>
              <li>
                <strong>Finalidades:</strong>
                <ul className="list-disc pl-5">
                  <li>Desarrollar habilidades básicas de programación y control de robots.</li>
                  <li>Fomentar el pensamiento lógico y la resolución de problemas mediante la programación.</li>
                  <li>Integrar conceptos de tecnología y robótica en actividades prácticas.</li>
                  <li>Preparar a los estudiantes para programar funciones más avanzadas del mBot en futuras sesiones.</li>
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
                - Exploración de principios físicos básicos, como el movimiento y la dirección.
              </p>
              <p className="text-gray-700">
                - Uso de sensores y motores para interactuar con el entorno.
              </p>
            </div>
            {/* Habilidad: Tecnología */}
            <div className="mb-4">
              <h3 className="text-md font-semibold text-blue-600">Tecnología</h3>
              <p className="text-gray-700">
                - Uso de mBlock para programar el mBot.
              </p>
              <p className="text-gray-700">
                - Conexión del mBot a la computadora (USB o Bluetooth).
              </p>
              <p className="text-gray-700">
                - Control del mBot mediante las flechas del teclado.
              </p>
            </div>
            {/* Habilidad: Ingeniería */}
            <div className="mb-4">
              <h3 className="text-md font-semibold text-blue-600">Ingeniería</h3>
              <p className="text-gray-700">
                - Diseño y ajuste de un programa para controlar el movimiento del mBot.
              </p>
              <p className="text-gray-700">
                - Resolución de problemas durante la programación y las pruebas.
              </p>
            </div>
            {/* Habilidad: Matemáticas */}
            <div className="mb-4">
              <h3 className="text-md font-semibold text-blue-600">Matemáticas</h3>
              <p className="text-gray-700">
                - Uso de secuencias lógicas para programar movimientos.
              </p>
              <p className="text-gray-700">
                - Aplicación de conceptos de dirección y distancia en el movimiento del mBot.
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
                src=""
                alt="Imagen, video y guion"
                className="w-full h-full object-cover rounded-md"
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
              onClick={() => navigate('/Contenido3')}
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

export default Pagina4Descripcion3;