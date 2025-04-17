import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useSound from 'use-sound';

const TallerDinamicoInformacion = () => {
  const navigate = useNavigate();
  const { tallerId } = useParams();
  const [taller, setTaller] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [playClick] = useSound(
    'https://res.cloudinary.com/dufzsv87k/video/upload/v1744909247/ClickSound.mp3',
    { volume: 1.0 }
  );

  useEffect(() => {
    const fetchTaller = async () => {
      try {
        const response = await fetch(`https://api-aws-ndou.onrender.com/talleres/${tallerId}`);
        if (!response.ok) {
          throw new Error('No se pudo cargar el taller');
        }
        const data = await response.json();
        setTaller(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTaller();
  }, [tallerId]);

  const handleCircleClick = (index) => {
    playClick();
    setActiveIndex(index);
  };

  const handlePrevSlide = () => {
    playClick();
    if (activeIndex > 0) {
      setActiveIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNextSlide = () => {
    playClick();
    if (activeIndex < (taller?.slides?.length || 0) - 1) {
      setActiveIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleDownloadImage = async () => {
    playClick();
    if (taller?.slides && activeIndex === taller.slides.length - 1) {
      try {
        const imageUrl = "https://res.cloudinary.com/dufzsv87k/image/upload/v1743292018/pueblo.png";
        const response = await fetch(imageUrl);
        const blob = await response.blob();
        const blobUrl = window.URL.createObjectURL(blob);
        
        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = 'Pueblo-taller.png';
        document.body.appendChild(link);
        link.click();
        
        document.body.removeChild(link);
        window.URL.revokeObjectURL(blobUrl);
      } catch (error) {
        console.error('Error al descargar la imagen:', error);
      }
    }
  };

  const handleNavigationWithSound = (path) => {
    playClick();
    setTimeout(() => {
      navigate(path);
    }, 200);
  };

  const handleCreditosClick = async () => {
    playClick();
    try {
      const currentUser = JSON.parse(localStorage.getItem('studentUser') || localStorage.getItem('teacherUser') || '{}');
      if (!currentUser?.id) {
        throw new Error('Usuario no autenticado');
      }
      setTimeout(() => {
        navigate('/Creditos');
      }, 200);
    } catch (error) {
      console.error('Error al manejar créditos:', error);
      setTimeout(() => {
        navigate('/Creditos');
      }, 200);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#007B3E]"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-red-500 text-lg">{error}</div>
      </div>
    );
  }

  if (!taller || !taller.slides || taller.slides.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-gray-500 text-lg">No se encontraron slides para este taller</div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row p-4 bg-white gap-4 relative">
      {/* Columna izquierda */}
      <div className="w-full md:w-1/4 flex flex-col gap-4">
        {/* Introducción arriba a la izquierda */}
        <div className="border h-16 flex justify-center items-center rounded-md">
          <h2 className="text-2xl font-bold">{taller.slides[activeIndex].titulo}</h2>
        </div>

        {/* Texto debajo de Introducción */}
        <div className="border flex-1 flex justify-center items-center rounded-md p-4 overflow-y-auto max-h-[400px] md:max-h-[480px]">
          <p className="text-gray-700 text-center">
            {taller.slides[activeIndex].descripcion}
          </p>
        </div>
      </div>

      {/* Columna derecha con la imagen */}
      <div className="w-full md:w-3/4 border flex justify-center items-center rounded-md p-4 max-h-[400px] md:max-h-[560px]">
        <img
          src={taller.slides[activeIndex].imagenUrl}
          alt="imagen taller creado no encontrada o corrupta"
          className={`w-full h-auto max-h-[300px] md:max-h-[600px] object-fill rounded-md ${
            activeIndex === taller.slides.length - 1 ? 'cursor-pointer hover:opacity-80' : ''
          }`}
          onClick={handleDownloadImage}
        />
      </div>

      {/* Botón de volver */}
      <button
        onClick={() => handleNavigationWithSound(`/Tema/${tallerId}`)}
        className="fixed md:absolute bottom-4 left-4 bg-[#007B3E] text-white px-4 py-2 rounded hover:bg-[#009e4f] transition-colors cursor-pointer"
      >
        Volver
      </button>

      {/* Botón de créditos */}
      <button
        onClick={handleCreditosClick}
        className="fixed md:absolute bottom-4 right-4 bg-[#007B3E] text-white px-4 py-2 rounded hover:bg-[#009e4f] transition-colors cursor-pointer duration-300"
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
              : 'bg-[#007B3E] hover:bg-[#009e4f] duration-300'
          } text-white`}
        >
          ←
        </button>

        {/* Círculos de navegación (solo en PC) */}
        <div className="hidden md:flex ">
          {taller.slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => handleCircleClick(index)}
              className={`w-4 h-4 rounded-full mx-1 hover:bg-[#009e4f] transition-colors duration-300 ${
                index === activeIndex ? 'bg-[#007B3E] cursor-pointer duration-300' : 'bg-gray-300 cursor-pointer duration-300'
              }`}
            ></button>
          ))}
        </div>

        {/* Flecha derecha (solo en móvil) */}
        <button
          onClick={handleNextSlide}
          className={`md:hidden px-4 py-2 rounded transition-colors left-[40%] transform -translate-x-1/4 ${
            activeIndex === taller.slides.length - 1
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-[#007B3E] hover:bg-[#009e4f] duration-300'
          } text-white`}
        >
          →
        </button>
      </div>
    </div>
  );
};

export default TallerDinamicoInformacion;