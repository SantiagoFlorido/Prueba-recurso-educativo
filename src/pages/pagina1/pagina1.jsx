import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Estilos básicos de Swiper
import 'swiper/css/pagination'; // Estilos para la paginación (opcional)
import { Autoplay, Navigation } from 'swiper/modules'; // Módulos de Swiper
import { useNavigate } from 'react-router-dom';

const pagina1 = () => {
    const navigate = useNavigate();

  // Datos de las imágenes y descripciones
  const slides = [
    {
      image: 'https://res.cloudinary.com/dufzsv87k/image/upload/v1741305069/mapa_igu9fc.webp',
      description: 'Taller 1: El viaje de Pedro',
    },
    {
      image: 'https://res.cloudinary.com/dufzsv87k/image/upload/v1741305069/piezas_nemtfi.webp',
      description: 'Taller 2: Armando un Mbot',
    },
    {
      image: 'https://res.cloudinary.com/dufzsv87k/image/upload/v1741305067/conectar_iv5sdj.webp',
      description: 'Taller 3: Conectando un Mbot',
    },
    {
      image: 'https://res.cloudinary.com/dufzsv87k/image/upload/v1741305070/sensor4_yxeq9c.webp',
      description: 'Taller 4: Programando el sensor de ultrasonido de nuestro Mbot',
    },
    {
      image: 'https://res.cloudinary.com/dufzsv87k/image/upload/v1741305068/linea5_ixd3hm.webp',
      description: 'Taller 5: Programando el seguidor de linea de nuestro Mbot',
    },
  ];

  // Referencia para controlar Swiper
  const swiperRef = useRef(null);

  // Función para avanzar al siguiente slide
  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  // Función para retroceder al slide anterior
  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div className="bg-white p-4 h-screen flex flex-col">
      {/* Título y logo */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Recurso Educativo Digital</h1>
        <img src="https://res.cloudinary.com/dufzsv87k/image/upload/v1741305038/logo-titulo_gtcapj.png" alt="Logo 1" className="h-12" />
      </div>

      {/* Slider de imágenes */}
      <div className="flex-grow relative">
        <Swiper
          ref={swiperRef} // Referencia para controlar Swiper
          spaceBetween={30} // Espacio entre slides
          slidesPerView={1} // Número de slides visibles a la vez
          autoplay={{
            delay: 2000, // Cambia cada 2 segundos
            disableOnInteraction: false, // No se detiene al interactuar
          }}
          navigation={true} // Habilitar navegación (botones izquierda/derecha)
          modules={[Autoplay, Navigation]} // Módulos de Swiper
          className="h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-100 p-2 rounded-lg h-full flex flex-col justify-center">
                <img
                  src={slide.image}
                  alt={`Descripción ${index + 1}`}
                  className="w-full h-110 object-cover rounded-md"
                />
                <p className="mt-2 text-center text-sm">{slide.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Botones personalizados de navegación */}
        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-green-600 text-white p-2 rounded-full shadow-lg hover:bg-green-700 transition-colors z-10"
        >
          &lt; {/* Flecha izquierda */}
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-600 text-white p-2 rounded-full shadow-lg hover:bg-green-700 transition-colors z-10"
        >
          &gt; {/* Flecha derecha */}
        </button>
      </div>

      {/* Pie de página */}
      <div className="mt-6 text-center">
        <p className="text-xs text-green-600">www.ucundinamarca.edu.co | Vigilado minieducación</p>
      </div>

      {/* Botón "Siguiente" */}
      <button
        onClick={() => navigate('/Conexión')}
        className="fixed bottom-2 right-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-green-700 transition-colors"
      >
        Siguiente
      </button>
    </div>
  );
};

export default pagina1;