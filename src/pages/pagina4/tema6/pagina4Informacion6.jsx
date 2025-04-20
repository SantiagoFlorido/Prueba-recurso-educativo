import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useSound from 'use-sound';

const Pagina4Informacion6 = () => {
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

        const response = await fetch(`https://prueba-api-recurso-educativo.onrender.com/api/v1/usuarios-talleres?id_usuario=${currentUser.id}&id_taller=6`);
        
        if (!response.ok) {
          throw new Error('Error al verificar la relación usuario-taller');
        }

        const relaciones = await response.json();
        
        // Filtrar para obtener solo la relación con id_taller = 6
        const relacionTaller6 = relaciones.find(rel => rel.id_taller === 6);
        
        if (relacionTaller6) {
          setUserTallerRelation(relacionTaller6);
        } else {
          console.log('No existe relación usuario-taller para el taller 6');
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
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743643709/taller6slide1_k7u8lp.png", 
      text: "Vamos a programar el mBot para que siga una línea negra como un auto de carreras. ¡Será su primera competencia! 🏁",
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743643712/taller6slide2_u2hzcm.png", 
      text: "Necesitamos: el mBot listo y conectado a la computadora (por USB o Bluetooth). ¡Preparados para la acción! ⚡",
    },
    {
      id: 3,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743643711/taller6slide3_db2iow.png", 
      text: "¡Esta es la pista que usaremos! El mBot la recorrerá siguiendo la línea negra. ¿Logrará llegar hasta el final? 🚗",
    },
    {
      id: 4,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743643728/taller6slide4_bpm7n1.png", 
      text: "Este sensor es el ‘ojo’ del mBot. Detecta la línea negra y lo guía como un detective siguiendo pistas. 🕵️",
    },
    {
      id: 5,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743643719/taller6slide5_ptgm16.png", 
      text: "Vamos a abrir Mblock, el programa donde crearemos el código para el mBot. ¡Es hora de empezar a programar! 💻",
    },
    {
      id: 6,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743643722/taller6slide6_izj31g.png", 
      text: "¿Cómo lo conectamos? Bluetooth es como magia sin cables, y el USB es como una conexión de nave espacial. 🚀",
    },
    {
      id: 7,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743643718/taller6slide7_v3sqs8.png", 
      text: "Paso 1: Conecta el USB al mBot → ¡CLICK! Paso 2: Al computador → ¡ZAS! Listo para programar. ✨",
    },
    {
      id: 8,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743643724/taller6slide8_pkcgca.png", 
      text: "Pedro tiene los cables listos. ¡Sigamos sus pasos para conectar el mBot y empezar la diversión! 🤖",
    },
    {
      id: 9,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743643723/taller6slide9_u30qaq.png", 
      text: "En la computadora, busca la opción de dispositivos y selecciona el mBot. ¡Es muy fácil! 🔍",
    },
    {
      id: 10,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743643662/taller6slide10_n6abmj.png", 
      text: "¡Haz clic en ‘Conectar’! No olvides encender el mBot. ¿Listos para la carrera? 🏎️",
    },
    {
      id: 11,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743643702/taller6slide11_qrixxh.png", 
      text: "Si aparece ‘conectado’, ¡todo está listo! Ahora el mBot obedecerá tus comandos. ¡A programar! 🎮",
    },
    {
      id: 12,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743643703/taller6slide12_fj7jm5.png", 
      text: "Antes de programar, cambia el modo del robot a ‘Cargar’. ¡Sin esto, el mBot no podrá moverse solo! ⚠️",
    },
    {
      id: 13,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743643704/taller6slide13_cfisbf.png", 
      text: "Pedro te mostrará los bloques que necesitas para crear el código. ¡Es como armar un rompecabezas mágico! 🧩",
    },
    {
      id: 14,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743643706/taller6slide14_x91tzt.png", 
      text: "Así debe quedar tu código. Con estos bloques, el mBot seguirá la pista como un campeón. ¡Tú puedes! 💪",
    },
    {
      id: 15,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743643714/taller6slide15_tqcllr.png", 
      text: "Sube el código al mBot y colócalo en la pista. ¿Logrará seguir la línea sin salirse? ¡A ver qué pasa! 🤔",
    },
    {
      id: 16,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743643715/taller6slide16_ykaiso.png", 
      text: "¡Es hora de hacerlo más rápido y divertido! Ajusta su velocidad y añade luces o sonidos. 🎨🔊",
    },
    {
      id: 17,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743643708/taller6slide17_wz2uws.png", 
      text: "Personaliza tu mBot: elige su velocidad, añade luces de colores y sonidos. ¡Que sea único! ✨🚀",
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

  const handleCreditosClick = async () => {
    playClick();
    setTimeout(async () => {
      try {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (!currentUser) {
          throw new Error('Usuario no autenticado');
        }

        if (userTallerRelation && userTallerRelation.id_taller === 6) {
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
              id_taller: 6,
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
      navigate('/Tema6');
    }, 200);
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
          className="w-full h-auto max-h-[300px] md:max-h-[600px] object-fill rounded-md"
        />
      </div>

      {/* Botón de volver */}
      <button
        onClick={handleNavigationWithSound}
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
        <div className="hidden md:flex ">
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

export default Pagina4Informacion6;