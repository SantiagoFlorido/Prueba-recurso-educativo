import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Pagina4Informacion1 = () => {
    const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);

  // Datos para cada slide (imagen y texto)
  const slides = [
    {
      id: 1,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1741305069/mapa_igu9fc.webp", // Reemplaza con la URL de la imagen 1
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
    <div className="w-[1369px] h-[642px] flex flex-col md:flex-row p-4 bg-white relative gap-4">
      {/* Columna izquierda */}
      <div className="w-full md:w-1/2 p-0 gap-4 flex flex-col h-137.5">
        {/* Introducción arriba a la izquierda */}
        <div className="border h-[50px] flex justify-center items-center rounded-md">
          <h2 className="text-2xl font-bold ">Introducción</h2>
        </div>

        {/* Texto debajo de Introducción, centrado en la columna izquierda */}
        <div className="border h-[484px] flex justify-center items-center rounded-md">
          <p className="text-gray-700">{slides[activeIndex].text}</p>
        </div>
      </div>

      {/* Columna derecha con la imagen */}
      <div className="w-full md:w-1/2 p-4 border flex flex-col justify-center items-center h-[550px] rounded-md">
        {/* Imagen */}
        <img
          src={slides[activeIndex].image} // Imagen correspondiente al slide activo
          alt={`Imagen ${activeIndex + 1}`}
          className="w-full h-auto"
        />
      </div>

      {/* Círculos del slide abajo en el centro */}
      <div className="absolute bottom-7 left-1/2 transform -translate-x-1/2 flex justify-center">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => handleCircleClick(index)}
            className={`w-4 h-4 rounded-full mx-1 ${
              index === activeIndex ? 'bg-green-500' : 'bg-gray-300'
            }`}
          ></button>
        ))}
      </div>

      {/* Botón de volver */}
      <div className="absolute bottom-4 left-4">
        <button onClick={() => navigate('/Proyectos')} className="bg-green-500 text-white px-4 py-2 rounded">Volver</button>
      </div>

      {/* Botón de creditos */}
      <div className="absolute bottom-4 right-4">
        <button onClick={() => navigate('/Creditos')} className="bg-green-500 text-white px-4 py-2 rounded">Creditos</button>
      </div>

    </div>
  );
};

export default Pagina4Informacion1;