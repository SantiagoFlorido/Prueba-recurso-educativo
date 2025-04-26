import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Navigation } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import useSound from 'use-sound';

const Pagina1 = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('studentUser') || localStorage.getItem('teacherUser');
  
  const [playClick] = useSound(
    'https://res.cloudinary.com/dufzsv87k/video/upload/v1744909247/ClickSound.mp3',
    { volume: 1.0 }
  );

  const slides = [
    {
      image: 'https://res.cloudinary.com/dufzsv87k/image/upload/v1745330491/Banner%20RED%20presentaci%C3%B3n.png',
      description: 'Bienvenido a (Nombre del proyecto)',
    },
    {
      image: 'https://res.cloudinary.com/dufzsv87k/image/upload/v1745092380/Banner%20RED%201.png',
      description: 'Taller 1: El viaje de Pedro',
    },
    {
      image: 'https://res.cloudinary.com/dufzsv87k/image/upload/v1745092426/Banner%20RED%202.png',
      description: 'Taller 2: Armando un Mbot',
    },
    {
      image: 'https://res.cloudinary.com/dufzsv87k/image/upload/v1745092451/Banner%20RED%203.png',
      description: 'Taller 3: Conectando un Mbot al PC',
    },
    {
      image: 'https://res.cloudinary.com/dufzsv87k/image/upload/v1745092457/Banner%20RED%204.png',
      description: 'Taller 4: Conectando un Mbot al celular',
    },
    {
      image: 'https://res.cloudinary.com/dufzsv87k/image/upload/v1745092490/Banner%20RED%205.png',
      description: 'Taller 5: Programando el sensor de ultrasonido de nuestro Mbot',
    },
    {
      image: 'https://res.cloudinary.com/dufzsv87k/image/upload/v1745092518/Banner%20RED%206.png',
      description: 'Taller 6: Programando el seguidor de linea de nuestro Mbot',
    },
    {
      image: 'https://res.cloudinary.com/dufzsv87k/image/upload/v1745092542/Banner%20RED%207.png',
      description: 'Taller 7: ',
    },
    {
      image: 'https://res.cloudinary.com/dufzsv87k/image/upload/v1745092564/Banner%20RED%208.png',
      description: 'Taller 8: ',
    },
  ];

  const swiperRef = useRef(null);

  const handleNext = () => {
    playClick();
    swiperRef.current?.swiper?.isEnd 
      ? swiperRef.current.swiper.slideTo(0)
      : swiperRef.current?.swiper?.slideNext();
  };

  const handlePrev = () => {
    playClick();
    swiperRef.current?.swiper?.isBeginning 
      ? swiperRef.current.swiper.slideTo(slides.length - 1)
      : swiperRef.current?.swiper?.slidePrev();
  };

  const handleNavigationWithSound = () => {
    playClick();
    setTimeout(() => {
      isLoggedIn ? navigate('/Principal') : navigate('/Rol');
    }, 200);
  };

  return (
    <div className="bg-white p-4 h-screen flex flex-col ">
      {/* Header con logos y botón */}
      <div className="flex flex-row justify-between items-center mb-4">
        <div className="flex items-center gap-4">
          <img
            src="https://res.cloudinary.com/dufzsv87k/image/upload/v1741305038/logo-titulo_gtcapj.png"
            alt="Logo Universidad"
            className="h-9 md:h-15"
          />
          <img
            src="https://res.cloudinary.com/dufzsv87k/image/upload/v1743288905/logoeludec_qcilsr.png"
            alt="Logo Semillero"
            className="h-8 md:h-14"
          />
        </div>

        <button
          onClick={handleNavigationWithSound}
          className="bg-[#007B3E] text-white px-4 py-2 rounded-lg shadow-lg hover:bg-[#009e4f] transition-colors duration-300 cursor-pointer"
        >
          {isLoggedIn ? 'Continuar' : 'Iniciar sesión'}
        </button>
      </div>

      {/* Contenedor principal con slider */}
      <div className="flex-1 flex flex-col">
        <div className="relative flex-1 flex justify-center items-center w-full h-[45vh] min-h-[330px] max-h-[680px]">
          <Swiper
            ref={swiperRef}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="h-full w-full max-w-[900px]"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="h-full w-full flex justify-center items-center">
                  <img
                    src={slide.image}
                    alt={`Banner explicativo ${index + 1}`}
                    className="max-h-full w-auto object-contain"
                  /> 
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Botones de navegación */}
          <button
            onClick={handlePrev}
            className="absolute left-2 md:left-44 top-1/2 transform -translate-y-1/2 bg-[#007B3E] text-white p-2 rounded-full shadow-lg hover:bg-[#009e4f] transition-colors duration-300 z-10 cursor-pointer"
          >
            &lt;
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 md:right-44 top-1/2 transform -translate-y-1/2 bg-[#007B3E] text-white p-2 rounded-full shadow-lg hover:bg-[#009e4f] transition-colors duration-300 z-10 cursor-pointer"
          >
            &gt;
          </button>
        </div>
      </div>

      {/* Pie de página */}
        <div className="py-2 w-full">
          <p className="text-sm text-[#007B3E] text-center">
            www.ucundinamarca.edu.co | Vigilado minieducación<br />
            <span className="text-black">Contactos:</span><br />
            Financiador<br />
            <span className="text-black">Universidad de Cundinamarca</span> <br />
            Docentes<br />
            <span className="text-black">Ana Esperanza Merchan Hernandez - anaesperanzamerchan@ucundinamarca.edu.co</span> <br />
            <span className="text-black">Diego Orlando Méndez Pineda - dmendezp@ucundinamarca.edu.co</span> <br />
            <span className="text-black">Jorge Enrique Quevedo Buitrago - jequevedo@ucundinamarca.edu.co</span> <br />
            <span className="text-black">Eva Patricia Vasquez Gomez - evasquezgomez@ucundinamarca.edu.co</span> <br />
            Estudiantes<br />
            <span className="text-black">Cristian Mateo Velez Duran - cmvelez@ucundinamarca.edu.co</span> <br />
            <span className="text-black">David Santiago Florido Ortiz - dflorido@ucundinamarca.edu.co</span> 
            
          </p>
        </div>
    </div>
  );
};

export default Pagina1;