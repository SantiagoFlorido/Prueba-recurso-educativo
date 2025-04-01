import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Estilos básicos de Swiper
import 'swiper/css/pagination'; // Estilos para la paginación (opcional)
import { Autoplay, Navigation } from 'swiper/modules'; // Módulos de Swiper
import { useNavigate } from 'react-router-dom';

const Pagina1 = () => {
  const navigate = useNavigate();

  // Verificar si hay sesión activa
  const isLoggedIn = localStorage.getItem('studentUser') || localStorage.getItem('teacherUser');

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
      description: 'Taller 3: Conectando un Mbot al PC',
    },
    {
      image: '',
      description: 'Taller 4: Conectando un Mbot al celular',
    },
    {
      image: 'https://res.cloudinary.com/dufzsv87k/image/upload/v1741305070/sensor4_yxeq9c.webp',
      description: 'Taller 5: Programando el sensor de ultrasonido de nuestro Mbot',
    },
    {
      image: 'https://res.cloudinary.com/dufzsv87k/image/upload/v1741305068/linea5_ixd3hm.webp',
      description: 'Taller 6: Programando el seguidor de linea de nuestro Mbot',
    },
  ];

  // Referencia para controlar Swiper
  const swiperRef = useRef(null);

  // Función para avanzar al siguiente slide
  const handleNext = () => {
    swiperRef.current?.swiper?.isEnd 
      ? swiperRef.current.swiper.slideTo(0)
      : swiperRef.current?.swiper?.slideNext();
  };
  // Función para retroceder al slide anterior
  const handlePrev = () => {
    swiperRef.current?.swiper?.isBeginning 
      ? swiperRef.current.swiper.slideTo(slides.length - 1)
      : swiperRef.current?.swiper?.slidePrev();
  };

  return (
    <div className="bg-white p-4 h-screen flex flex-col">
      {/* Título y logo */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 md:mb-6">
        <div className="flex items-center gap-2 md:gap-0 w-full md:w-auto">
          <h1 className="text-xl md:text-2xl font-bold break-words mr-2 md:mr-0  w-1/2 md:w-auto">
            Recurso Educativo Digital
          </h1>
          {/* Logos en mobile (aparecen junto al título) */}
          <div className="flex items-center gap-2 md:hidden">
            <img
              src="https://res.cloudinary.com/dufzsv87k/image/upload/v1743288905/logoeludec_qcilsr.png"
              alt="Logo 1"
              className="h-8"
            />
            <img
              src="https://res.cloudinary.com/dufzsv87k/image/upload/v1741305038/logo-titulo_gtcapj.png"
              alt="Logo 2"
              className="h-8"
            />
          </div>
        </div>
        
        {/* Logos en desktop (aparecen a la derecha) */}
        <div className="hidden md:flex items-center gap-4">
          <img
            src="https://res.cloudinary.com/dufzsv87k/image/upload/v1743288905/logoeludec_qcilsr.png"
            alt="Logo 1"
            className="h-16"
          />
          <img
            src="https://res.cloudinary.com/dufzsv87k/image/upload/v1741305038/logo-titulo_gtcapj.png"
            alt="Logo 2"
            className="h-14"
          />
        </div>
      </div>

      {/* Slider de imágenes */}
      <div className="flex-grow relative">
        <Swiper
          ref={swiperRef}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}  
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-100 p-2 rounded-lg h-full flex flex-col justify-center">
                <img
                  src={slide.image}
                  alt={`Descripción ${index + 1}`}
                  className="w-full h-60 md:h-110 object-cover rounded-md"
                />
                <p className="mt-2 text-center text-sm md:text-base">{slide.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Botones personalizados de navegación */}
        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-green-600 text-white p-2 rounded-full shadow-lg hover:bg-green-700 transition-colors z-10 cursor-pointer"
        >
          &lt; {/* Flecha izquierda */}
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-600 text-white p-2 rounded-full shadow-lg hover:bg-green-700 transition-colors z-10 cursor-pointer"
        >
          &gt; {/* Flecha derecha */}
        </button>
      </div>

      {/* Pie de página */}
      <div className="mt-4 md:mt-6 w-full">
        <p className="text-xs md:text-sm text-green-600 text-left md:text-center max-w-[calc(100%-8rem)] md:max-w-none">
          www.ucundinamarca.edu.co | Vigilado minieducación
        </p>
      </div>

      {/* Botón "Siguiente" */}
      <button
        onClick={() => isLoggedIn ? navigate('/Principal') : navigate('/Rol')}
        className="fixed bottom-2 right-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-green-700 transition-colors cursor-pointer"
      >
        {isLoggedIn ? 'Continuar' : 'Iniciar sesión'}
      </button>
    </div>
  );
};

export default Pagina1;