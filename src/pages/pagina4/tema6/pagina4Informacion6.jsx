import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Pagina4Informacion6 = () => {
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
      text: "",
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743643712/taller6slide2_u2hzcm.png", 
      text: "",
    },
    {
      id: 3,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743643711/taller6slide3_db2iow.png", 
      text: "",
    },
    {
      id: 4,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743643728/taller6slide4_bpm7n1.png", 
      text: "",
    },
    {
      id: 5,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743643719/taller6slide5_ptgm16.png", 
      text: "",
    },
    {
      id: 6,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743643722/taller6slide6_izj31g.png", 
      text: "",
    },
    {
      id: 7,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743643718/taller6slide7_v3sqs8.png", 
      text: "",
    },
    {
      id: 8,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743643724/taller6slide8_pkcgca.png", 
      text: "",
    },
    {
      id: 9,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743643723/taller6slide9_u30qaq.png", 
      text: "",
    },
    {
      id: 10,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743643662/taller6slide10_n6abmj.png", 
      text: "",
    },
    {
      id: 11,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743643702/taller6slide11_qrixxh.png", 
      text: "",
    },
    {
      id: 12,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743643703/taller6slide12_fj7jm5.png", 
      text: "",
    },
    {
      id: 13,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743643704/taller6slide13_cfisbf.png", 
      text: "",
    },
    {
      id: 14,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743643706/taller6slide14_x91tzt.png", 
      text: "",
    },
    {
      id: 15,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743643714/taller6slide15_tqcllr.png", 
      text: "",
    },
    {
      id: 16,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743643715/taller6slide16_ykaiso.png", 
      text: "",
    },
    {
      id: 17,
      image: "https://res.cloudinary.com/dufzsv87k/image/upload/v1743643708/taller6slide17_wz2uws.png", 
      text: "",
    },
  ];

  // Función para manejar el cambio de slide
  const handleCircleClick = (index) => {
    setActiveIndex(index);
  };

  // Función para ir al slide anterior (no retrocede más allá del primer slide)
  const handlePrevSlide = () => {
    if (activeIndex > 0) {
      setActiveIndex((prevIndex) => prevIndex - 1);
    }
  };

  // Función para ir al siguiente slide (no avanza más allá del último slide)
  const handleNextSlide = () => {
    if (activeIndex < slides.length - 1) {
      setActiveIndex((prevIndex) => prevIndex + 1);
    }
  };

  // Función para manejar el clic en créditos
  const handleCreditosClick = async () => {
    try {
      const currentUser = JSON.parse(localStorage.getItem('currentUser'));
      if (!currentUser) {
        throw new Error('Usuario no autenticado');
      }

      // Si ya existe la relación para el taller 6, actualizarla
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
        // Si no existe la relación para el taller 6, crearla
        const createResponse = await fetch('https://prueba-api-recurso-educativo.onrender.com/api/v1/usuarios-talleres', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id_usuario: currentUser.id,
            id_taller: 6, // Asegurando que solo se cree para el taller 6
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

        {/* Texto debajo de Introducción, centrado en la columna izquierda */}
        <div className="border flex-1 flex justify-center items-center rounded-md p-4 overflow-y-auto max-h-[400px] md:max-h-[480px]">
          <p className="text-gray-700 text-center">{slides[activeIndex].text}</p>
        </div>
      </div>

      {/* Columna derecha con la imagen */}
      <div className="w-full md:w-3/4 border flex justify-center items-center rounded-md p-4 max-h-[400px] md:max-h-[560px]">
        {/* Imagen */}
        <img
          src={slides[activeIndex].image} // Imagen correspondiente al slide activo
          alt={`Imagen ${activeIndex + 1}`}
          className="w-full h-auto max-h-[300px] md:max-h-[600px] object-fill rounded-md"
        />
      </div>

      {/* Botón de volver */}
      <button
        onClick={() => navigate('/Tema6')}
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
              ? 'bg-gray-300 cursor-not-allowed' // Deshabilitado en el primer slide
              : 'bg-[#007B3E] hover:bg-[#009e4f]' // Habilitado en otros slides
          } text-white`}
        >
          ←
        </button>

        {/* Círculos de navegación (solo en PC) */}
        <div className="hidden md:flex">
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
              ? 'bg-gray-300 cursor-not-allowed' // Deshabilitado en el último slide
              : 'bg-[#007B3E] hover:bg-[#009e4f]' // Habilitado en otros slides
          } text-white`}
        >
          →
        </button>
      </div>
    </div>
  );
};

export default Pagina4Informacion6;