import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useSound from 'use-sound';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

const Pagina4Informacion7 = () => {
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

        const response = await fetch(`https://prueba-api-recurso-educativo-9x4o.onrender.com/api/v1/usuarios-talleres?id_usuario=${currentUser.id}&id_taller=7`);
        
        if (!response.ok) {
          throw new Error('Error al verificar la relación usuario-taller');
        }

        const relaciones = await response.json();
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
      text: "Haz clic en 'Conectar' y ¡no olvides encenderlo! El mBot está listo para obedecerte. 🤖",
    },
    {
      id: 9,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743644071/taller7slide9_wyrods.png", 
      text: "Si dice 'conectado', ¡perfecto! Ahora el mBot escuchará tus órdenes. ¡Vamos! 🚀",
    },
    {
      id: 10,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743644073/taller7slide10_tpvyov.png", 
      text: "Antes de empezar, pon el mBot en modo 'Cargar'. ¡Es como darle pilas para pensar! 🔋",
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
    {
      id: 14,
      title: "🚀 Este es el resultado final del taller 🤖",
      videoUrl: "https://res.cloudinary.com/dufzsv87k/video/upload/v1745966682/TallerVideo7.mp4",
      text: "¡Aquí verás el resultado final del taller! 🎥✨ ¿Lograste que tu mBot siga objetos correctamente? ¡Compara tu solución con la nuestra! 🏆",
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
      
      // Desactiva después de 7 segundos (ajusta según duración del sonido)
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

        if (userTallerRelation && userTallerRelation.id_taller === 7) {
          const updateResponse = await fetch(`https://prueba-api-recurso-educativo-9x4o.onrender.com/api/v1/usuarios-talleres/${userTallerRelation.id}/estado`, {
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
          const createResponse = await fetch('https://prueba-api-recurso-educativo-9x4o.onrender.com/api/v1/usuarios-talleres', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              id_usuario: currentUser.id,
              id_taller: 7,
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
      navigate('/Tema7');
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
            <p className="text-gray-700 text-center whitespace-pre-line">{slides[activeIndex].text}</p>
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

export default Pagina4Informacion7;