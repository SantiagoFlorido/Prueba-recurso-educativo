import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useSound from 'use-sound';

const Pagina4Informacion7 = () => {
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

        const response = await fetch(`https://prueba-api-recurso-educativo.onrender.com/api/v1/usuarios-talleres?id_usuario=${currentUser.id}&id_taller=7`);
        
        if (!response.ok) {
          throw new Error('Error al verificar la relación usuario-taller');
        }

        const relaciones = await response.json();
        
        // Filtrar para obtener solo la relación con id_taller = 7
        const relacionTaller7 = relaciones.find(rel => rel.id_taller === 7);
        
        if (relacionTaller7) {
          setUserTallerRelation(relacionTaller7);
        } else {
          console.log('No existe relación usuario-taller para el taller 7');
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
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743644079/taller7slide1_b0jzxi.png", 
      text: "Vamos a programar el mBot para que siga objetos como tu mano o una pelota. ¡Será como un robot mascota! 🐶",
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743644081/taller7slide2_dtba0g.png", 
      text: "Necesitas: tu mBot listo, una computadora (USB o Bluetooth) y objetos para seguir (como una pelota o tu mano). ✋🎾",
    },
    {
      id: 3,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743644088/taller7slide3_kxa5o9.png", 
      text: "Este sensor es como los ojos del mBot: detecta objetos y los esquiva. ¡Parece un superhéroe robot! 🦸",
    },
    {
      id: 4,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743644083/taller7slide4_oiat27.png", 
      text: "Elige: Bluetooth (magia sin cables) o USB (como una nave espacial). ¡Ambos son geniales! ✨",
    },
    {
      id: 5,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743644085/taller7slide5_joqrhu.png", 
      text: "1. Conecta el USB al mBot → ¡CLICK! 2. Al computador → ¡LISTO! Ahora a programar. ⚡",
    },
    {
      id: 6,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743644087/taller7slide6_rcawwj.png", 
      text: "Pedro te muestra cómo conectar los cables. ¡Es fácil como enchufar un juguete! 🔌",
    },
    {
      id: 7,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743644069/taller7slide7_flijna.png", 
      text: "En la computadora, busca y selecciona tu mBot. ¡Es como elegir un personaje en un juego! 🎮",
    },
    {
      id: 8,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743644070/taller7slide8_ijkefh.png", 
      text: "Haz clic en ‘Conectar’ y ¡no olvides encenderlo! El mBot está listo para obedecerte. 🤖",
    },
    {
      id: 9,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743644071/taller7slide9_wyrods.png", 
      text: "Si dice ‘conectado’, ¡perfecto! Ahora el mBot escuchará tus órdenes. ¡Vamos! 🚀",
    },
    {
      id: 10,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743644073/taller7slide10_tpvyov.png", 
      text: "Antes de empezar, pon el mBot en modo ‘Cargar’. ¡Es como darle pilas para pensar! 🔋",
    },
    {
      id: 11,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743644074/taller7slide11_v1ukny.png", 
      text: "Programa el mBot para que siga tu mano (como un perrito robot). ¡Sin chocar! 🐶✨",
    },
    {
      id: 12,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743644076/taller7slide12_usmblg.png", 
      text: "Pedro te muestra los bloques que necesitas. ¡Arma tu código como un rompecabezas! 🧩",
    },
    {
      id: 13,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743644078/taller7slide13_j3c8i7.png", 
      text: "Reto: Guía al mBot con tu mano por una pista. ¡El que mejor lo controle gana! 🏆 Reglas: \nUsa el sensor (15-30 cm de distancia). \nLuces de colores dan puntos extra. 💡",
    },
  ];

  // Función para manejar el cambio de slide con sonido
  const handleCircleClick = (index) => {
    playClick();
    setTimeout(() => {
      setActiveIndex(index);
    }, 200);
  };

  // Función para ir al slide anterior (no retrocede más allá del primer slide)
  const handlePrevSlide = () => {
    if (activeIndex > 0) {
      playClick();
      setTimeout(() => {
        setActiveIndex((prevIndex) => prevIndex - 1);
      }, 200);
    }
  };

  // Función para ir al siguiente slide (no avanza más allá del último slide)
  const handleNextSlide = () => {
    if (activeIndex < slides.length - 1) {
      playClick();
      setTimeout(() => {
        setActiveIndex((prevIndex) => prevIndex + 1);
      }, 200);
    }
  };

  // Función para manejar navegación con sonido
  const handleNavigationWithSound = (route) => {
    playClick();
    setTimeout(() => {
      navigate(route);
    }, 200);
  };

  // Función para manejar el clic en créditos
  const handleCreditosClick = async () => {
    playClick();
    try {
      const currentUser = JSON.parse(localStorage.getItem('currentUser'));
      if (!currentUser) {
        throw new Error('Usuario no autenticado');
      }

      // Si ya existe la relación para el taller 7, actualizarla
      if (userTallerRelation && userTallerRelation.id_taller === 7) {
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
        // Si no existe la relación para el taller 7, crearla
        const createResponse = await fetch('https://prueba-api-recurso-educativo.onrender.com/api/v1/usuarios-talleres', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id_usuario: currentUser.id,
            id_taller: 7, // Asegurando que solo se cree para el taller 7
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
        onClick={() => handleNavigationWithSound('/Tema7')}
        className="fixed md:absolute bottom-4 left-4 bg-[#007B3E] text-white px-4 py-2 rounded hover:bg-[#009e4f] transition-colors cursor-pointer"
      >
        Volver
      </button>

      {/* Botón de créditos (con la nueva función) */}
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

export default Pagina4Informacion7;