import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaQuestionCircle, FaBars, FaTimes, FaUserTie, FaHandsHelping, FaLink, FaHome, FaChartBar } from 'react-icons/fa';
import { MdOutlineWork } from "react-icons/md";

import axios from 'axios';
import { PulseLoader } from 'react-spinners';

import useSound from 'use-sound';

const Pagina3 = () => {
  const navigate = useNavigate();
  const [showHelp, setShowHelp] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(true);
  const [completedWorkshops, setCompletedWorkshops] = useState(0);
  const [savedWorkshops, setSavedWorkshops] = useState([]);
  const [userId, setUserId] = useState(null);

  // Importa el sonido (usa la URL proporcionada)
  const [playClick] = useSound(
    'https://res.cloudinary.com/dufzsv87k/video/upload/v1744909247/ClickSound.mp3',
    { volume: 1.0 }
  );

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const studentUser = localStorage.getItem('studentUser');
        const teacherUser = localStorage.getItem('teacherUser');
        let userData;
        
        if (teacherUser) {
          userData = JSON.parse(teacherUser);
          setUserRole('docente');
        } else if (studentUser) {
          userData = JSON.parse(studentUser);
          setUserRole('estudiante');
        }

        if (userData?.id) {
          setUserId(userData.id);
          
          // Obtener todos los talleres del usuario
          const response = await axios.get(`https://prueba-api-recurso-educativo.onrender.com/api/v1/usuarios-talleres`);
          const userWorkshops = response.data.filter(workshop => workshop.id_usuario === userData.id);
          
          // Contar talleres finalizados (estadofinal = 'finalizado')
          const finalizados = userWorkshops.filter(workshop => workshop.estadofinal === 'finalizado');
          setCompletedWorkshops(finalizados.length);

          // Obtener talleres iniciados pero no finalizados (estadoabierto = 'abierto')
          const guardados = userWorkshops.filter(workshop => 
            workshop.estadoabierto === 'abierto' 
          );
          // Ordenar los talleres por id_taller de forma ascendente
          const guardadosOrdenados = [...guardados].sort((a, b) => a.id_taller - b.id_taller);
          setSavedWorkshops(guardadosOrdenados);
        }
      } catch (error) {
        console.error('Error al obtener datos del usuario:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = () => {
    playClick();
    setTimeout(() => {
      localStorage.removeItem('studentUser');
      localStorage.removeItem('teacherUser');
      navigate('/');
    }, 200);
  };

  const toggleHelp = () => {
    playClick();
    setShowHelp(!showHelp);
  };

  const toggleMenu = () => {
    playClick();
    setIsMenuOpen(!isMenuOpen);
  };

  const handleWorkshopClick = (workshopId) => {
    playClick();
    setTimeout(() => {
      if (userRole === 'docente') {
        navigate(`/Tema${workshopId}`);
      } else {
        navigate(`/Contenido${workshopId}`);
      }
    }, 200);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <PulseLoader color="#007B3E" size={17} margin={5} />
      </div>
    );
  }

  // Función combinada para navegación + sonido
  const handleNavigationWithSound = (path) => {
    playClick();
    setTimeout(() => {
      navigate(path);
    }, 200);
  };

  const handleExternalLinkWithSound = (url) => {
    playClick();
    setTimeout(() => {
      window.open(url, '_blank', 'noopener,noreferrer');
    }, 200);
  };

  return (
    <div className="bg-white p-4 w-full min-h-screen flex flex-col">
      {/* Fila superior: Menú Principal, Log in/Log up y Close */}
      <div className="flex justify-between items-center mb-4">
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
        </div>
        <div className="flex md:flex-row items-center gap-1 flex-col">
          <div className="flex flex-col md:flex-row gap-2 w-full">
            <button 
              className="bg-[#007B3E] text-white px-3 py-1 rounded-lg text-sm hover:bg-[#009e4f] transition-colors duration-300 cursor-pointer w-full md:w-28" 
              onClick={handleLogout}
            >
              Cerrar Sesión
            </button>
          </div>
          <button 
            className="flex justify-center items-center bg-gray-200 px-3 py-1 rounded-lg text-sm hover:bg-gray-300 transition-colors duration-300 cursor-pointer w-full" 
            onClick={() => handleNavigationWithSound('/')}
          >
            <FaHome size={19} className="text-[#007B3E] flex justify-center items-center" /> 
          </button>
          {userRole === 'docente' && (
            <button 
              className="flex justify-center items-center bg-gray-200 px-3 py-1 rounded-lg text-sm hover:bg-gray-300 transition-colors duration-300 cursor-pointer w-full" 
              onClick={() => handleNavigationWithSound('/Datos')}
            >
              <FaChartBar size={19} className="text-[#007B3E] flex justify-center items-center" /> 
            </button>
          )}
          <button 
            className="bg-gray-200 px-3 py-1 rounded-lg text-sm hover:bg-gray-300 transition-colors duration-300 cursor-pointer w-full flex items-center justify-center"
            onClick={toggleHelp}
          >
            <FaQuestionCircle size={18} className="text-[#007B3E]" />
          </button>
          <button 
            className="bg-gray-200 px-3 py-1 rounded-lg text-sm hover:bg-gray-300 transition-colors duration-300 cursor-pointer w-full hidden items-center justify-center md:flex"
            onClick={toggleMenu}
          >
            <FaBars size={18} className="text-[#007B3E]" />
          </button>
        </div>
      </div>

      {/* Contenedor con 3 columnas y 3 filas */}
      <div className="grid grid-cols-1 md:grid-cols-[minmax(200px,_1fr)_minmax(100px,_0.3fr)] gap-4 flex-grow relative">
        {/* Proyectos (Columna 1, Fila 1) */}
        <div className="flex items-center justify-center text-white text-lg bg-[#007B3E] p-2 rounded-md hover:bg-[#009e4f] transition-colors duration-300 min-h-[180px] cursor-pointer font-bold text-center" onClick={() => handleNavigationWithSound('/Proyectos')}>
          <div className="flex items-center gap-2">
            {showHelp ? ("Este botón sirve para ingresar al contenido disponible de cada taller del recurso e incluso agregados por docentes") 
			                : 
			                  (<span className="flex items-center gap-2">Proyectos terminados {completedWorkshops} de 8 <MdOutlineWork size={60} className="text-[#00482B] text-2x1 rounded-xl" /></span>)}
            		
          </div>
        </div>

        {/* Recursos (Columna 2, Fila 1) */}
        <div className="flex flex-col space-y-2 min-h-[180px]">
          <div 
            className={`p-2 rounded-lg flex-grow flex items-center justify-center ${
              userRole === 'docente' 
                ? 'bg-[#00482B] text-white hover:bg-[#006341] transition-colors duration-300 cursor-pointer ' 
                : 'cursor-not-allowed bg-gray-300 text-black'
            }`}
            onClick={() => {
              if (userRole === 'docente') {
                handleExternalLinkWithSound('https://mailunicundiedu-my.sharepoint.com/:f:/g/personal/dflorido_ucundinamarca_edu_co/EgspzyNMnq5JkvF7fJzfM0UBQMG5jLgJ6cgdT0N8Ld7gng?e=022Nfi');
              }
            }}   
          >
            <div className="flex items-center gap-2">
              <h2 className="text-lg text-center font-semibold">
                {showHelp 
                  ? ("Este botón sirve para redirigir a los recursos de apoyo que pueden usar docentes y estudiantes") 
                  : userRole === 'docente' 
                    ? (<span className="flex items-center gap-2">Recursos Gestor <FaUserTie className="text-[#007B3E]" /></span>) 
                    : "Restringido solo a Docentes"}
              </h2>
              
            </div>
          </div>
          <div 
            className="bg-[#00482B] hover:bg-[#006341] text-white p-2 rounded-lg flex-grow flex items-center justify-center cursor-pointer transition-colors duration-300"
            onClick={() => handleExternalLinkWithSound('https://mailunicundiedu-my.sharepoint.com/:f:/g/personal/dflorido_ucundinamarca_edu_co/EhGTOrMGOSpPuXyMN00VCs4BBORPqg9dtIAs0fH-KFhvmw?e=Sw77tc')}
          >
            <div className="flex items-center gap-2">
              <h2 className="text-lg text-center font-semibold">
                {showHelp ? ("Este botón sirve para redirigir a los recursos de apoyo que pueden usar docentes y estudiantes"): (<span className="flex items-center gap-2">Recursos de apoyo <FaHandsHelping className="text-[#007B3E]" /></span>)}
              </h2>
              
            </div>
          </div>
          <div 
            className="bg-[#00482B] hover:bg-[#006341] transition-colors duration-300 text-white p-2 rounded-lg flex-grow flex items-center justify-center cursor-pointer text-lg text-center font-semibold" 
            onClick={() => handleNavigationWithSound('/Conexión')}
          >
            <div className="flex items-center gap-2">
              {showHelp ? ("Este botón sirve para acceder a los medios de conexión del MBot") : (<>Formas de conexión <FaLink className="text-[#007B3E]" /></>)}
              
            </div>
          </div>
        </div>

        {/* Mobile: Proyectos Guardados (Debajo de los botones) */}
        <div className="md:hidden bg-gray-300 p-2 rounded-lg">
          <h2 className="text-lg font-bold mb-2 text-center">
            {savedWorkshops.length > 0 ? "Proyectos Guardados" : "Aún no tienes proyectos guardados"}
          </h2>
          {savedWorkshops.length > 0 && (
            <div className="space-y-2 ">
              {savedWorkshops.map((workshop) => (
                <div 
                  key={workshop.id} 
                  className="bg-[#00482B] p-2 rounded-lg shadow-sm cursor-pointer hover:bg-[#006341] text-white flex justify-center items-center"
                  onClick={() => handleWorkshopClick(workshop.id_taller)}
                >
                  <h3 className="font-semibold">Taller {workshop.id_taller}</h3>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Desktop: Menú desplegable personalizado */}
        <div className={`hidden md:block fixed top-0 right-0 h-full w-64 bg-gray-100 shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">
                {savedWorkshops.length > 0 ? "Proyectos Guardados" : "Aún no tienes proyectos guardados"}
              </h2>
              <button 
                onClick={toggleMenu} 
                className="text-red-400 hover:text-red-600 cursor-pointer"
              >
                <FaTimes />
              </button>
            </div>
            {savedWorkshops.length > 0 && (
              <div className="space-y-2 ">
                {savedWorkshops.map((workshop) => (
                  <div 
                    key={workshop.id} 
                    className="bg-[#00482B] p-2 rounded-lg shadow-sm cursor-pointer hover:bg-[#006341] text-white flex justify-center items-center"
                    onClick={() => handleWorkshopClick(workshop.id_taller)}
                  >
                    <h3 className="font-semibold">Taller {workshop.id_taller}</h3>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Contenedor combinado para Imagen y Créditos */}
        <div className="col-span-1 md:col-span-2">
          {/* Imagen Temas del Proyecto */}
          <div className="bg-gray-200 p-2 rounded-lg">
            <img
              src="https://res.cloudinary.com/dufzsv87k/image/upload/v1745096924/Banner%20RED%20Men%C3%BA%20Principal.png"
              alt="Banner"
              className="w-full h-full object-contain rounded-md"
            />
          </div>
          {/* Créditos */}
          <div className="bg-[#3d3d3b] text-white p-4 rounded-lg mt-4">
            <div className="text-sm text-center">
              <p className="font-semibold">Docentes</p>
              <p className="text-gray-300">Ana Esperanza Merchan Hernandez - anaesperanzamerchan@ucundinamarca.edu.co</p>
              <p className="text-gray-300">Diego Orlando Méndez Pineda - dmendezp@ucundinamarca.edu.co</p>
              <p className="text-gray-300">Jorge Enrique Quevedo Buitrago - jequevedo@ucundinamarca.edu.co</p>
              <p className="text-gray-300">Eva Patricia Vasquez Gomez - evasquezgomez@ucundinamarca.edu.co</p>
              <p className="font-semibold mt-2">Estudiantes</p>
              <p className="text-gray-300">Cristian Mateo Velez Duran - cmvelez@ucundinamarca.edu.co</p>
              <p className="text-gray-300">David Santiago Florido Ortiz - dflorido@ucundinamarca.edu.co</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagina3;