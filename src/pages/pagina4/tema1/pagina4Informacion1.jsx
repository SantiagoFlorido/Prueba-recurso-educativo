import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useSound from 'use-sound';

const Pagina4Informacion1 = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [userTallerRelation, setUserTallerRelation] = useState(null);
  const [playClick] = useSound(
    'https://res.cloudinary.com/dufzsv87k/video/upload/v1744909247/ClickSound.mp3',
    { volume: 1.0 }
  );

  useEffect(() => {
    const checkUserTallerRelation = async () => {
      try {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (!currentUser) {
          console.log('Usuario no autenticado');
          return;
        }

        const response = await fetch(`https://prueba-api-recurso-educativo.onrender.com/api/v1/usuarios-talleres?id_usuario=${currentUser.id}&id_taller=1`);
        
        if (!response.ok) {
          throw new Error('Error al verificar la relación usuario-taller');
        }

        const relaciones = await response.json();
        const relacionTaller1 = relaciones.find(rel => rel.id_taller === 1);
        
        if (relacionTaller1) {
          setUserTallerRelation(relacionTaller1);
        } else {
          console.log('No existe relación usuario-taller para el taller 1');
        }
      } catch (error) {
        console.error('Error al verificar relación:', error);
      }
    };

    checkUserTallerRelation();
  }, []);

  const slides = [
    {
      id: 1,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743639636/taller1slide1.png",
      text: "En este taller, aprenderemos a programar utilizando la aplicación mBlock junto con Pedro, un panda. Conoceremos sus componentes y las herramientas necesarias.",
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743639730/taller1slide2.png",
      text: "Para empezar deberemos tener mBlock instalado en nuestra computadora para que Pedro nos pueda enseñar a utilizarla.",
    },
    {
      id: 3,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743639805/taller1slide3_bkriuc.png",
      text: "Pon atención a Pedro, nos está enseñando una parte fundamental de nuestra aplicación mBlock: el área de bloques, donde estarán cada uno de los bloques para aprender a programar.",
    },
    {
      id: 4,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743640287/taller1slide4_hkahbg.png",
      text: "Pedro nos está hablando, observa cómo nos indica el escenario donde encontraremos un panda que se verá afectado por cada una de nuestras acciones indicadas con los bloques.",
    },
    {
      id: 5,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743640286/taller1slide5_bmg238.png",
      text: "Pedro ahora nos está enseñando los objetos. Aquí se encontrarán los personajes que queramos utilizar para que se vean en el escenario y sean programados. Podemos agregar algunos que ya incluye mBlock o importar otros que tengamos.",
    },
    {
      id: 6,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743640282/taller1slide6_b10nzf.png",
      text: "Observa cómo Pedro nos está indicando cómo usar el área de scripts, donde colocaremos cada uno de nuestros bloques arrastrándolos a esta área para indicarle al personaje qué acción debe ejecutar.",
    },
    {
      id: 7,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743640277/taller1slide7_vzsakt.png",
      text: "Observa cómo Pedro se ha teletransportado 10 pasos utilizando el bloque (mueve 10 pasos) en el área de script.",
    },
    {
      id: 8,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743640278/taller1slide8_c2n17w.png",
      text: "Pedro ahora está dando vueltas. Observa cómo ha usado el bloque (gira 15 grados) y ha girado como si estuviese volando en el espacio.",
    },
    {
      id: 9,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743640278/taller1slide9_k9iidm.png",
      text: "Mira cómo Pedro ha usado un bloque llamado (ve a x: 0, y: 0) y se ha movido a un lugar del escenario. ¡Es impresionante!",
    },
    {
      id: 10,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743640278/taller1slide10_scnitm.png",
      text: "Observa cómo Pedro ha usado algunos bloques para que el panda pueda hablar, cambiar su apariencia y además está en un nuevo lugar. ¡Estos bloques son maravillosos!",
    },
    {
      id: 11,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743640283/taller1slide11_wkisyp.png",
      text: "Ahora Pedro nos está indicando cómo usar algunos bloques de eventos y control. A la izquierda podemos ver bloques que inician el programa, y a la derecha otros que permiten controlar el comportamiento del personaje sin usar demasiados bloques.",
    },
    {
      id: 12,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743640278/taller1slide12_czcmml.png",
      text: "Aquí Pedro ha creado un código como ejemplo para aplicar cada uno de los bloques que hemos aprendido. ¿Por qué no intentas hacer uno tú y ves la magia al pulsar la bandera verde?",
    },
    {
      id: 13,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743640281/taller1slide13_h0bivm.png",
      text: "Pedro se encuentra perdido y necesita la ayuda de tus conocimientos. ¡Ve rápido a ayudarle! Toma tus bloques y demuestra tus habilidades. A continuación, verás el pueblo.",
    },
    {
      id: 14,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743640282/taller1slide14_zdiszf.png",
      text: (
        <>
          Pedro está esperando tu ayuda,{" "}
          <span className="text-red-500">
            (haz click o presiona en la imagen para descargar el mapa y luego importarlo en tu aplicación de mBlock. En los recursos de apoyo encontrarás una guía para agregar esta imagen al fondo del escenario).
          </span>
        </>
      ),
    },
  ];

  const handleCircleClick = (index) => {
    playClick();
    setActiveIndex(index);
  };

  const handlePrevSlide = () => {
    if (activeIndex > 0) {
      playClick();
      setActiveIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNextSlide = () => {
    if (activeIndex < slides.length - 1) {
      playClick();
      setActiveIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleDownloadImage = async () => {
    if (activeIndex === slides.length - 1) {
      try {
        playClick();
        const imageUrl = "https://res.cloudinary.com/dufzsv87k/image/upload/v1743292018/pueblo.png";
        const response = await fetch(imageUrl);
        const blob = await response.blob();
        const blobUrl = window.URL.createObjectURL(blob);
        
        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = 'Pueblo-taller1.png';
        document.body.appendChild(link);
        link.click();
        
        document.body.removeChild(link);
        window.URL.revokeObjectURL(blobUrl);
      } catch (error) {
        console.error('Error al descargar la imagen:', error);
      }
    }
  };

  const handleCreditosClick = async () => {
    playClick();
    setTimeout(async () => {
      try {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (!currentUser) {
          throw new Error('Usuario no autenticado');
        }

        if (userTallerRelation && userTallerRelation.id_taller === 1) {
          const updateResponse = await fetch(`https://prueba-api-recurso-educativo.onrender.com/api/v1/usuarios-talleres/${userTallerRelation.id}/estado`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              estadoabierto: 'abierto',
              estadofinal: 'finalizado'
            })
          });

          if (!updateResponse.ok) {
            throw new Error('Error al actualizar el estado');
          }
        } else {
          const createResponse = await fetch('https://prueba-api-recurso-educativo.onrender.com/api/v1/usuarios-talleres', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              id_usuario: currentUser.id,
              id_taller: 1,
              estadoabierto: 'abierto',
              estadofinal: 'finalizado',
            })
          });

          if (!createResponse.ok) {
            throw new Error('Error al crear la relación usuario-taller');
          }
        }

        navigate('/Creditos');
      } catch (error) {
        console.error('Error al manejar créditos:', error);
        navigate('/Creditos');
      }
    }, 200);
  };

  const handleNavigationWithSound = () => {
    playClick();
    setTimeout(() => {
      navigate('/Tema1');
    }, 200);
  };

  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row p-4 bg-white gap-4 relative md:items-stretch">
      <div className="flex flex-col md:flex-row gap-4 flex-1 mb-14"> {/* Añadido flex-1 y mb-5 */}
        
        {/* Columna izquierda - Texto */}
        <div className="w-full md:w-1/4 flex flex-col gap-4 h-full"> {/* Añadido h-full */}
          {/* Título "Introducción" */}
          <div className="border h-16 flex justify-center items-center rounded-md">
            <h2 className="text-2xl font-bold">Introducción</h2>
          </div>

          {/* Contenedor del texto del slide (ahora ocupa el espacio restante) */}
          <div className="border flex-1 flex justify-center items-center rounded-md p-4 overflow-y-auto">
            <p className="text-gray-700 text-center">{slides[activeIndex].text}</p>
          </div>
        </div>

        {/* Columna derecha - Imagen */}
        <div className="w-full md:w-3/4 border flex justify-center items-center rounded-md p-0 h-full overflow-hidden">
          <img
            src={slides[activeIndex].image}
            alt={`Imagen ${activeIndex + 1}`}
            className={`w-full h-full max-h-[300px] md:max-h-[515px] object-contain rounded-md ${
              activeIndex === slides.length - 1 ? 'cursor-pointer hover:opacity-80' : ''
            }`}
            onClick={handleDownloadImage}
          />
        </div>
      </div>

      <button
        onClick={handleNavigationWithSound}
        className="fixed md:absolute bottom-4 left-4 bg-[#007B3E] text-white px-4 py-2 rounded hover:bg-[#009e4f] transition-colors cursor-pointer"
      >
        Volver
      </button>

      <button
        onClick={handleCreditosClick}
        className="fixed md:absolute bottom-4 right-4 bg-[#007B3E] text-white px-4 py-2 rounded hover:bg-[#009e4f] ransition-colors cursor-pointer duration-300"
      >
        Créditos
      </button>

      <div className="fixed md:absolute bottom-4 left-1/2 transform -translate-x-1/2 flex justify-center items-center gap-4 ">
        <button
          onClick={handlePrevSlide}
          className={`md:hidden px-4 py-2 rounded transition-colors  ${
            activeIndex === 0
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-[#007B3E] hover:bg-[#009e4f] duration-300'
          } text-white`}
        >
          ←
        </button>

        <div className="hidden md:flex mb-2">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => handleCircleClick(index)}
              className={`w-4 h-4 rounded-full mx-1 hover:bg-[#009e4f] transition-colors duration-300 ${
                index === activeIndex ? 'bg-[#007B3E] cursor-pointer duration-300' : 'bg-gray-300 cursor-pointer duration-300'
              }`}
            ></button>
          ))}
        </div>

        <button
          onClick={handleNextSlide}
          className={`md:hidden px-4 py-2 rounded transition-colors left-[40%] transform -translate-x-1/4 ${
            activeIndex === slides.length - 1
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-[#007B3E] hover:bg-[#009e4f] duration-300'
          } text-white`}
        >
          →
        </button>
      </div>
    </div>
  );
};

export default Pagina4Informacion1;
