import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaQuestionCircle, FaBars, FaTimes } from 'react-icons/fa';
import axios from 'axios';
import { PulseLoader } from 'react-spinners';

const Pagina3 = () => {
  const navigate = useNavigate();
  const [showHelp, setShowHelp] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(true);
  const [completedWorkshops, setCompletedWorkshops] = useState(0);
  const [savedWorkshops, setSavedWorkshops] = useState([]);
  const [userId, setUserId] = useState(null);

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

          // Obtener talleres iniciados pero no finalizados (estadoabierto = 'abierto' y estadofinal = 'nofinalizado')
          const guardados = userWorkshops.filter(workshop => 
            workshop.estadoabierto === 'abierto' && workshop.estadofinal === 'nofinalizado'
          );
          setSavedWorkshops(guardados);
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
    localStorage.removeItem('studentUser');
    localStorage.removeItem('teacherUser');
    navigate('/');
  };

  const toggleHelp = () => {
    setShowHelp(!showHelp);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleWorkshopClick = (workshopId) => {
    if (userRole === 'docente') {
      navigate(`/Tema${workshopId}`);
    } else {
      navigate(`/Contenido${workshopId}`);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <PulseLoader color="#16a34a" size={15} margin={5} />
      </div>
    );
  }

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
              className="bg-green-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-green-700 cursor-pointer w-full md:w-27" 
              onClick={handleLogout}
            >
              Cerrar Sesión
            </button>
          </div>
          <button className="bg-gray-200 px-3 py-1 rounded-lg text-sm hover:bg-gray-300 cursor-pointer w-full" onClick={() => navigate('/')}>
            Inicio
          </button>
          <button 
            className="bg-gray-100 px-3 py-2 rounded-lg text-sm hover:bg-gray-200 cursor-pointer w-full flex items-center justify-center"
            onClick={toggleHelp}
          >
            <FaQuestionCircle className="text-green-600" />
          </button>
          <button 
            className="bg-gray-100 px-3 py-2 rounded-lg text-sm hover:bg-gray-200 cursor-pointer w-full hidden items-center justify-center md:flex"
            onClick={toggleMenu}
          >
            <FaBars className="text-green-600" />
          </button>
        </div>
      </div>

      {/* Contenedor con 3 columnas y 3 filas */}
      <div className="grid grid-cols-1 md:grid-cols-[minmax(200px,_1fr)_minmax(100px,_0.3fr)] gap-4 flex-grow relative">
        {/* Proyectos (Columna 1, Fila 1) */}
        <div className="flex items-center justify-center bg-gray-100 p-2 rounded-md hover:bg-gray-200 transition-colors min-h-[180px] cursor-pointer text-lg font-bold text-center" onClick={() => navigate('/Proyectos')}>
          {showHelp ? "Banner que indica la funcion del boton" : `Proyectos terminados ${completedWorkshops} de 8`}
        </div>

        {/* Recursos (Columna 2, Fila 1) */}
        <div className="flex flex-col space-y-2 min-h-[180px]">
          <div 
            className={`p-2 rounded-lg flex-grow flex items-center justify-center cursor-pointer ${
              userRole === 'docente' 
                ? 'bg-gray-100 hover:bg-gray-200' 
                : 'bg-gray-300 cursor-not-allowed'
            }`}
            onClick={() => {
              if (userRole === 'docente') {
                window.open('https://drive.google.com/drive/folders/1BRRCv8quGLVnSsB9ndCHO7cdWUf9sh3-?usp=sharing', '_blank', 'noopener,noreferrer');
              }
            }}   
          >
            <h2 className="text-lg text-center font-semibold">
              {showHelp 
                ? "Banner que indica la funcion del boton" 
                : userRole === 'docente' 
                  ? "Recursos Gestor" 
                  : "Restringido solo a Docentes"}
            </h2>
          </div>
          <div 
            className="bg-gray-100 p-2 rounded-lg flex-grow flex items-center justify-center hover:bg-gray-200 cursor-pointer"
            onClick={() => window.open('https://drive.google.com/drive/folders/1_ziaHW8TNaqfAI8Tcc5e2UBrzhm8Gl6N?usp=sharing', '_blank', 'noopener,noreferrer')}
          >
            <h2 className="text-lg text-center font-semibold">
              {showHelp ? "Banner que indica la funcion del boton" : "Recursos de apoyo"}
            </h2>
          </div>
          <div className="bg-gray-100 p-2 rounded-lg flex-grow flex items-center justify-center hover:bg-gray-200 cursor-pointer text-lg text-center font-semibold" onClick={() => navigate('/Conexión')}>
            {showHelp ? "Banner que indica la funcion del boton" : "Formas de conexión"}
          </div>
        </div>

        {/* Mobile: Proyectos Guardados (Debajo de los botones) */}
        <div className="md:hidden bg-gray-100 p-2 rounded-lg">
          <h2 className="text-lg font-bold mb-2 text-center">
            {savedWorkshops.length > 0 ? "Proyectos Guardados" : "Aún no tienes proyectos guardados"}
          </h2>
          {savedWorkshops.length > 0 && (
            <div className="space-y-2">
              {savedWorkshops.map((workshop) => (
                <div 
                  key={workshop.id} 
                  className="bg-white p-2 rounded-lg shadow-sm cursor-pointer hover:bg-gray-200"
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
              <button onClick={toggleMenu} className="text-gray-500 hover:text-gray-700">
                <FaTimes />
              </button>
            </div>
            {savedWorkshops.length > 0 && (
              <div className="space-y-2">
                {savedWorkshops.map((workshop) => (
                  <div 
                    key={workshop.id} 
                    className="bg-white p-2 rounded-lg shadow-sm cursor-pointer hover:bg-gray-200"
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
          <div className="bg-gray-100 p-2 rounded-lg">
            <img
              src="https://res.cloudinary.com/dufzsv87k/image/upload/v1743284192/Imagenes%20Recurso%20Educativo/Banner%20menu%20principal/vr8kxu1robbc9h0jxef6.jpg"
              alt="Banner"
              className="w-full h-full object-fill rounded-md"
            />
          </div>
          {/* Créditos */}
          <div className="bg-gray-100 p-2 rounded-lg mt-4">
            <h2 className="text-lg font-bold text-center">Créditos</h2>
            <p className="text-sm text-center">Aquí puedes agregar los créditos relacionados con los temas y proyectos.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagina3;