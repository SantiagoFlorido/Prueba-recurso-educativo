import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useSound from 'use-sound';

const Pagina4Informacion5 = () => {
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

        const response = await fetch(`https://prueba-api-recurso-educativo.onrender.com/api/v1/usuarios-talleres?id_usuario=${currentUser.id}&id_taller=5`);
        
        if (!response.ok) {
          throw new Error('Error al verificar la relación usuario-taller');
        }

        const relaciones = await response.json();
        
        // Filtrar para obtener solo la relación con id_taller = 5
        const relacionTaller5 = relaciones.find(rel => rel.id_taller === 5);
        
        if (relacionTaller5) {
          setUserTallerRelation(relacionTaller5);
        } else {
          console.log('No existe relación usuario-taller para el taller 5');
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
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743643140/taller5slide1_bmti5o.png", 
      text: "Aprenderemos a programar el mBot para que evite obstáculos como un robot inteligente. ¡Usaremos su sensor de ultrasonidos como superpoder!",
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743643142/taller5slide2_i7zdjd.png", 
      text: "Necesitamos: el mBot ensamblado, una computadora (con cable USB o Bluetooth) y obstáculos pequeños. ¡Pedro el Panda nos guiará!",
    },
    {
      id: 3,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743643146/taller5slide3_ljubm2.png", 
      text: "Este sensor es el ‘anti-choques’ del mBot. ¡Detecta objetos y lo hace esquivar como un ninja! ⚡",
    },
    {
      id: 4,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743643143/taller5slide4_qpknwe.png", 
      text: "¿Bluetooth o cable? ¡Ambos son geniales! Bluetooth es como magia sin cables, y el USB es como conectar una nave espacial. 🚀",
    },
    {
      id: 5,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743643148/taller5slide5_wy0rzx.png", 
      text: "Paso 1: Conecta el USB al mBot → ¡CLICK! Paso 2: Al computador → ¡ZAS! Conexión lista. ✨",
    },
    {
      id: 6,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743643149/taller5slide6_okro00.png", 
      text: "Pedro tiene los cables listos. ¡Sigamos sus pasos para conectar el mBot correctamente!",
    },
    {
      id: 7,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743643127/taller5slide7_fqe8ty.png", 
      text: "En la computadora, busca la opción de dispositivos y… ¡selecciona el mBot! Es fácil como elegir un juego.",
    },
    {
      id: 8,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743643128/taller5slide8_lmqkct.png", 
      text: "¡Clic en ‘Conectar’! No olvides encender el mBot antes. ¿Listos para la acción? 🤖",
    },
    {
      id: 9,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743643128/taller5slide9_kxo9aq.png", 
      text: "Si aparece ‘conectado’, ¡éxito! Ahora el mBot obedecerá tus comandos. ¡A programar! 💻",
    },
    {
      id: 10,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743643130/taller5slide10_bgisov.png", 
      text: "Antes de empezar, cambia el modo del robot a ‘Cargar’. Sin esto, no podrá moverse solo. ¡Pedro te lo recuerda!",
    },
    {
      id: 11,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743643132/taller5slide11_e79imv.png", 
      text: "Usa bloques de ‘Eventos’ y ‘Control’ para crear tu código. ¡Arrastra, suelta y haz que el mBot cobre vida!",
    },
    {
      id: 12,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743643133/taller5slide12_nmyzge.png", 
      text: "Si seguiste los pasos, tu código se verá así. ¡Buen trabajo! Ahora, añadiremos más habilidades al mBot.",
    },
    {
      id: 13,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743643135/taller5slide13_ctnhkh.png", 
      text: "Programa al mBot para que reaccione ante obstáculos: ‘Si hay algo cerca → retrocede; si no → avanza’. ¡Fácil y divertido!",
    },
    {
      id: 14,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743643135/taller5slide14_c18asj.png", 
      text: "¡Código listo! Ahora toca probarlo en el mBot. ¿Funcionará como un ninja? 🤖✨",
    },
    {
      id: 15,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743643137/taller5slide15_dgdnmi.png", 
      text: "Sube el código al mBot y colócalo en un espacio libre. ¡Prepárate para verlo esquivar obstáculos como un campeón!",
    },
    {
      id: 16,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743643139/taller5slide16_wamvr4.png", 
      text: "Crea un circuito con obstáculos y programa al mBot para que los esquive. ¡El equipo más creativo gana! 🏆 ¿Listos?",
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

        // Si ya existe la relación para el taller 5, actualizarla
        if (userTallerRelation && userTallerRelation.id_taller === 5) {
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
          // Si no existe la relación para el taller 5, crearla
          const createResponse = await fetch('https://prueba-api-recurso-educativo.onrender.com/api/v1/usuarios-talleres', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              id_usuario: currentUser.id,
              id_taller: 5, // Asegurando que solo se cree para el taller 5
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
      navigate('/Tema5');
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

export default Pagina4Informacion5;