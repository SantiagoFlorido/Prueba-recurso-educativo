import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useSound from 'use-sound';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

const Pagina4Informacion3 = () => {
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

        const response = await fetch(`https://prueba-api-recurso-educativo.onrender.com/api/v1/usuarios-talleres?id_usuario=${currentUser.id}&id_taller=3`);
        
        if (!response.ok) {
          throw new Error('Error al verificar la relación usuario-taller');
        }

        const relaciones = await response.json();
        const relacionTaller3 = relaciones.find(rel => rel.id_taller === 3);
        
        if (relacionTaller3) {
          setUserTallerRelation(relacionTaller3);
        } else {
          console.log('No existe relación usuario-taller para el taller 3');
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
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743642677/taller3slide1_mpouhp.png",
      text: "En este taller, Pedro el panda nos enseñará cómo conectar el mBot a nuestra computadora y, así mismo, nos enseñará a moverlo usando las flechas del teclado. ¿Estás listo?",
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743642678/taller3slide2_l9alde.png",
      text: "Pedro nos dijo que necesitaríamos estas herramientas: tener nuestro mBot armado como se hizo en el anterior taller y tener el cable USB o conector Bluetooth que viene dentro del kit del mBot.",
    },
    {
      id: 3,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743642679/taller3slide3_vh7h80.png",
      text: "Ahora, Pedro necesita que tengamos abierta nuestra aplicación mBlock. ¿Ya la abriste?",
    },
    {
      id: 4,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743642680/taller3slide4_hfec3y.png",
      text: "Pon mucha atención a Pedro, nos está enseñando cómo funcionan estas herramientas para conectar nuestro mBot.",
    },
    {
      id: 5,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743642660/taller3slide5_vfbkon.png",
      text: "Escucha con atención a Pedro, nos está indicando cómo conectar el cable USB al mBot y a nuestra computadora.",
    },
    {
      id: 6,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743642661/taller3slide6_xggsyq.png",
      text: "Mira cómo Pedro tomó el conector Bluetooth y lo conectó a su computadora. Deberíamos de hacer lo mismo.",
    },
    {
      id: 7,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743642661/taller3slide7_zksu5w.png",
      text: "Observa con atención, Pedro nos va a enseñar a conectar el mBot.",
    },
    {
      id: 8,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743642674/taller3slide8_bzqohe.png",
      text: "En este caso, parece que Pedro hará la conexión por cable. Observa cómo seleccionó la opción por USB, y recuerda muy bien que nuestro mBot debe estar encendido y daremos un clic en conectar.",
    },
    {
      id: 9,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743642675/taller3slide9_w1rddv.png",
      text: "Observa cómo Pedro conectó con éxito su mBot. Veamos si también nosotros podemos hacerlo como él y verificamos nuestra conexión.",
    },
    {
      id: 10,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743642676/taller3slide10_wn19og.png",
      text: "Pedro tomó unos bloques del área de bloques. Observa con atención qué bloques hay que usar para mover nuestro mBot.",
    },
    {
      id: 11,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743642682/taller3slide11_gydmq2.png",
      text: "Mira cómo Pedro hizo más de estos bloques y ahora su mBot tiene muchas funciones para hacer con varios botones del teclado muchas cosas.",
    },
    {
      id: 12,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743642681/taller3slide12_qqiqdx.png",
      text: "Ya deberíamos saber cómo programar nuestro mBot. Pon mucha atención, ya que es hora de lograr un desafío con lo aprendido.",
    },
    {
      id: 13,
      title: "🚀 Este es el resultado final del taller 🤖",
      videoUrl: "https://res.cloudinary.com/dufzsv87k/video/upload/v1745966379/TallerVideo5.mp4",
      text: "¡Aquí verás el resultado final del taller! 🎥✨ ¿Lograste controlar tu mBot correctamente? ¡Compara tu solución con la nuestra! 🏆",
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

        if (userTallerRelation && userTallerRelation.id_taller === 3) {
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
              id_taller: 3,
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
      navigate('/Tema3');
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

export default Pagina4Informacion3;