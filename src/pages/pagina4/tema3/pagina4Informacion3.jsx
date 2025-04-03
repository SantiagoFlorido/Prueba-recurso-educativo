import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Pagina4Informacion3 = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);

  // Datos para cada slide (imagen y texto)
  const slides = [
    {
      id: 1,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743642677/taller3slide1_mpouhp.png", // Imagen de la interfaz de mBlock
      text: "En este taller Pedro el panda nos enseñara a como conectar el mbot a nuestra computadora y asi mismo nos enseñara a moverlo usando las flechas del teclado, ¿estas listo?",
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743642678/taller3slide2_l9alde.png", // Imagen de conexión del mBot
      text: "Pedros nos dijo que necesitariamos estas herramientas, tener nuestro Mbot armado como se hizo en el anterior taller y tener el cable usb o conector Bluetooth que viene dentro del kit del Mbot",
    },
    {
      id: 3,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743642679/taller3slide3_vh7h80.png", // Imagen de bloques de movimiento
      text: "Ahora Pedro necesita que tengamos abierto nuestra aplicacion Mblock, ¿Ya la abriste?",
    },
    {
      id: 4,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743642680/taller3slide4_hfec3y.png", // Imagen de prueba del mBot
      text: "Pon mucha atencion a Pedro, nos esta enseñando como funcionan estas herramientas para conectar nuestro Mbot",
    },
    {
      id: 5,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743642660/taller3slide5_vfbkon.png", // Imagen de luces del mBot
      text: "Escucha con atencion a pedro, nos esta indicando como conectar el cable usb al Mbot y a nuestro computador",
    },
    {
      id: 6,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743642661/taller3slide6_xggsyq.png", // Imagen de circuito para el mBot
      text: "Mira como Pedro tomo el conector Bluetooth y lo conecto a su computadora, deberiamos de hacer lo mismo",
    },
    {
      id: 7,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743642661/taller3slide7_zksu5w.png", // Imagen de evaluación y cierre
      text: "Observa con atencion, Pedro nos va a enseñar a conectar el Mbot",
    },
    {
      id: 8,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743642674/taller3slide8_bzqohe.png", // Imagen de evaluación y cierre
      text: "En este caso parece que Pedro hara la conexion por cable, observa como seleciono la opcion por usb, y recuerda muy bien que nuestro Mbot debe estar encendido y daremos un click en conectar",
    },
    {
      id: 9,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743642675/taller3slide9_w1rddv.png", // Imagen de evaluación y cierre
      text: "Observa como Pedro conecto con exito su Mbot, veamos si tambien nosotros podemos hacerlo como el y verificamos nuestra conexión.",
    },
    {
      id: 10,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743642676/taller3slide10_wn19og.png", // Imagen de evaluación y cierre
      text: "Pedro tomo unos bloques del area de bloques, observa con atencion que bloques hay que usar para mover nuestro Mbot.",
    },
    {
      id: 11,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743642682/taller3slide11_gydmq2.png", // Imagen de evaluación y cierre
      text: "Mira como Pedro hizo mas de estos bloques y ahora su Mbot tiene muchas funciones para hacer con varios botones del teclado muchas cosas.",
    },
    {
      id: 12,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743642681/taller3slide12_qqiqdx.png", // Imagen de evaluación y cierre
      text: "Ya deberiamos de saber como programar nuestro Mbot, pon mucha atención ya que es hora de lograr un desafio con lo aprendido.",
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
        onClick={() => navigate('/Tema3')}
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

export default Pagina4Informacion3;