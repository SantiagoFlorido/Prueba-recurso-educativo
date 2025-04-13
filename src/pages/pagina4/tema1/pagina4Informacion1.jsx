import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Pagina4Informacion1 = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [userTallerRelation, setUserTallerRelation] = useState(null);

  // Verificar la relación usuario-taller al cargar el componente
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
        
        // Filtrar para obtener solo la relación con id_taller = 1
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

  // Datos para cada slide (imagen y texto)
  const slides = [
    {
      id: 1,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743639636/taller1slide1.png",
      text: "En este taller, aprenderemos a programar utilizando la aplicación mBlock junto con Pedro un panda. Conoceremos sus componentes y las herramientas necesarias.",
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743639730/taller1slide2.png",
      text: "Para empezar deberemos tener mblock instalado en nuestra computadora para que Pedro nos pueda enseñar a utilizarla",
    },
    {
      id: 3,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743639805/taller1slide3_bkriuc.png",
      text: "Pon atencion a Pedro, nos esta enseñando una parte fundamental de nuestra aplicacion mblock, el area de bloques donde estaran cada uno de los bloques para aprender a programar",
    },
    {
      id: 4,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743640287/taller1slide4_hkahbg.png",
      text: "Pedro nos esta hablando, observa como nos indica el escenario donde encontraremos un panda el cual se vera afectado por cada una de nuestras acciones que le indicaremos con los bloques mas adelante",
    },
    {
      id: 5,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743640286/taller1slide5_bmg238.png",
      text: "Pedro ahora nos esta enseñando los objetos, en este lugar se encontraran cada uno de los personajes que queramos utilizar para que se vean en el escenario y sean programados por nosotros, aqui podemos agregar algunos que ya nos incluye mblock, o en caso de que tengamos alguno descargado nosotros lo podamos agregar,",
    },
    {
      id: 6,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743640282/taller1slide6_b10nzf.png",
      text: "Observa como Pedro nos esta indicando como usar el area de script donde pondremos cada uno de nuestros bloques arrastrandolos a esta area y asi mismo indicarle a nustro personaje que accion debe ejecutar",
    },
    {
      id: 7,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743640277/taller1slide7_vzsakt.png",
      text: "Observa como Pedro se ha teletransportado 10 pasos utilizando el bloque (mueve 10 pasos) en el area de script",
    },
    {
      id: 8,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743640278/taller1slide8_c2n17w.png",
      text: "Pedro ahora esta dando vueltas, observa como Pedro a usado el bloque (gira 15 grados) y ha girado como si estuviese volando en el espacio",
    },
    {
      id: 9,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743640278/taller1slide9_k9iidm.png",
      text: "Mira como Pedro a usado un bloque llamado (ve a x: 0 , y: 0) y se ha movido a un lugar de nuestro esenario, es impresionante",
    },
    {
      id: 10,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743640278/taller1slide10_scnitm.png",
      text: "Observa como Pedro a usado algunos bloques para que el panda pueda hablar, cambiar su apariencia y ademas se encuentra en un nuevo lugar, estos bloques son maravillosos",
    },
    {
      id: 11,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743640283/taller1slide11_wkisyp.png",
      text: "Ahora pedro nos esta indicando como usar algunos bloques de (Eventos y control), a la izquierda podemos ver algunos bloques que usaremos para empezar a reproducir nuestro programa que se encuentre en el area de script, y a la derecha podemos unos que se usaran para manejar de manera mas controlada nuesto personaje en el escerario sin tenere que recurrir a demasiados bloques",
    },
    {
      id: 12,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743640278/taller1slide12_czcmml.png",
      text: "Aqui Pedro nos ha creado un codigo que utilizara como ejemplo para aplicar cada uno de los bloques que nos ha enseñado, porque no intentas hacer tu uno y ves la magia de estos bloques al pulsar en la bandera verde",
    },
    {
      id: 13,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743640281/taller1slide13_h0bivm.png",
      text: "Pedro se encuentra perdido y necesita la ayuda de tus conocimientos, ve rapido a ayudarle con lo que nos ha enseñado, toma tus bloques y demuestrale tus habilidades, a continuacion veras el pueblo",
    },
    {
      id: 14,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743640282/taller1slide14_zdiszf.png",
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

  const handleCircleClick = (index) => {
    setActiveIndex(index);
  };

  const handlePrevSlide = () => {
    if (activeIndex > 0) {
      setActiveIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNextSlide = () => {
    if (activeIndex < slides.length - 1) {
      setActiveIndex((prevIndex) => prevIndex + 1);
    }
  };

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
        
        document.body.removeChild(link);
        window.URL.revokeObjectURL(blobUrl);
      } catch (error) {
        console.error('Error al descargar la imagen:', error);
      }
    }
  };

  // Función para manejar el clic en créditos
  const handleCreditosClick = async () => {
    try {
      const currentUser = JSON.parse(localStorage.getItem('currentUser'));
      if (!currentUser) {
        throw new Error('Usuario no autenticado');
      }

      // Si ya existe la relación para el taller 1, actualizarla
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
        // Si no existe la relación para el taller 1, crearla
        const createResponse = await fetch('https://prueba-api-recurso-educativo.onrender.com/api/v1/usuarios-talleres', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id_usuario: currentUser.id,
            id_taller: 1, // Asegurando que solo se cree para el taller 1
            estadoabierto: 'abierto',
            estadofinal: 'finalizado',
          })
        });

        if (!createResponse.ok) {
          throw new Error('Error al crear la relación usuario-taller');
        }
      }

      // Navegar a créditos después de actualizar/crear
      navigate('/Creditos');
    } catch (error) {
      console.error('Error al manejar créditos:', error);
      // Navegar a créditos incluso si hay error
      navigate('/Creditos');
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

        {/* Texto debajo de Introducción */}
        <div className="border flex-1 flex justify-center items-center rounded-md p-4 overflow-y-auto max-h-[400px] md:max-h-[480px]">
          <p className="text-gray-700 text-center">{slides[activeIndex].text}</p>
        </div>
      </div>

      {/* Columna derecha con la imagen */}
      <div className="w-full md:w-3/4 border flex justify-center items-center rounded-md p-4 max-h-[400px] md:max-h-[560px]">
        <img
          src={slides[activeIndex].image}
          alt={`Imagen ${activeIndex + 1}`}
          className={`w-full h-auto max-h-[300px] md:max-h-[600px] object-fill rounded-md ${
            activeIndex === slides.length - 1 ? 'cursor-pointer hover:opacity-80' : ''
          }`}
          onClick={handleDownloadImage}
        />
      </div>

      {/* Botón de volver */}
      <button
        onClick={() => navigate('/Tema1')}
        className="fixed md:absolute bottom-4 left-4 bg-[#007B3E] text-white px-4 py-2 rounded hover:bg-[#009e4f] transition-colors cursor-pointer"
      >
        Volver
      </button>

      {/* Botón de créditos (ahora con la nueva función) */}
      <button
        onClick={handleCreditosClick}
        className="fixed md:absolute bottom-4 right-4 bg-[#007B3E] text-white px-4 py-2 rounded hover:bg-[#009e4f] ransition-colors cursor-pointer duration-300"
      >
        Créditos
      </button>

      {/* Navegación: Círculos en PC y flechas en móvil */}
      <div className="fixed md:absolute bottom-4 left-1/2 transform -translate-x-1/2 flex justify-center items-center gap-4 ">
        {/* Flecha izquierda (solo en móvil) */}
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

        {/* Círculos de navegación (solo en PC) */}
        <div className="hidden md:flex ">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => handleCircleClick(index)}
              className={`w-4 h-4 rounded-full mx-1 hover:bg-[#009e4f] transition-colors ${
                index === activeIndex ? 'bg-[#007B3E] cursor-pointer duration-300' : 'bg-gray-300 cursor-pointer duration-300'
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