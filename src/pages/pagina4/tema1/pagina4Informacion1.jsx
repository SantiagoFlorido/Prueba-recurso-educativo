import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Pagina4Informacion1 = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);

  // Datos para cada slide (imagen y texto)
  const slides = [
    {
      id: 1,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743284865/Imagenes%20Recurso%20Educativo/Taller%201%20slide%20desarrollo/pioz3atazeencxrep6qh.png",
      text: "En este taller, aprenderemos a programar utilizando la aplicación mBlock junto con Pedro un panda. Conoceremos sus componentes y las herramientas necesarias.",
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743284780/Imagenes%20Recurso%20Educativo/Taller%201%20slide%20desarrollo/e0z38tbpuqmnhs9krikm.png",
      text: "Para empezar deberemos tener mblock instalado en nuestra computadora para que Pedro nos pueda enseñar a utilizarla",
    },
    {
      id: 3,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743284780/Imagenes%20Recurso%20Educativo/Taller%201%20slide%20desarrollo/zbwsi3wh7eojkzwrooa8.png",
      text: "Pon atencion a Pedro, nos esta enseñando una parte fundamental de nuestra aplicacion mblock, el area de bloques donde estaran cada uno de los bloques para aprender a programar",
    },
    {
      id: 4,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743284779/Imagenes%20Recurso%20Educativo/Taller%201%20slide%20desarrollo/vq7hcqu9ccqvnvhr10hv.png",
      text: "Pedro nos esta hablando, observa como nos indica el escenario donde encontraremos un panda el cual se vera afectado por cada una de nuestras acciones que le indicaremos con los bloques mas adelante",
    },
    {
      id: 5,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743284780/Imagenes%20Recurso%20Educativo/Taller%201%20slide%20desarrollo/l0dfty3wvc4yji564szt.png",
      text: "Pedro ahora nos esta enseñando los objetos, en este lugar se encontraran cada uno de los personajes que queramos utilizar para que se vean en el escenario y sean programados por nosotros, aqui podemos agregar algunos que ya nos incluye mblock, o en caso de que tengamos alguno descargado nosotros lo podamos agregar,",
    },
    {
      id: 6,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743284780/Imagenes%20Recurso%20Educativo/Taller%201%20slide%20desarrollo/viybov9zoxsubaldzplk.png",
      text: "Observa como Pedro nos esta indicando como usar el area de script donde pondremos cada uno de nuestros bloques arrastrandolos a esta area y asi mismo indicarle a nustro personaje que accion debe ejecutar",
    },
    {
      id: 7,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743284779/Imagenes%20Recurso%20Educativo/Taller%201%20slide%20desarrollo/rujhrqzlzfipdyqujkjm.png",
      text: "Observa como Pedro se ha teletransportado 10 pasos utilizando el bloque (mueve 10 pasos) en el area de script",
    },
    {
      id: 8,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743284779/Imagenes%20Recurso%20Educativo/Taller%201%20slide%20desarrollo/dlukppefzl8bacumnj5a.png",
      text: "Pedro ahora esta dando vueltas, observa como Pedro a usado el bloque (gira 15 grados) y ha girado como si estuviese volando en el espacio",
    },
    {
      id: 9,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743284779/Imagenes%20Recurso%20Educativo/Taller%201%20slide%20desarrollo/hpwghfripdzw9xlzf4xk.png",
      text: "Mira como Pedro a usado un bloque llamado (ve a x: 0 , y: 0) y se ha movido a un lugar de nuestro esenario, es impresionante",
    },
    {
      id: 10,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743284779/Imagenes%20Recurso%20Educativo/Taller%201%20slide%20desarrollo/s4rnogwiiw3gqbsplz5y.png",
      text: "Observa como Pedro a usado algunos bloques para que el panda pueda hablar, cambiar su apariencia y ademas se encuentra en un nuevo lugar, estos bloques son maravillosos",
    },
    {
      id: 11,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743284779/Imagenes%20Recurso%20Educativo/Taller%201%20slide%20desarrollo/jokgeqici19kp6xmxpu0.png",
      text: "Ahora pedro nos esta indicando como usar algunos bloques de (Eventos y control), a la izquierda podemos ver algunos bloques que usaremos para empezar a reproducir nuestro programa que se encuentre en el area de script, y a la derecha podemos unos que se usaran para manejar de manera mas controlada nuesto personaje en el escerario sin tenere que recurrir a demasiados bloques",
    },
    {
      id: 12,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743284779/Imagenes%20Recurso%20Educativo/Taller%201%20slide%20desarrollo/fvrklprjtq74bh1pzm8p.png",
      text: "Aqui Pedro nos ha creado un codigo que utilizara como ejemplo para aplicar cada uno de los bloques que nos ha enseñado, porque no intentas hacer tu uno y ves la magia de estos bloques al pulsar en la bandera verde",
    },
    {
      id: 13,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743284779/Imagenes%20Recurso%20Educativo/Taller%201%20slide%20desarrollo/anontprvkkvvw20unubt.png",
      text: "Pedro se encuentra perdido y necesita la ayuda de tus conocimientos, ve rapido a ayudarle con lo que nos ha enseñado, toma tus bloques y demuestrale tus habilidades, a continuacion veras el pueblo",
    },
    {
      id: 14,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743284779/Imagenes%20Recurso%20Educativo/Taller%201%20slide%20desarrollo/r9cannxa168v0htz7xx3.png",
      text: (
        <>
          Pedro esta esperando de tu ayuda,{" "}
          <span className="text-red-500">
            (haz click o presiona en la imagen para descargar el mapa y luego importarlo en tu aplicacion de mblock, en los recursos de apoyo encontraras una guia para agregar esta imagen al fondo del escenario)
          </span>
        </>
      ),
    },
  ];

  // Función para manejar el cambio de slide
  const handleCircleClick = (index) => {
    setActiveIndex(index);
  };

  // Función para ir al slide anterior
  const handlePrevSlide = () => {
    if (activeIndex > 0) {
      setActiveIndex((prevIndex) => prevIndex - 1);
    }
  };

  // Función para ir al siguiente slide
  const handleNextSlide = () => {
    if (activeIndex < slides.length - 1) {
      setActiveIndex((prevIndex) => prevIndex + 1);
    }
  };

  // Función para descargar la imagen del último slide
  const handleDownloadImage = async () => {
    if (activeIndex === slides.length - 1) {
      try {
        const imageUrl = "https://res.cloudinary.com/dufzsv87k/image/upload/v1743292018/pueblo.png";
        const response = await fetch(imageUrl);
        const blob = await response.blob();
        const blobUrl = window.URL.createObjectURL(blob);
        
        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = 'Pueblo-taller1.png';
        document.body.appendChild(link);
        link.click();
        
        // Limpieza
        document.body.removeChild(link);
        window.URL.revokeObjectURL(blobUrl);
      } catch (error) {
        console.error('Error al descargar la imagen:', error);
      }
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

        {/* Texto debajo de Introducción */}
        <div className="border flex-1 flex justify-center items-center rounded-md p-4 overflow-y-auto max-h-[400px] md:max-h-[480px]">
          <p className="text-gray-700 text-center">{slides[activeIndex].text}</p>
        </div>
      </div>

      {/* Columna derecha con la imagen */}
      <div className="w-full md:w-1/2 border flex justify-center items-center rounded-md p-4 max-h-[400px] md:max-h-[560px]">
        {/* Imagen con funcionalidad de descarga en el último slide */}
        <img
          src={slides[activeIndex].image}
          alt={`Imagen ${activeIndex + 1}`}
          className={`w-full h-auto max-h-[300px] md:max-h-[400px] object-fill rounded-md ${
            activeIndex === slides.length - 1 ? 'cursor-pointer hover:opacity-90' : ''
          }`}
          onClick={handleDownloadImage}
        />
      </div>

      {/* Botón de volver */}
      <button
        onClick={() => navigate('/Tema1')}
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
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-green-500 hover:bg-green-700'
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
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-green-500 hover:bg-green-700'
          } text-white`}
        >
          →
        </button>
      </div>
    </div>
  );
};

export default Pagina4Informacion1;