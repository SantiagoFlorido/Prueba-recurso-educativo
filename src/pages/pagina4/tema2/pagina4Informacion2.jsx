import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Pagina4Informacion2 = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);

  // Datos para cada slide (imagen y texto)
  const slides = [
    {
      id: 1,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743642227/taller2slide1_dot4ii.png", // Imagen del kit de mBot
      text: "En este taller, aprenderemos a armar el mBot, un robot educativo junto con Pedro. Conoceremos sus componentes y las herramientas necesarias para construirlo.",
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743642204/taller2slide2_v2wxz6.png", // Imagen de componentes del mBot
      text: "Exploraremos los componentes del mBot, como el chasis, los motores, la placa, la minirueda, las ruedas, el destorillador, etc. Aprenderemos la función de cada uno y cómo se conectan.",
    },
    {
      id: 3,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743642206/taller2slide3_fh4qwh.png", // Imagen del ensamblado del chasis
      text: "Otras piezas mas como el Sensor de ultrasonido, los pernos, Sensor seguidor de linea, Cable RJ-25, cable USB y los tornillos. Aprenderemos la función de cada uno y cómo se conectan.",
    },
    {
      id: 4,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743642204/taller2slide4_u9zdsu.png", // Imagen del ensamblado del chasis
      text: "Otras piezas mas como ",
    },
    {
      id: 5,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743642201/taller2slide5_g8qyhu.png", // Imagen de instalación de sensores
      text: "Seguiremos las instrucciones que nos indicara Pedro para armar el chasis y fijar las ruedas. Aseguraremos que los motores estén correctamente conectados. Instalaremos los sensores, como el seguidor de línea y el sensor de ultrasonido, en sus lugares correctos. Y por ultimo conectaremos los cables a la placa controladora.",
    },
    {
      id: 6,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743642214/taller2slide6_lcibup.png", // Imagen de conexión de componentes
      text: "Observa como Pedro nos indica como poner el motor izquierdo sobre el chasis.",
    },
    {
      id: 7,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743642220/taller2slide7_u9gfee.png", // Imagen de prueba del mBot
      text: "Mira como Pedro coloco las tuercas y los tornillos para asegurar que el motor quede fijo en el chasis.",
    },
    {
      id: 8,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743642215/taller2slide8_kuaqak.png", // Imagen de la aplicación móvil
      text: "Ahora solo es repetir de la misma manera con el motor derecho como lo hizo Pedro.",
    },
    {
      id: 9,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743642217/taller2slide9_dmmiek.png", // Imagen de actividad práctica
      text: "Mira como Pedro tomo la rueda izquierda y la coloco en el chasis.",
    },
    {
      id: 10,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743642224/taller2slide10_bmtvdm.png", // Imagen de evaluación y cierre
      text: "Pedro repitio con la rueda derecha y se aseguro de colocar los tornillos y asegurarlos con las tuercas para que estas queden fijas al chasis.",
    },
    {
      id: 11,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743642227/taller2slide11_qymiq9.png", // Imagen de evaluación y cierre
      text: "Observa como Pedro tomo el seguidor de lineas y lo puso en el chasis del Mbot.",
    },
    {
      id: 12,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743642200/taller2slide12_zryzja.png", // Imagen de evaluación y cierre
      text: "Ahora Pedro puso la minirueda sobre el seguidor de lineas como lo indica la imagen.",
    },
    {
      id: 13,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743642200/taller2slide13_grtr2h.png", // Imagen de evaluación y cierre
      text: "Pedro tomo el destornillador y aseguro el seguidor de lineas como nos lo muestra.",
    },
    {
      id: 14,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743642203/taller2slide14_rvskeu.png", // Imagen de evaluación y cierre
      text: "Mira como Pedro tomo con sus patas el cable RJ-25 y lo conecto al seguidor de lineas.",
    },
    {
      id: 15,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743642201/taller2slide15_cbfiav.png", // Imagen de evaluación y cierre
      text: "Observa como Pedro tomo el sensor de ultrasonido y lo coloco sobre el chasis del Mbot.",
    },
    {
      id: 16,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743642231/taller2slide16_wm79nr.png", // Imagen de evaluación y cierre
      text: "Ahora Pedro quiere indicarte como dejar fijo el sensor de ultrasonido al chasis utilizando los tornillos con el destornillador.",
    },
    {
      id: 17,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743642210/taller2slide17_pvro1f.png", // Imagen de evaluación y cierre
      text: "Pedro tomo otro cable RJ-25 y lo conecto al sensor de ultrasonido tal y como nos lo muestra.",
    },
    {
      id: 18,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743642228/taller2slide18_r1zitl.png", // Imagen de evaluación y cierre
      text: "Mira como Pedro con sus patas tomo los 4 pernos y los coloco sobre el chasis del Mbot.",
    },
    {
      id: 19,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743642207/taller2slide19_zkrzuz.png", // Imagen de evaluación y cierre
      text: "Observa como Pedro tomo el velcro y lo puso en la caja de las baterias y el chasis del Mbot, por ultimo coloco la caja de las baterias sobre el chasis como se puede ver.",
    },
    {
      id: 20,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743642220/taller2slide20_athtah.png", // Imagen de evaluación y cierre
      text: "Ahora Pedro tomo la placa y la coloco sobre los pernos que anteriormente puso sobre el chasis del Mbot.",
    },
    {
      id: 21,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743642209/taller2slide21_w9wljq.png", // Imagen de evaluación y cierre
      text: "Pedro se asegura que la placa quede fija al chasis poniendo los tornillos y conectandolo a los pernos, asegurandose que esta quede fija.",
    },
    {
      id: 22,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743642221/taller2slide22_s9jyaj.png", // Imagen de evaluación y cierre
      text: "Como puedes ver Pedro noto que quedan algunos cables que conectar a la placa de los sensores, asi que el se tomo la molestia de mostrarte como conectarlos a la placa",
    },
    {
      id: 23,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743642212/taller2slide23_hwvmwi.png", // Imagen de evaluación y cierre
      text: "Pedro tomo los cables de los motores y los conecto a las placas para que funcione, aqui te muestra como deben ir conectados",
    },
    {
      id: 24,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743642210/taller2slide24_aoiqra.png", // Imagen de evaluación y cierre
      text: "Por ultimo aqui pedro te enseña como conectar el cable de las pilas a la placa para que nuestro Mbot funcione y estaria completamente armado",
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
      <div className="w-full md:w-1/4 flex flex-col gap-4">
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
      <div className="w-full md:w-3/4 border flex justify-center items-center rounded-md p-4 max-h-[400px] md:max-h-[560px]">
        {/* Imagen */}
        <img
          src={slides[activeIndex].image} // Imagen correspondiente al slide activo
          alt={`Imagen ${activeIndex + 1}`}
          className="w-full h-auto max-h-[300px] md:max-h-[600px] object-fill rounded-md"
        />
      </div>

      {/* Botón de volver */}
      <button
        onClick={() => navigate('/Tema2')}
        className="fixed md:absolute bottom-4 left-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors cursor-pointer"
      >
        Volver
      </button>

      {/* Botón de créditos */}
      <button
        onClick={() => navigate('/Creditos')}
        className="fixed md:absolute bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors cursor-pointer"
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
                index === activeIndex ? 'bg-green-500 cursor-pointer' : 'bg-gray-300 cursor-pointer'
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