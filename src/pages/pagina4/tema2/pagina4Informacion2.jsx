import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useSound from 'use-sound';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

const Pagina4Informacion2 = () => {
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

        const response = await fetch(`https://prueba-api-recurso-educativo.onrender.com/api/v1/usuarios-talleres?id_usuario=${currentUser.id}&id_taller=2`);
        
        if (!response.ok) {
          throw new Error('Error al verificar la relación usuario-taller');
        }

        const relaciones = await response.json();
        const relacionTaller2 = relaciones.find(rel => rel.id_taller === 2);
        
        if (relacionTaller2) {
          setUserTallerRelation(relacionTaller2);
        } else {
          console.log('No existe relación usuario-taller para el taller 2');
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
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743642227/taller2slide1_dot4ii.png",
      text: "En este taller, aprenderemos a armar el mBot, un robot educativo junto con Pedro. Conoceremos sus componentes y las herramientas necesarias para construirlo.",
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743642204/taller2slide2_v2wxz6.png",
      text: "Exploraremos los componentes del mBot, como el chasis, los motores, la placa, la minirueda, las ruedas, el destornillador, etc. Aprenderemos la función de cada uno y cómo se conectan.",
    },
    {
      id: 3,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743642206/taller2slide3_fh4qwh.png",
      text: "Otras piezas más, como el sensor de ultrasonido, los pernos, el sensor seguidor de línea, el cable RJ-25, el cable USB y los tornillos. Aprenderemos la función de cada uno y cómo se conectan.",
    },
    {
      id: 4,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743642204/taller2slide4_u9zdsu.png",
      text: "Otras piezas más como las tuercas, el control, el destornillador, el compartimiento para las baterías, los tornillos pequeños y medianos.",
    },
    {
      id: 5,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743642201/taller2slide5_g8qyhu.png",
      text: "Seguiremos las instrucciones que nos indicará Pedro para armar el chasis y fijar las ruedas. Aseguraremos que los motores estén correctamente conectados. Instalaremos los sensores, como el seguidor de línea y el sensor de ultrasonido, en sus lugares correctos. Y por último, conectaremos los cables a la placa controladora.",
    },
    {
      id: 6,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743642214/taller2slide6_lcibup.png",
      text: "Observa cómo Pedro nos indica cómo poner el motor izquierdo sobre el chasis.",
    },
    {
      id: 7,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743642220/taller2slide7_u9gfee.png",
      text: "Mira cómo Pedro colocó las tuercas y los tornillos para asegurar que el motor quede fijo en el chasis.",
    },
    {
      id: 8,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743642215/taller2slide8_kuaqak.png",
      text: "Ahora solo es repetir de la misma manera con el motor derecho, como lo hizo Pedro.",
    },
    {
      id: 9,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743642217/taller2slide9_dmmiek.png",
      text: "Mira cómo Pedro tomó la rueda izquierda y la colocó en el chasis.",
    },
    {
      id: 10,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743642224/taller2slide10_bmtvdm.png",
      text: "Pedro repitió con la rueda derecha y se aseguró de colocar los tornillos y asegurarlos con las tuercas para que estas queden fijas al chasis.",
    },
    {
      id: 11,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743642227/taller2slide11_qymiq9.png",
      text: "Observa cómo Pedro tomó el seguidor de líneas y lo puso en el chasis del mBot.",
    },
    {
      id: 12,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743642200/taller2slide12_zryzja.png",
      text: "Ahora Pedro puso la minirueda sobre el seguidor de líneas, como lo indica la imagen.",
    },
    {
      id: 13,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743642200/taller2slide13_grtr2h.png",
      text: "Pedro tomó el destornillador y aseguró el seguidor de líneas, como nos lo muestra.",
    },
    {
      id: 14,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743642203/taller2slide14_rvskeu.png",
      text: "Mira cómo Pedro tomó con sus patas el cable RJ-25 y lo conectó al seguidor de líneas.",
    },
    {
      id: 15,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743642201/taller2slide15_cbfiav.png",
      text: "Observa cómo Pedro tomó el sensor de ultrasonido y lo colocó sobre el chasis del mBot.",
    },
    {
      id: 16,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743642231/taller2slide16_wm79nr.png",
      text: "Ahora Pedro quiere indicarte cómo dejar fijo el sensor de ultrasonido al chasis utilizando los tornillos con el destornillador.",
    },
    {
      id: 17,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743642210/taller2slide17_pvro1f.png",
      text: "Pedro tomó otro cable RJ-25 y lo conectó al sensor de ultrasonido, tal y como nos lo muestra.",
    },
    {
      id: 18,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743642228/taller2slide18_r1zitl.png",
      text: "Mira cómo Pedro con sus patas tomó los 4 pernos y los colocó sobre el chasis del mBot.",
    },
    {
      id: 19,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743642207/taller2slide19_zkrzuz.png",
      text: "Observa cómo Pedro tomó el velcro y lo puso en la caja de las baterías y el chasis del mBot. Por último, colocó la caja de las baterías sobre el chasis, como se puede ver.",
    },
    {
      id: 20,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743642220/taller2slide20_athtah.png",
      text: "Ahora Pedro tomó la placa y la colocó sobre los pernos que anteriormente puso sobre el chasis del mBot.",
    },
    {
      id: 21,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743642209/taller2slide21_w9wljq.png",
      text: "Pedro se asegura de que la placa quede fija al chasis, poniendo los tornillos y conectándola a los pernos, asegurándose de que esta quede fija.",
    },
    {
      id: 22,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743642221/taller2slide22_s9jyaj.png",
      text: "Como puedes ver, Pedro notó que quedan algunos cables que conectar a la placa de los sensores, así que él se tomó la molestia de mostrarte cómo conectarlos a la placa.",
    },
    {
      id: 23,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743642212/taller2slide23_hwvmwi.png",
      text: "Pedro tomó los cables de los motores y los conectó a las placas para que funcionen, aquí te muestra cómo deben ir conectados.",
    },
    {
      id: 24,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743642210/taller2slide24_aoiqra.png",
      text: "Por último, aquí Pedro te enseña cómo conectar el cable de las pilas a la placa para que nuestro mBot funcione y estaría completamente armado.",
    },
    {
      id: 25,
      title: "🚀 Este es el resultado final del taller 🤖",
      videoUrl: "https://res.cloudinary.com/dufzsv87k/video/upload/v1745966568/TallerVideo2.mp4",
      text: "¡Aquí verás el resultado final del taller! 🎥✨ ¿Lograste armar correctamente tu mBot? ¡Compara tu resultado con el nuestro! 🏆",
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

  // 2. Actualiza la función handleConfirmNext
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

        if (userTallerRelation && userTallerRelation.id_taller === 2) {
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
              id_taller: 2,
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
      navigate('/Tema2');
    }, 200);
  };

  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };
  
  const particlesOptions = {
    fpsLimit: 60,
    particles: {
      number: {
        value: 150, // Aumenta el número de partículas para más efecto
        density: {
          enable: true,
          area: 800
        }
      },
      color: {
        value: ["#FF0000", "#00FF00", "#0000FF", "#FFA500", "#800080", "#00FFFF", "#FFD700", "#FF1493", "#00FF7F"]
      },
      shape: {
        type: ["circle", "square", "triangle"], // Variedad de formas
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
        speed: 6, // Más velocidad para efecto más dinámico
        direction: "none",
        random: true,
        straight: false,
        outModes: {
          default: "destroy", // Las partículas desaparecen al salir
          bottom: "bounce"
        },
        gravity: {
          enable: true,
          acceleration: 0.5 // Gravedad para que caigan como confeti
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

export default Pagina4Informacion2;