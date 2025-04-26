import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useSound from 'use-sound';

const Pagina4Informacion8 = () => {
  const navigate = useNavigate();
  const [playClick] = useSound(
    'https://res.cloudinary.com/dufzsv87k/video/upload/v1744909247/ClickSound.mp3',
    { volume: 1.0 }
  );
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

        const response = await fetch(`https://prueba-api-recurso-educativo.onrender.com/api/v1/usuarios-talleres?id_usuario=${currentUser.id}&id_taller=8`);
        
        if (!response.ok) {
          throw new Error('Error al verificar la relación usuario-taller');
        }

        const relaciones = await response.json();
        
        // Filtrar para obtener solo la relación con id_taller = 8
        const relacionTaller8 = relaciones.find(rel => rel.id_taller === 8);
        
        if (relacionTaller8) {
          setUserTallerRelation(relacionTaller8);
        } else {
          console.log('No existe relación usuario-taller para el taller 8');
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
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743644552/taller8slide1_y62yir.png", 
      text: "Aprenderemos a programar las luces y sonidos del mBot. ¡Será como darle vida a tu robot! ✨🤖",
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743644555/taller8slide2_bnvidx.png", 
      text: "Necesitas: tu mBot listo y conectado a la computadora (por USB o Bluetooth). ¡Manos a la obra! 🔧",
    },
    {
      id: 3,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743644544/taller8slide3_i0md6z.png", 
      text: "Las luces son como semáforos 🚦 y los sonidos como claxons 🚗. ¡Aprende su lenguaje secreto!",
    },
    {
      id: 4,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743644559/taller8slide4_qdkyo9.png", 
      text: "Elige: Bluetooth (magia sin cables) o USB (como nave espacial). ¡Ambos funcionan! 🚀",
    },
    {
      id: 5,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743644551/taller8slide5_w47kmy.png", 
      text: "1. Conecta USB al mBot → ¡CLICK! 2. Al computador → ¡LISTO! Fácil, ¿no? ⚡",
    },
    {
      id: 6,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743644546/taller8slide6_hoxnqa.png", 
      text: "Pedro te muestra cómo conectar los cables. ¡Es muy sencillo! 🔌",
    },
    {
      id: 7,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743644533/taller8slide7_pgeeng.png", 
      text: "En la computadora, busca y selecciona tu mBot. ¡Como elegir un personaje en un juego! 🎮",
    },
    {
      id: 8,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743644533/taller8slide8_tbh8lw.png", 
      text: "Haz clic en ‘Conectar’ y ¡no olvides encenderlo! Ahora obedece tus órdenes. 🤖",
    },
    {
      id: 9,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743644535/taller8slide9_bslv2l.png", 
      text: "Si dice ‘conectado’, ¡perfecto! Ya podemos programar luces y sonidos. 🎉",
    },
    {
      id: 10,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743644538/taller8slide10_uwmghx.png", 
      text: "Pon el mBot en modo ‘Cargar’. ¡Es como darle superpoderes! 💪",
    },
    {
      id: 11,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743644538/taller8slide11_ugduaq.png", 
      text: "Elige colores, brillo y tiempo. ¡Haz que tu mBot brille como las estrellas! 🌟",
    },
    {
      id: 12,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743644541/taller8slide12_v8ky6v.png", 
      text: "Personaliza los colores de las luces. ¡Rojo, azul, verde... tú decides! 🎨",
    },
    {
      id: 13,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743644542/taller8slide13_tcgkab.png", 
      text: "Programa notas musicales (Do, Re, Mi...) o crea sonidos divertidos. ¡Es tu banda robot! 🎵",
    },
    {
      id: 14,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743644548/taller8slide14_g7nbqy.png", 
      text: "¿Sabías que puedes programar canciones? ¡Intenta el Himno de la Alegría! 🎶",
    },
    {
      id: 15,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743644557/taller8slide15_wt5lag.png", 
      text: "Reto: Convierte tu mBot en un DJ. ¡Luces, sonidos y baile! Gana el equipo más creativo. 🕺💃",
    },
  ];

  // Función para manejar el cambio de slide con sonido
  const handleCircleClick = (index) => {
    playClick();
    setTimeout(() => {
      setActiveIndex(index);
    }, 200);
  };

  // Función para ir al slide anterior con sonido
  const handlePrevSlide = () => {
    if (activeIndex > 0) {
      playClick();
      setTimeout(() => {
        setActiveIndex((prevIndex) => prevIndex - 1);
      }, 200);
    }
  };

  // Función para ir al siguiente slide con sonido
  const handleNextSlide = () => {
    if (activeIndex < slides.length - 1) {
      playClick();
      setTimeout(() => {
        setActiveIndex((prevIndex) => prevIndex + 1);
      }, 200);
    }
  };

  // Función para navegación con sonido
  const handleNavigationWithSound = (route) => {
    playClick();
    setTimeout(() => {
      navigate(route);
    }, 200);
  };

  // Función para manejar el clic en créditos con sonido
  const handleCreditosClick = async () => {
    playClick();
    try {
      const currentUser = JSON.parse(localStorage.getItem('currentUser'));
      if (!currentUser) {
        throw new Error('Usuario no autenticado');
      }

      // Si ya existe la relación para el taller 8, actualizarla
      if (userTallerRelation && userTallerRelation.id_taller === 8) {
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
        // Si no existe la relación para el taller 8, crearla
        const createResponse = await fetch('https://prueba-api-recurso-educativo.onrender.com/api/v1/usuarios-talleres', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id_usuario: currentUser.id,
            id_taller: 8,
            estadoabierto: 'abierto',
            estadofinal: 'finalizado',
          })
        });

        if (!createResponse.ok) {
          throw new Error('Error al crear la relación usuario-taller');
        }
      }

      // Navegar a créditos después de actualizar/crear
      setTimeout(() => {
        navigate('/Creditos');
      }, 200);
    } catch (error) {
      console.error('Error al manejar créditos:', error);
      // Navegar a créditos incluso si hay error
      setTimeout(() => {
        navigate('/Creditos');
      }, 200);
    }
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
        onClick={() => handleNavigationWithSound('/Tema8')}
        className="fixed md:absolute bottom-4 left-4 bg-[#007B3E] text-white px-4 py-2 rounded hover:bg-[#009e4f] transition-colors cursor-pointer"
      >
        Volver
      </button>

      {/* Botón de créditos */}
      <button
        onClick={handleCreditosClick}
        className="fixed md:absolute bottom-4 right-4 bg-[#007B3E] text-white px-4 py-2 rounded hover:bg-[#009e4f] transition-colors cursor-pointer"
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

export default Pagina4Informacion8;