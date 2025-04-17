import React from 'react';
import { useNavigate } from 'react-router-dom';
import useSound from 'use-sound';

const Pagina4Descripcion4 = () => {
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
        Tema 4: Conectar Mbot al celular
      </h1>

      {/* Contenedor principal */}
      <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
        {/* Contenedor izquierdo (contenido del taller con scroll) */}
        <div className="border w-full md:w-1/2 pr-0 md:pr-4 mb-4 md:mb-0 rounded-lg p-6 bg-white shadow-md overflow-y-auto">
          {/* Sección de Descripción */}
          <div className="mb-4 md:mb-6">
            <h2 className="text-lg md:text-xl mb-2 font-bold">Descripción</h2>
            <p className="text-gray-700 mb-4">
              Este taller enseña a los estudiantes de 6to grado a conectar y controlar el mBot mediante la aplicación MakeBlock en dispositivos móviles. Los participantes aprenderán a emparejar el robot vía Bluetooth, explorarán las funciones básicas de la aplicación y completarán un circuito práctico en el aula. El taller combina conceptos de programación básica con interacción física con el robot.
            </p>
            <ul className="list-disc pl-5 text-gray-700">
              <li><strong>Duración:</strong> 60 minutos (1 hora).</li>
              
              <li>
                <strong>Materiales:</strong>
                <ul className="list-disc pl-5">
                  <li>Dispositivos móviles con la aplicación MakeBlock instalada</li>
                  <li>mBot ensamblado y cargado</li>
                  <li>Espacio despejado para el circuito de práctica</li>
                  <li>Conexión Bluetooth habilitada en todos los dispositivos</li>
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
                  <li>Enseñar a emparejar el mBot con dispositivos móviles vía Bluetooth</li>
                  <li>Explorar la interfaz de la aplicación MakeBlock (menú principal, secciones de movimiento, trayectorias y piano)</li>
                  <li>Realizar conexión exitosa siguiendo los pasos: selección de icono Bluetooth y acercamiento al robot</li>
                  <li>Completar un circuito práctico dentro del aula usando los controles básicos</li>
                </ul>
              </li>
              <li>
                <strong>Finalidades:</strong>
                <ul className="list-disc pl-5">
                  <li>Familiarizar a los estudiantes con el control remoto de robots mediante apps móviles</li>
                  <li>Desarrollar habilidades de conexión inalámbrica y configuración básica</li>
                  <li>Promover la exploración autónoma de las funciones de la aplicación</li>
                  <li>Preparar para sesiones más avanzadas de programación por bloques</li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Sección de Resumen de habilidades STEM aplicadas */}
          <div className="mb-4 md:mb-6">
            <h2 className="text-lg md:text-xl font-semibold mb-2">Resumen de habilidades STEM aplicadas: </h2>
            {/* Habilidad: Tecnología */}
            <div className="mb-4">
              <h3 className="text-md font-semibold text-blue-600">Tecnología</h3>
              <p className="text-gray-700">
                - Configuración y uso de conexión Bluetooth entre dispositivos
              </p>
              <p className="text-gray-700">
                - Navegación por la interfaz de la aplicación MakeBlock (menú principal, controles de movimiento)
              </p>
              <p className="text-gray-700">
                - Control remoto del mBot mediante interfaz táctil
              </p>
            </div>
            
            {/* Habilidad: Ingeniería */}
            <div className="mb-4">
              <h3 className="text-md font-semibold text-blue-600">Ingeniería</h3>
              <p className="text-gray-700">
                - Solución de problemas de conexión Bluetooth
              </p>
              <p className="text-gray-700">
                - Ajuste de parámetros básicos para control preciso del robot
              </p>
            </div>
            
            {/* Habilidad: Matemáticas */}
            <div className="mb-4">
              <h3 className="text-md font-semibold text-blue-600">Matemáticas</h3>
              <p className="text-gray-700">
                - Estimación de distancias para el circuito práctico
              </p>
              <p className="text-gray-700">
                - Cálculo de trayectorias básicas mediante controles direccionales
              </p>
            </div>
            
            {/* Pasos de conexión destacados */}
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h3 className="text-md font-semibold text-blue-700 mb-2">Pasos clave para conectar el mBot:</h3>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Abrir la aplicación MakeBlock y seleccionar el icono de Bluetooth</li>
                <li>Encender el mBot y colocarlo cerca del dispositivo móvil (máximo 1 metro)</li>
                <li>Seleccionar el mBot en la lista de dispositivos disponibles</li>
                <li>Esperar la confirmación de conexión en la aplicación</li>
                <li>Explorar las secciones de: Movimiento, Trayectorias y Piano</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Contenedor derecho (imagen, video y botones) */}
        <div className="w-full md:w-1/2 pl-0 md:pl-4 flex flex-col">
          {/* Imagen o video */}
          <div className="border flex-1 mb-4 rounded-lg overflow-hidden">
            <div className="bg-gray-200 h-48 md:h-full flex items-center justify-center rounded-lg">
              <img
                src="" /*imagen*/
                alt="Imagen, video y guion"
                className="w-full h-full object-cover rounded-md"
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
              onClick={() => handleNavigationWithSound('/Contenido4')}
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

export default Pagina4Descripcion4;