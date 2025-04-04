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
      image: '',
      description: 'Bienvenido a (Nombre del proyecto)',
    },
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
    {
      image: '',
      description: 'Taller 7: ',
    },
    {
      image: '',
      description: 'Taller 8: ',
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
      <div className="flex flex-row justify-between items-center mb-4 md:mb-6">
        {/* Logos */}
        <div className="flex items-center gap-4">
          <img
            src="https://res.cloudinary.com/dufzsv87k/image/upload/v1741305038/logo-titulo_gtcapj.png"
            alt="Logo Universidad"
            className="h-11 md:h-15"
          />
          <img
            src="https://res.cloudinary.com/dufzsv87k/image/upload/v1743288905/logoeludec_qcilsr.png"
            alt="Logo Semillero"
            className="h-10 md:h-14"
          />
        </div>

        {/* Botón "Siguiente" */}
        <button
          onClick={() => isLoggedIn ? navigate('/Principal') : navigate('/Rol')}
          className="bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-green-700 transition-colors cursor-pointer"
        >
          {isLoggedIn ? 'Continuar' : 'Iniciar sesión'}
        </button>
      </div>

      {/* Slider de imágenes */}
      <div className=" relative flex justify-center">
        <Swiper
          ref={swiperRef}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}  
          
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="h-70 md:h-full"
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
        <p className="text-sm text-green-600 text-center ">
          www.ucundinamarca.edu.co | Vigilado minieducación (poner los contactos)
        </p>
      </div>
    </div>
  );
};

export default Pagina1;