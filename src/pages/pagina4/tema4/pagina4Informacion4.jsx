import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useSound from 'use-sound';

const Pagina4Informacion4 = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [userTallerRelation, setUserTallerRelation] = useState(null);
  const [playClick] = useSound(
    'https://res.cloudinary.com/dufzsv87k/video/upload/v1744909247/ClickSound.mp3',
    { volume: 1.0 }
  );

  // Verificar la relación usuario-taller al cargar el componente
  useEffect(() => {
    const checkUserTallerRelation = async () => {
      try {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (!currentUser) {
          console.log('Usuario no autenticado');
          return;
        }

        const response = await fetch(`https://prueba-api-recurso-educativo.onrender.com/api/v1/usuarios-talleres?id_usuario=${currentUser.id}&id_taller=4`);
        
        if (!response.ok) {
          throw new Error('Error al verificar la relación usuario-taller');
        }

        const relaciones = await response.json();
        
        // Filtrar para obtener solo la relación con id_taller = 4
        const relacionTaller4 = relaciones.find(rel => rel.id_taller === 4);
        
        if (relacionTaller4) {
          setUserTallerRelation(relacionTaller4);
        } else {
          console.log('No existe relación usuario-taller para el taller 4');
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
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1745279247/taller4slide1.png", 
      text: "Aprenderemos a controlar el mBot desde tu celular con la app MakeBlock. ¡Como jugar con un robot de verdad! 🎮",
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1745279296/taller4slide2.png", 
      text: "Necesitas: tu mBot encendido y un celular con Bluetooth e internet para descargar la aplicación. ¡Listos para la acción! 📱",
    },
    {
      id: 3,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1745279442/taller4slide3.png", 
      text: "Con esta app, controlarás el mBot como si fuera un videojuego. ¡Superpoderes en tus manos! ⚡",
    },
    {
      id: 4,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1745279683/taller4slide4.png", 
      text: "Antes de empezar, elige tu mBot en la app. ¡Así empieza la diversión robótica! 🤖✨",
    },
    {
      id: 5,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1745280284/taller4slide5.png", 
      text: "Presiona el ícono de Bluetooth para conectar. ¡Es como saludar a tu robot! 👋",
    },
    {
      id: 6,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1745279753/taller4slide6.png", 
      text: "Acerca tu celular al mBot y ¡listo! Se conectarán automáticamente. 📶",
    },
    {
      id: 7,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1745279807/taller4slide7.png", 
      text: "¡Elige qué hacer con tu mBot! Manejar, dibujar rutas o crear música. 🎨🎵🚗",
    },
    {
      id: 8,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1745279850/taller4slide8.png", 
      text: "Usa la palanca en pantalla para mover el mBot. ¡Como un auto de carreras! 🏎️",
    },
    {
      id: 9,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1745279890/taller4slide9.png", 
      text: "Dibuja un camino con tu dedo y el mBot lo seguirá. ¡Arte robótico! 🖍️",
    },
    {
      id: 10,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1745279928/taller4slide10.png", 
      text: "Crea melodías tocando la pantalla. ¡El mBot tocará tu canción! 🎶",
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

  // Función para manejar el clic en créditos
  const handleCreditosClick = async () => {
    playClick();
    setTimeout(async () => {
      try {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (!currentUser) {
          throw new Error('Usuario no autenticado');
        }

        // Si ya existe la relación para el taller 4, actualizarla
        if (userTallerRelation && userTallerRelation.id_taller === 4) {
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
          // Si no existe la relación para el taller 4, crearla
          const createResponse = await fetch('https://prueba-api-recurso-educativo.onrender.com/api/v1/usuarios-talleres', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              id_usuario: currentUser.id,
              id_taller: 4, // Asegurando que solo se cree para el taller 4
              estadoabierto: 'abierto',
              estadofinal: 'finalizado'
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
    }, 200);
  };

  const handleNavigationWithSound = () => {
    playClick();
    setTimeout(() => {
      navigate('/Tema4');
    }, 200);
  };

  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row p-4 bg-white gap-4 relative md:items-stretch">
      {/* Contenedor principal de las columnas */}
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
            className="w-full h-full max-h-[300px] md:max-h-[515px] object-contain rounded-md"
          />
        </div>
      </div>

      {/* Botón de volver */}
      <button
        onClick={handleNavigationWithSound}
        className="fixed md:absolute bottom-4 left-4 bg-[#007B3E] text-white px-4 py-2 rounded hover:bg-[#009e4f] transition-colors cursor-pointer"
      >
        Volver
      </button>

      {/* Botón de créditos (ahora con la nueva función) */}
      <button
        onClick={handleCreditosClick}
        className="fixed md:absolute bottom-4 right-4 bg-[#007B3E] text-white px-4 py-2 rounded hover:bg-[#009e4f] transition-colors cursor-pointer"
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
              : 'bg-[#007B3E] hover:bg-[#009e4f]'
          } text-white`}
        >
          ←
        </button>

        {/* Círculos de navegación (solo en PC) */}
        <div className="hidden md:flex mb-2">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => handleCircleClick(index)}
              className={`w-4 h-4 rounded-full mx-1 hover:bg-[#009e4f] transition-colors ${
                index === activeIndex ? 'bg-[#007B3E] cursor-pointer' : 'bg-gray-300 cursor-pointer'
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
              : 'bg-[#007B3E] hover:bg-[#009e4f]'
          } text-white`}
        >
          →
        </button>
      </div>
    </div>
  );
};

export default Pagina4Informacion4;