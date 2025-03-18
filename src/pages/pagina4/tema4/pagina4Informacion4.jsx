import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Pagina4Informacion4 = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);

  // Datos para cada slide (imagen y texto)
  const slides = [
    {
      id: 1,
      image: "url_imagen_1", // Reemplaza con la URL de la imagen 1
      text: "Texto correspondiente a la imagen 1",
    },
    {
      id: 2,
      image: "url_imagen_2", // Reemplaza con la URL de la imagen 2
      text: "Texto correspondiente a la imagen 2",
    },
    {
      id: 3,
      image: "url_imagen_3", // Reemplaza con la URL de la imagen 3
      text: "Texto correspondiente a la imagen 3",
    },
    {
      id: 4,
      image: "url_imagen_4", // Reemplaza con la URL de la imagen 4
      text: "Texto correspondiente a la imagen 4",
    },
    {
      id: 5,
      image: "url_imagen_5", // Reemplaza con la URL de la imagen 5
      text: "Texto correspondiente a la imagen 5",
    },
    {
      id: 6,
      image: "url_imagen_6", // Reemplaza con la URL de la imagen 6
      text: "Texto correspondiente a la imagen 6",
    },
  ];

  // Función para manejar el cambio de slide
  const handleCircleClick = (index) => {
    setActiveIndex(index);
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
        onClick={() => navigate('/Tema4')}
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

      {/* Círculos del slide abajo en el centro */}
      <div className="fixed md:absolute bottom-6 left-[calc(50%-80px)] flex justify-center">
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
    </div>
  );
};

export default Pagina4Informacion4;