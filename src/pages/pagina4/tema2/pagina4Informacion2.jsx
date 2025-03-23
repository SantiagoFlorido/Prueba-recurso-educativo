import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Pagina4Informacion2 = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);

  // Datos para cada slide (imagen y texto)
  const slides = [
    {
      id: 1,
      image: "", // Imagen del kit de mBot
      text: "En este taller, aprenderemos a ensamblar el mBot, un robot educativo. Conoceremos sus componentes y las herramientas necesarias para construirlo.",
    },
    {
      id: 2,
      image: "", // Imagen de componentes del mBot
      text: "Exploraremos los componentes del mBot, como el chasis, las ruedas, los motores y los sensores. Aprenderemos la función de cada uno y cómo se conectan.",
    },
    {
      id: 3,
      image: "", // Imagen del ensamblado del chasis
      text: "Seguiremos las instrucciones para ensamblar el chasis y fijar las ruedas. Aseguraremos que los motores estén correctamente montados.",
    },
    {
      id: 4,
      image: "", // Imagen de instalación de sensores
      text: "Instalaremos los sensores, como el seguidor de línea y el sensor de ultrasonido, en sus posiciones correctas. Conectaremos los cables a la placa controladora.",
    },
    {
      id: 5,
      image: "", // Imagen de conexión de componentes
      text: "Conectaremos los motores y los sensores a la placa controladora. Aprenderemos la importancia de cada conexión para el funcionamiento del mBot.",
    },
    {
      id: 6,
      image: "", // Imagen de prueba del mBot
      text: "Verificaremos que el mBot esté correctamente ensamblado. Conectaremos el robot a la computadora y realizaremos una prueba básica para asegurarnos de que todo funcione.",
    },
    {
      id: 7,
      image: "", // Imagen de la aplicación móvil
      text: "Aprenderemos a conectar el mBot a la aplicación móvil MakeBlock. Exploraremos funciones como el control de movimiento, la creación de trayectorias y más.",
    },
    {
      id: 8,
      image: "", // Imagen de actividad práctica
      text: "En esta actividad, usaremos la aplicación móvil para guiar al mBot a través de un circuito. Aplicaremos todo lo aprendido sobre ensamblado y programación.",
    },
    {
      id: 9,
      image: "", // Imagen de evaluación y cierre
      text: "Revisaremos los mBots ensamblados y discutiremos cómo aplicamos los conceptos de ingeniería y tecnología. Destacaremos la importancia del trabajo en equipo y la resolución de problemas.",
    },
  ];

  // Función para manejar el cambio de slide
  const handleCircleClick = (index) => {
    setActiveIndex(index);
  };

  // Función para ir al slide anterior (no retrocede más allá del primer slide)
  const handlePrevSlide = () => {
    if (activeIndex > 0) {
      setActiveIndex((prevIndex) => prevIndex - 1);
    }
  };

  // Función para ir al siguiente slide (no avanza más allá del último slide)
  const handleNextSlide = () => {
    if (activeIndex < slides.length - 1) {
      setActiveIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row p-4 bg-white gap-4 relative">
      {/* Columna izquierda */}
      <div className="w-full md:w-1/2 flex flex-col gap-4">
        {/* Introducción arriba a la izquierda */}
        <div className="border h-16 flex justify-center items-center rounded-md">
          <h2 className="text-2xl font-bold">Introducción</h2>
        </div>

        {/* Texto debajo de Introducción, centrado en la columna izquierda */}
        <div className="border flex-1 flex justify-center items-center rounded-md p-4 overflow-y-auto max-h-[400px] md:max-h-[480px]">
          <p className="text-gray-700 text-center">{slides[activeIndex].text}</p>
        </div>
      </div>

      {/* Columna derecha con la imagen */}
      <div className="w-full md:w-1/2 border flex justify-center items-center rounded-md p-4 max-h-[400px] md:max-h-[560px]">
        {/* Imagen */}
        <img
          src={slides[activeIndex].image} // Imagen correspondiente al slide activo
          alt={`Imagen ${activeIndex + 1}`}
          className="w-full h-auto max-h-[300px] md:max-h-[400px] object-cover rounded-md"
        />
      </div>

      {/* Botón de volver */}
      <button
        onClick={() => navigate('/Tema2')}
        className="fixed md:absolute bottom-4 left-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
      >
        Volver
      </button>

      {/* Botón de créditos */}
      <button
        onClick={() => navigate('/Creditos')}
        className="fixed md:absolute bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
      >
        Créditos
      </button>

      {/* Navegación: Círculos en PC y flechas en móvil */}
      <div className="fixed md:absolute bottom-4 left-1/2 transform -translate-x-1/2 flex justify-center items-center gap-4">
        {/* Flecha izquierda (solo en móvil) */}
        <button
          onClick={handlePrevSlide}
          className={`md:hidden px-4 py-2 rounded transition-colors ${
            activeIndex === 0
              ? 'bg-gray-300 cursor-not-allowed' // Deshabilitado en el primer slide
              : 'bg-green-500 hover:bg-green-700' // Habilitado en otros slides
          } text-white`}
        >
          ←
        </button>

        {/* Círculos de navegación (solo en PC) */}
        <div className="hidden md:flex">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => handleCircleClick(index)}
              className={`w-4 h-4 rounded-full mx-1 hover:bg-gray-400 transition-colors ${
                index === activeIndex ? 'bg-green-500' : 'bg-gray-300'
              }`}
            ></button>
          ))}
        </div>

        {/* Flecha derecha (solo en móvil) */}
        <button
          onClick={handleNextSlide}
          className={`md:hidden px-4 py-2 rounded transition-colors left-[40%] transform -translate-x-1/4 ${
            activeIndex === slides.length - 1
              ? 'bg-gray-300 cursor-not-allowed' // Deshabilitado en el último slide
              : 'bg-green-500 hover:bg-green-700' // Habilitado en otros slides
          } text-white`}
        >
          →
        </button>
      </div>
    </div>
  );
};

export default Pagina4Informacion2;