import { useNavigate } from 'react-router-dom';
import { FaHome, FaArrowLeft, FaFilePdf, FaDownload } from 'react-icons/fa';
import useSound from 'use-sound';

const RecursosApoyo = () => {
  const navigate = useNavigate();
  
  // Importa el sonido
  const [playClick] = useSound(
    'https://res.cloudinary.com/dufzsv87k/video/upload/v1744909247/ClickSound.mp3',
    { volume: 1.0 }
  );

  const handleLogout = () => {
    playClick();
    setTimeout(() => {
      localStorage.removeItem('studentUser');
      localStorage.removeItem('teacherUser');
      navigate('/');
    }, 200);
  };

  // Función combinada para navegación + sonido
  const handleNavigationWithSound = (path) => {
    playClick();
    setTimeout(() => {
      navigate(path);
    }, 200);
  };

  // Función para abrir PDF en nueva pestaña
  const handleOpenPdf = (path, event) => {
    playClick();
    event.preventDefault();
    window.open(path, '_blank', 'noopener,noreferrer');
  };

  // Lista de recursos (PDF y EXE)
  const recursos = [
    { 
      name: 'Como importar imagen a fondo de escenario', 
      path: '/Como importar imagen a fondo de escenario.pdf',
      downloadName: 'Como_importar_imagen_a_fondo_de_escenario.pdf',
      type: 'pdf',
      icon: <FaFilePdf size={24} className="text-red-600 flex-shrink-0" />
    },
    { 
      name: 'Manual de usuario y técnico', 
      path: '/MANUAL DE USUARIO Y TECNICO.pdf',
      downloadName: 'Manual_de_usuario_y_tecnico.pdf',
      type: 'pdf',
      icon: <FaFilePdf size={24} className="text-red-600 flex-shrink-0" />
    },
    { 
      name: 'Recurso Educativo Digital MBot Setup 1.0.0 win-x64', 
      path: '/Recurso Educativo Digital MBot Setup 1.0.0 win-x64.exe',
      downloadName: 'Recurso_Educativo_Digital_MBot_Setup.exe',
      type: 'exe',
      icon: <img src="/icon.ico" alt="Icono MBot" className="w-6 h-6 flex-shrink-0" />
    }
  ];

  return (
    <div className="bg-white p-4 w-full min-h-screen flex flex-col">
      {/* Fila superior: Logos y botones */}
      <div className="flex justify-between items-center mb-6">
        {/* Header con logos */}
        <div className="flex flex-row justify-between items-center">
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
        
        {/* Botones de navegación */}
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
          <button 
            className="flex justify-center items-center bg-gray-200 px-3 py-1 rounded-lg text-sm hover:bg-gray-300 transition-colors duration-300 cursor-pointer w-full" 
            onClick={() => handleNavigationWithSound('/Principal')}
          >
            <FaArrowLeft size={19} className="text-[#007B3E] flex justify-center items-center" /> 
          </button>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="flex-grow">
        <h1 className="text-2xl font-bold text-[#007B3E] mb-6 text-center">Recursos de Apoyo</h1>
        
        {/* Lista de recursos */}
        <div className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
          <div className="divide-y divide-gray-200">
            {recursos.map((recurso, index) => (
              <div key={index} className="p-4 hover:bg-gray-50 transition-colors duration-200">
                <div className="flex items-center justify-between">
                  {/* Icono y nombre del recurso (clickeable para PDFs) */}
                  <div className="flex items-center gap-4">
                    {recurso.icon}
                    {recurso.type === 'pdf' ? (
                      <button 
                        onClick={(e) => handleOpenPdf(recurso.path, e)}
                        className="text-gray-800 font-medium text-sm md:text-base hover:text-[#007B3E] hover:underline cursor-pointer text-left"
                      >
                        {recurso.name}
                      </button>
                    ) : (
                      <span className="text-gray-800 font-medium text-sm md:text-base">
                        {recurso.name}
                      </span>
                    )}
                  </div>
                  
                  {/* Botón de descarga */}
                  <a 
                    href={recurso.path} 
                    download={recurso.downloadName}
                    className="bg-[#007B3E] text-white px-3 py-2 rounded-lg text-sm hover:bg-[#009e4f] transition-colors duration-300 cursor-pointer flex items-center gap-2"
                    onClick={() => playClick()}
                  >
                    <FaDownload size={16} />
                    <span className="hidden md:inline">Descargar</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecursosApoyo;