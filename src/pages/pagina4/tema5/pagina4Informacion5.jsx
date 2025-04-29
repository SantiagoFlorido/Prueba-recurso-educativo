import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useSound from 'use-sound';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

const Pagina4Informacion5 = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [userTallerRelation, setUserTallerRelation] = useState(null);
  const [playClick] = useSound(
    'https://res.cloudinary.com/dufzsv87k/video/upload/v1744909247/ClickSound.mp3',
    { volume: 1.0 }
  );
  const [playCongratulations] = useSound(
    'https://res.cloudinary.com/dufzsv87k/video/upload/v1745779517/congratulationsSound.mp3',
    { volume: 0.8 }
  );
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [randomMessage, setRandomMessage] = useState('');
  const [targetIndex, setTargetIndex] = useState(0);
  const [showParticles, setShowParticles] = useState(false);
  const [isSoundPlaying, setIsSoundPlaying] = useState(false);
  const [particlesKey, setParticlesKey] = useState(0);

  const motivationalMessages = [
    { text: "¡Ya lo hiciste! 😊 ¿Listo para el siguiente paso?", emoji: "🎉" },
    { text: "¡Increíble trabajo! 👏 ¿Quieres continuar aprendiendo?", emoji: "✨" },
    { text: "¡Eres un genio! 🤩 ¿Pudiste hacerlo?", emoji: "🌟" },
    { text: "¡Lo lograste! 🥳 ¿Listo para el siguiente desafío?", emoji: "💪" },
    { text: "¡Fantástico! 😄 ¿Aprendiste algo nuevo?", emoji: "🌈" },
    { text: "¡Excelente trabajo! 👍 ¿Quieres seguir adelante?", emoji: "🚀" },
    { text: "¡Muy bien hecho! 😍 ¿Te gustó esta parte?", emoji: "❤️" }
  ];

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
      text: "Este sensor es el 'anti-choques' del mBot. ¡Detecta objetos y lo hace esquivar como un ninja! ⚡",
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
      text: "¡Clic en 'Conectar'! No olvides encender el mBot antes. ¿Listos para la acción? 🤖",
    },
    {
      id: 9,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743643128/taller5slide9_kxo9aq.png", 
      text: "Si aparece 'conectado', ¡éxito! Ahora el mBot obedecerá tus comandos. ¡A programar! 💻",
    },
    {
      id: 10,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743643130/taller5slide10_bgisov.png", 
      text: "Antes de empezar, cambia el modo del robot a 'Cargar'. Sin esto, no podrá moverse solo. ¡Pedro te lo recuerda!",
    },
    {
      id: 11,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743643132/taller5slide11_e79imv.png", 
      text: "Usa bloques de 'Eventos' y 'Control' para crear tu código. ¡Arrastra, suelta y haz que el mBot cobre vida!",
    },
    {
      id: 12,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743643133/taller5slide12_nmyzge.png", 
      text: "Si seguiste los pasos, tu código se verá así. ¡Buen trabajo! Ahora, añadiremos más habilidades al mBot.",
    },
    {
      id: 13,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743643135/taller5slide13_ctnhkh.png", 
      text: "Programa al mBot para que reaccione ante obstáculos: 'Si hay algo cerca → retrocede; si no → avanza'. ¡Fácil y divertido!",
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
    {
      id: 17,
      title: "🚀 Este es el resultado final del taller 🤖",
      videoUrl: "https://res.cloudinary.com/dufzsv87k/video/upload/v1745966379/TallerVideo5.mp4",
      text: "¡Aquí verás el resultado final del taller! 🎥✨ ¿Lograste que tu mBot esquive obstáculos correctamente? ¡Compara tu solución con la nuestra! 🏆",
      isVideoSlide: true,
      isLastSlide: true
    }
  ];

  const handleCircleClick = (index) => {
    if (isSoundPlaying) return; // No hacer nada si el sonido está reproduciéndose
    
    playClick();
    
    if (index > 0 && index !== activeIndex) {
      const randomIndex = Math.floor(Math.random() * motivationalMessages.length);
      setRandomMessage(motivationalMessages[randomIndex]);
      setShowConfirmationModal(true);
      setTargetIndex(index);
    } else if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  const handlePrevSlide = () => {
    if (isSoundPlaying || activeIndex === 0) return;
    
    playClick();
    
    if (activeIndex > 0) {
      const randomIndex = Math.floor(Math.random() * motivationalMessages.length);
      setRandomMessage(motivationalMessages[randomIndex]);
      setShowConfirmationModal(true);
      setTargetIndex(activeIndex - 1);
    }
  };
  
  const handleNextSlide = () => {
    if (isSoundPlaying || activeIndex === slides.length - 1) return;
    
    playClick();
    
    if (activeIndex >= 0) {
      const randomIndex = Math.floor(Math.random() * motivationalMessages.length);
      setRandomMessage(motivationalMessages[randomIndex]);
      setShowConfirmationModal(true);
      setTargetIndex(activeIndex + 1);
    }
  };

  const handleConfirmNext = () => {
    playClick();
    setIsSoundPlaying(true); // Bloquea interacciones
    
    setTimeout(() => {
      playCongratulations();
      // Reiniciamos completamente las partículas
      setShowParticles(false);
      setParticlesKey(prev => prev + 1);
      setTimeout(() => {
        setShowParticles(true);
      }, 50);
      
      // Desactiva después de 5 segundos (ajusta según duración del sonido)
      setTimeout(() => {
        setShowParticles(false);
        setIsSoundPlaying(false); // Libera interacciones
      }, 7000);
      
    }, 200);
  
    setShowConfirmationModal(false);
    setActiveIndex(targetIndex);
  };

  const handleCancelNext = () => {
    playClick();
    setShowConfirmationModal(false);
  };

  const handleCreditosClick = async () => {
    playClick();
    setTimeout(async () => {
      try {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (!currentUser) {
          throw new Error('Usuario no autenticado');
        }

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
          const createResponse = await fetch('https://prueba-api-recurso-educativo.onrender.com/api/v1/usuarios-talleres', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              id_usuario: currentUser.id,
              id_taller: 5,
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
      navigate('/Tema5');
    }, 200);
  };

  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };
  
  const particlesOptions = {
    fpsLimit: 60,
    particles: {
      number: {
        value: 150,
        density: {
          enable: true,
          area: 800
        }
      },
      color: {
        value: ["#FF0000", "#00FF00", "#0000FF", "#FFA500", "#800080", "#00FFFF", "#FFD700", "#FF1493", "#00FF7F"]
      },
      shape: {
        type: ["circle", "square", "triangle"],
        options: {
          circle: {
            fill: true
          },
          square: {
            fill: true
          },
          triangle: {
            fill: true
          }
        }
      },
      opacity: {
        value: 0.7,
        random: true,
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 0.1,
          sync: false
        }
      },
      size: {
        value: 8,
        random: true,
        animation: {
          enable: true,
          speed: 4,
          minimumValue: 0.1,
          sync: false
        }
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        random: true,
        straight: false,
        outModes: {
          default: "destroy",
          bottom: "bounce"
        },
        gravity: {
          enable: true,
          acceleration: 0.5
        },
        decay: 0.1,
        bounce: {
          horizontal: {
            random: {
              enable: true,
              minimumValue: 0.1
            }
          },
          vertical: {
            random: {
              enable: true,
              minimumValue: 0.1
            }
          }
        }
      }
    },
    interactivity: {
      detectsOn: "window",
      events: {
        onClick: {
          enable: true,
          mode: "push"
        }
      }
    },
    emitters: {
      position: {
        x: 50,
        y: 30
      },
      rate: {
        delay: 0.1,
        quantity: 10
      },
      size: {
        width: 100,
        height: 10
      }
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row p-4 bg-white gap-4 relative md:items-stretch">
      {showParticles && (
        <div className="fixed inset-0 z-40 pointer-events-none" key={`particles-${particlesKey}`}>
          <Particles
            id={`tsparticles-${particlesKey}`}
            init={particlesInit}
            options={particlesOptions}
          />
        </div>
      )}
      <div className="flex flex-col md:flex-row gap-4 flex-1 mb-14">
        {/* Columna izquierda - Texto */}
        <div className="w-full md:w-1/4 flex flex-col gap-4 h-full">
          {/* Título "Introducción" */}
          <div className="border h-16 flex justify-center items-center rounded-md">
            <h2 className="text-2xl font-bold">Introducción</h2>
          </div>

          {/* Contenedor del texto del slide */}
          <div className="border flex-1 flex justify-center items-center rounded-md p-4 overflow-y-auto">
            <p className="text-gray-700 text-center">{slides[activeIndex].text}</p>
          </div>
        </div>

        {/* Columna derecha - Imagen o Video */}
        <div className={`w-full md:w-3/4 border flex justify-center items-center rounded-md p-0 h-full overflow-hidden ${
          slides[activeIndex].isLastSlide ? 'bg-white border-black' : ''
        }`}>
          {slides[activeIndex].isVideoSlide ? (
            <div className="w-full h-full flex flex-col">
              <div className="w-full bg-[#007B3E] p-2 text-center">
                <h2 className="text-xl font-bold text-white">{slides[activeIndex].title}</h2>
              </div>
              <div className="flex-1 flex items-center justify-center bg-white">
                {slides[activeIndex].videoUrl ? (
                  <video 
                    controls 
                    className="w-full h-full max-h-[470px] object-contain"
                  >
                    <source src={slides[activeIndex].videoUrl} type="video/mp4" />
                    Tu navegador no soporta el elemento de video.
                  </video>
                ) : (
                  <div className="text-black text-center p-4">
                    <p>El video se agregará aquí próximamente</p>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <img
              src={slides[activeIndex].image}
              alt={`Imagen ${activeIndex + 1}`}
              className="w-full h-full max-h-[300px] md:max-h-[515px] object-contain rounded-md"
            />
          )}
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
        disabled={activeIndex !== slides.length - 1}
        className={`fixed md:absolute bottom-4 right-4 px-4 py-2 rounded transition-colors cursor-not-allowed ${
          activeIndex === slides.length - 1 
            ? 'bg-[#007B3E] hover:bg-[#009e4f] text-white cursor-pointer' 
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
      >
        Créditos
      </button>

      <div className="fixed md:absolute bottom-4 left-1/2 transform -translate-x-1/2 flex justify-center items-center gap-4">
        <button
          onClick={handlePrevSlide}
          className={`md:hidden px-4 py-2 rounded transition-colors ${
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
              className={`w-4 h-4 rounded-full mx-1 transition-colors duration-300 ${
                index === activeIndex 
                  ? slides[index].isLastSlide 
                    ? 'bg-red-500 cursor-pointer duration-300' 
                    : 'bg-[#007B3E] cursor-pointer duration-300'
                  : index === slides.length - 1
                    ? 'bg-red-500 hover:bg-red-400 cursor-pointer'
                    : 'bg-gray-300 hover:bg-[#009e4f] cursor-pointer'
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

      {/* Modal de confirmación */}
      {showConfirmationModal && (
        <div className="fixed inset-0 bg-transparent bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full border-1 border-black">
            <h3 className="text-xl font-bold mb-2 text-center">
              {randomMessage.emoji} {randomMessage.text}
            </h3>
            <div className="flex justify-center space-x-4 mt-6">
              <button
                onClick={handleCancelNext}
                className="bg-gray-300 text-gray-700 px-6 py-2 rounded hover:bg-gray-400 transition-colors cursor-pointer"
              >
                Aún no
              </button>
              <button
                onClick={handleConfirmNext}
                className="bg-[#007B3E] text-white px-6 py-2 rounded hover:bg-[#009e4f] transition-colors cursor-pointer"
              >
                Continuar al seleccionado
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pagina4Informacion5;