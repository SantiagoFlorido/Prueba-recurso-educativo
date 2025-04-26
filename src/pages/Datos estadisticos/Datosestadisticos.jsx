import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaQuestionCircle, FaBars, FaTimes, FaUserTie, FaHandsHelping, FaLink, FaHome, FaChartBar, FaArrowLeft, FaChalkboardTeacher, FaUserGraduate, FaFilter } from 'react-icons/fa';
import { MdOutlineWork } from "react-icons/md";
import axios from 'axios';
import { PulseLoader } from 'react-spinners';
import useSound from 'use-sound';

// Importaciones de Chart.js
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';
import { Pie, Bar } from 'react-chartjs-2';

// Registrar componentes de Chart.js
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title);

const Datosestadisticos = () => {
  const navigate = useNavigate();
  const [showHelp, setShowHelp] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('estudiantes');
  const [viewMode, setViewMode] = useState('finalizados'); // 'finalizados' o 'abiertos'
  const [stats, setStats] = useState({
    workshops: [],
    users: [],
    userWorkshops: [],
    workshopCompletion: { students: [], teachers: [] },
    userProgress: []
  });
  const [itemsPerPage] = useState(5); // Número de elementos a mostrar por página
  const [currentChartPage, setCurrentChartPage] = useState(1); 
  const [currentStudentPage, setCurrentStudentPage] = useState(1);
  const [currentTeacherPage, setCurrentTeacherPage] = useState(1);

  // Importa el sonido
  const [playClick] = useSound(
    'https://res.cloudinary.com/dufzsv87k/video/upload/v1744909247/ClickSound.mp3',
    { volume: 1.0 }
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Verificar rol de usuario
        const studentUser = localStorage.getItem('studentUser');
        const teacherUser = localStorage.getItem('teacherUser');
        
        if (teacherUser) {
          setUserRole('docente');
        } else if (studentUser) {
          setUserRole('estudiante');
        }

        // Obtener todos los datos necesarios
        const [workshopsRes, usersRes, userWorkshopsRes] = await Promise.all([
          axios.get('https://prueba-api-recurso-educativo.onrender.com/api/v1/talleres'),
          axios.get('https://prueba-api-recurso-educativo.onrender.com/api/v1/users'),
          axios.get('https://prueba-api-recurso-educativo.onrender.com/api/v1/usuarios-talleres')
        ]);

        // Procesar datos para estadísticas
        const workshopCompletion = calculateWorkshopCompletion(userWorkshopsRes.data, workshopsRes.data, usersRes.data);
        const userProgress = calculateUserProgress(userWorkshopsRes.data, usersRes.data, workshopsRes.data);

        setStats({
          workshops: workshopsRes.data,
          users: usersRes.data,
          userWorkshops: userWorkshopsRes.data,
          workshopCompletion,
          userProgress
        });
      } catch (error) {
        console.error('Error al obtener datos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Función para calcular el progreso de finalización por taller (modificada)
  const calculateWorkshopCompletion = (userWorkshops, workshops, users) => {
    // Contar usuarios por rol
    const totalStudents = users.filter(u => u.rol === 'estudiante').length;
    const totalTeachers = users.filter(u => u.rol === 'docente').length;

    const studentStats = workshops.map(workshop => {
      const studentWorkshops = userWorkshops.filter(uw => 
        uw.id_taller === workshop.id && 
        users.find(u => u.id === uw.id_usuario)?.rol === 'estudiante'
      );
      
      const completed = studentWorkshops.filter(uw => uw.estadofinal === 'finalizado').length;
      const opened = studentWorkshops.filter(uw => uw.estadoabierto === 'abierto').length;
      
      return {
        id: workshop.id,
        name: workshop.nombre_taller,
        completed,
        opened,
        completionRate: totalStudents > 0 ? (completed / totalStudents) * 100 : 0,
        openedRate: totalStudents > 0 ? (opened / totalStudents) * 100 : 0
      };
    });

    const teacherStats = workshops.map(workshop => {
      const teacherWorkshops = userWorkshops.filter(uw => 
        uw.id_taller === workshop.id && 
        users.find(u => u.id === uw.id_usuario)?.rol === 'docente'
      );
      
      const completed = teacherWorkshops.filter(uw => uw.estadofinal === 'finalizado').length;
      const opened = teacherWorkshops.filter(uw => uw.estadoabierto === 'abierto').length;
      
      return {
        id: workshop.id,
        name: workshop.nombre_taller,
        completed,
        opened,
        completionRate: totalTeachers > 0 ? (completed / totalTeachers) * 100 : 0,
        openedRate: totalTeachers > 0 ? (opened / totalTeachers) * 100 : 0
      };
    });

    return {
      students: studentStats,
      teachers: teacherStats
    };
  };

  // Función para calcular el progreso por usuario
  const calculateUserProgress = (userWorkshops, users, workshops) => {
    const userStats = users.map(user => {
      const userData = userWorkshops.filter(uw => uw.id_usuario === user.id);
      const completed = userData.filter(uw => uw.estadofinal === 'finalizado').length;
      const opened = userData.filter(uw => uw.estadoabierto === 'abierto').length;
      
      return {
        id: user.id,
        name: user.nombre,
        role: user.rol,
        total: 8, // Total fijo de talleres
        completed,
        opened,
        notOpened: 8 - opened, // Talleres no abiertos
        completionRate: (completed / 8) * 100,
        openedRate: (opened / 8) * 100
      };
    });

    return userStats;
  };

  // Función para paginar estudiantes
  const paginatedStudents = () => {
    const startIndex = (currentStudentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return stats.userProgress
      .filter(user => user.role === 'estudiante')
      .slice(startIndex, endIndex);
  };

  // Función para paginar docentes
  const paginatedTeachers = () => {
    const startIndex = (currentTeacherPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return stats.userProgress
      .filter(user => user.role === 'docente')
      .slice(startIndex, endIndex);
  };

  // Total páginas para estudiantes
  const totalStudentPages = Math.ceil(
    stats.userProgress.filter(user => user.role === 'estudiante').length / itemsPerPage
  );

  // Total páginas para docentes
  const totalTeacherPages = Math.ceil(
    stats.userProgress.filter(user => user.role === 'docente').length / itemsPerPage
  );

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

  // Función combinada para navegación + sonido
  const handleNavigationWithSound = (path) => {
    playClick();
    setTimeout(() => {
      navigate(path);
    }, 200);
  };

  const switchTab = (tab) => {
    playClick();
    setActiveTab(tab);
  };

  const switchViewMode = (mode) => {
    playClick();
    setViewMode(mode);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <PulseLoader color="#007B3E" size={17} margin={5} />
      </div>
    );
  }

  // Datos para gráficos de estudiantes (paginados)
const studentProgressData = {
    labels: stats.userProgress
      .filter(u => u.role === 'estudiante')
      .slice((currentChartPage - 1) * itemsPerPage, currentChartPage * itemsPerPage)
      .map(u => u.name),
    datasets: [
      {
        label: viewMode === 'finalizados' ? 'Talleres finalizados' : 'Talleres abiertos',
        data: stats.userProgress
          .filter(u => u.role === 'estudiante')
          .slice((currentChartPage - 1) * itemsPerPage, currentChartPage * itemsPerPage)
          .map(u => viewMode === 'finalizados' ? u.completed : u.opened),
        backgroundColor: viewMode === 'finalizados' ? '#007B3E' : '#006341',
      },
      {
        label: viewMode === 'finalizados' ? 'Talleres no finalizados' : 'Talleres no abiertos',
        data: stats.userProgress
          .filter(u => u.role === 'estudiante')
          .slice((currentChartPage - 1) * itemsPerPage, currentChartPage * itemsPerPage)
          .map(u => viewMode === 'finalizados' ? (u.total - u.completed) : (u.total - u.opened)),
        backgroundColor: viewMode === 'finalizados' ? '#00482B' : '#003319',
      },
    ],
  };
  
  // Datos para gráficos de docentes (paginados)
  const teacherActivityData = {
    labels: stats.userProgress
      .filter(u => u.role === 'docente')
      .slice((currentChartPage - 1) * itemsPerPage, currentChartPage * itemsPerPage)
      .map(u => u.name),
    datasets: [
      {
        label: viewMode === 'finalizados' ? 'Talleres finalizados' : 'Talleres abiertos',
        data: stats.userProgress
          .filter(u => u.role === 'docente')
          .slice((currentChartPage - 1) * itemsPerPage, currentChartPage * itemsPerPage)
          .map(u => viewMode === 'finalizados' ? u.completed : u.opened),
        backgroundColor: viewMode === 'finalizados' ? '#007B3E' : '#006341',
      },
      {
        label: viewMode === 'finalizados' ? 'Talleres no finalizados' : 'Talleres no abiertos',
        data: stats.userProgress
          .filter(u => u.role === 'docente')
          .slice((currentChartPage - 1) * itemsPerPage, currentChartPage * itemsPerPage)
          .map(u => viewMode === 'finalizados' ? (u.total - u.completed) : (u.total - u.opened)),
        backgroundColor: viewMode === 'finalizados' ? '#00482B' : '#003319',
      },
    ],
  };

  const roleDistributionData = {
    labels: ['Docentes', 'Estudiantes'],
    datasets: [
      {
        data: [
          stats.users.filter(u => u.rol === 'docente').length,
          stats.users.filter(u => u.rol === 'estudiante').length
        ],
        backgroundColor: [
          '#007B3E',
          '#00482B'
        ],
        borderColor: [
          '#ffffff'
        ],
        borderWidth: 1,
      },
    ],
  };

  // Datos de finalización por taller para estudiantes
  const studentCompletionData = {
    labels: stats.workshopCompletion.students.map(w => w.name),
    datasets: [
      {
        label: 'Talleres completados por estudiantes (%)',
        data: stats.workshopCompletion.students.map(w => w.completionRate),
        backgroundColor: '#007B3E',
        borderColor: '#ffffff',
        borderWidth: 1,
      },
      {
        label: 'Talleres abiertos por estudiantes (%)',
        data: stats.workshopCompletion.students.map(w => w.openedRate),
        backgroundColor: '#006341',
        borderColor: '#ffffff',
        borderWidth: 1,
      },
    ],
  };

  // Datos de finalización por taller para docentes
  const teacherCompletionData = {
    labels: stats.workshopCompletion.teachers.map(w => w.name),
    datasets: [
      {
        label: 'Talleres completados por docentes (%)',
        data: stats.workshopCompletion.teachers.map(w => w.completionRate),
        backgroundColor: '#007B3E',
        borderColor: '#ffffff',
        borderWidth: 1,
      },
      {
        label: 'Talleres abiertos por docentes (%)',
        data: stats.workshopCompletion.teachers.map(w => w.openedRate),
        backgroundColor: '#006341',
        borderColor: '#ffffff',
        borderWidth: 1,
      },
    ],
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
          <button 
            className="flex justify-center items-center bg-gray-200 px-3 py-1 rounded-lg text-sm hover:bg-gray-300 transition-colors duration-300 cursor-pointer w-full" 
            onClick={() => handleNavigationWithSound('/Principal')}
          >
            <FaArrowLeft size={19} className="text-[#007B3E] flex justify-center items-center" /> 
          </button>
        </div>
      </div>

      {/* Contenido del Dashboard */}
      <div className="flex-grow">
        <h1 className="text-2xl font-bold text-[#007B3E] mb-6 text-center">Estadísticas del Recurso Educativo Digital MBot</h1>
        
        {/* Resumen general con iconos */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-[#007B3E] text-white p-4 rounded-lg shadow flex items-center gap-3">
            <FaUserGraduate size={24} className="flex-shrink-0" />
            <div>
              <h3 className="font-bold">Total Estudiantes</h3>
              <p className="text-3xl">{stats.users.filter(u => u.rol === 'estudiante').length}</p>
            </div>
          </div>
          <div className="bg-[#00482B] text-white p-4 rounded-lg shadow flex items-center gap-3">
            <FaChalkboardTeacher size={24} className="flex-shrink-0" />
            <div>
              <h3 className="font-bold">Total Docentes</h3>
              <p className="text-3xl">{stats.users.filter(u => u.rol === 'docente').length}</p>
            </div>
          </div>
          <div className="bg-[#006341] text-white p-4 rounded-lg shadow flex items-center gap-3">
            <MdOutlineWork size={24} className="flex-shrink-0" />
            <div>
              <h3 className="font-bold">Talleres Totales</h3>
              <p className="text-3xl">8</p>
            </div>
          </div>
          <div className="bg-[#003319] text-white p-4 rounded-lg shadow flex items-center gap-3">
            <FaChartBar size={24} className="flex-shrink-0" />
            <div>
              <h3 className="font-bold">Talleres Finalizados</h3>
              <p className="text-3xl">{stats.userWorkshops.filter(uw => uw.estadofinal === 'finalizado').length}</p>
            </div>
          </div>
        </div>

        {/* Pestañas para cambiar entre estudiantes y docentes */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex border-b border-gray-200">
            <button
              className={`py-2 px-4 font-medium text-sm flex items-center gap-2 ${activeTab === 'estudiantes' ? 'text-[#007B3E] border-b-2 border-[#007B3E]' : 'text-gray-500'}`}
              onClick={() => switchTab('estudiantes')}
            >
              <FaUserGraduate /> Progreso de Estudiantes
            </button>
            <button
              className={`py-2 px-4 font-medium text-sm flex items-center gap-2 ${activeTab === 'docentes' ? 'text-[#007B3E] border-b-2 border-[#007B3E]' : 'text-gray-500'}`}
              onClick={() => switchTab('docentes')}
            >
              <FaChalkboardTeacher /> Actividad de Docentes
            </button>
          </div>
          
          {/* Filtro de visualización */}
          <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-lg">
            <span className="text-sm text-gray-600 flex items-center gap-1">
              <FaFilter /> Ver:
            </span>
            <button
              className={`px-3 py-1 text-sm rounded ${viewMode === 'finalizados' ? 'bg-[#007B3E] text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => switchViewMode('finalizados')}
            >
              Finalizados
            </button>
            <button
              className={`px-3 py-1 text-sm rounded ${viewMode === 'abiertos' ? 'bg-[#007B3E] text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => switchViewMode('abiertos')}
            >
              Abiertos
            </button>
          </div>
        </div>

        {/* Gráficos según pestaña activa */}
        {activeTab === 'estudiantes' ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
                <h3 className="font-bold text-[#007B3E] mb-3 text-center">Distribución de Roles</h3>
                <div className="h-64 md:h-80">
                  <Pie data={roleDistributionData} options={{ responsive: true, maintainAspectRatio: false }} />
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
                <h3 className="font-bold text-[#007B3E] mb-3 text-center">
                    {viewMode === 'finalizados' ? 'Progreso de Finalización' : 'Talleres Abiertos'}
                </h3>
                <div className="h-64 md:h-80">
                    <Bar 
                    data={activeTab === 'estudiantes' ? studentProgressData : teacherActivityData} 
                    options={{ 
                        responsive: true, 
                        maintainAspectRatio: false,
                        scales: {
                        x: {
                            stacked: true,
                        },
                        y: {
                            stacked: true,
                            beginAtZero: true,
                            max: 8,
                            ticks: {
                            stepSize: 1
                            }
                        }
                        }
                    }} 
                    />
                </div>
                {/* Controles de paginación para el gráfico */}
                {Math.ceil(
                    (activeTab === 'estudiantes' 
                    ? stats.userProgress.filter(u => u.role === 'estudiante').length 
                    : stats.userProgress.filter(u => u.role === 'docente').length) / itemsPerPage
                ) > 1 && (
                    <div className="flex justify-between items-center p-2 bg-gray-50">
                    <button
                        onClick={() => {
                        playClick();
                        setCurrentChartPage(prev => Math.max(prev - 1, 1));
                        }}
                        disabled={currentChartPage === 1}
                        className={`px-3 py-1 text-sm rounded-md ${currentChartPage === 1 ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-[#007B3E] text-white hover:bg-[#009e4f]'}`}
                    >
                        Anterior
                    </button>
                    <span className="text-sm text-gray-600">
                        Página {currentChartPage} de {
                        Math.ceil(
                            (activeTab === 'estudiantes' 
                            ? stats.userProgress.filter(u => u.role === 'estudiante').length 
                            : stats.userProgress.filter(u => u.role === 'docente').length) / itemsPerPage
                        )
                        }
                    </span>
                    <button
                        onClick={() => {
                        playClick();
                        setCurrentChartPage(prev => prev + 1);
                        }}
                        disabled={currentChartPage >= Math.ceil(
                        (activeTab === 'estudiantes' 
                            ? stats.userProgress.filter(u => u.role === 'estudiante').length 
                            : stats.userProgress.filter(u => u.role === 'docente').length) / itemsPerPage
                        )}
                        className={`px-3 py-1 text-sm rounded-md ${currentChartPage >= Math.ceil(
                        (activeTab === 'estudiantes' 
                            ? stats.userProgress.filter(u => u.role === 'estudiante').length 
                            : stats.userProgress.filter(u => u.role === 'docente').length) / itemsPerPage
                        ) ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-[#007B3E] text-white hover:bg-[#009e4f]'}`}
                    >
                        Siguiente
                    </button>
                    </div>
                )}
                </div>
            </div>

            {/* Tabla de progreso por estudiante */}
            <div className="overflow-x-auto bg-white rounded-lg shadow border border-gray-200 mb-6">
              <h3 className="font-bold text-[#007B3E] p-4 text-center flex items-center justify-center gap-2">
                <FaUserGraduate /> Detalle por Estudiante
              </h3>
              <div className="max-h-96 overflow-y-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-[#007B3E] text-white sticky top-0">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Estudiante</th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Talleres Totales</th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Talleres Abiertos</th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Talleres Finalizados</th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Progreso</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {paginatedStudents().map((user, index) => (
                      <tr key={user.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">8</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.opened}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.completed}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div 
                              className="bg-[#007B3E] h-2.5 rounded-full" 
                              style={{ width: `${viewMode === 'finalizados' ? user.completionRate : user.openedRate}%` }}
                            ></div>
                          </div>
                          <span className="text-xs text-gray-500">
                            {Math.round(viewMode === 'finalizados' ? user.completionRate : user.openedRate)}%
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {/* Controles de paginación para estudiantes */}
              {totalStudentPages > 1 && (
                <div className="flex justify-between items-center p-4 bg-gray-50">
                  <button
                    onClick={() => {
                      playClick();
                      setCurrentStudentPage(prev => Math.max(prev - 1, 1));
                    }}
                    disabled={currentStudentPage === 1}
                    className={`px-4 py-2 rounded-md ${currentStudentPage === 1 ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-[#007B3E] text-white hover:bg-[#009e4f]'}`}
                  >
                    Anterior
                  </button>
                  <span className="text-sm text-gray-600">
                    Página {currentStudentPage} de {totalStudentPages}
                  </span>
                  <button
                    onClick={() => {
                      playClick();
                      setCurrentStudentPage(prev => Math.min(prev + 1, totalStudentPages));
                    }}
                    disabled={currentStudentPage === totalStudentPages}
                    className={`px-4 py-2 rounded-md ${currentStudentPage === totalStudentPages ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-[#007B3E] text-white hover:bg-[#009e4f]'}`}
                  >
                    Siguiente
                  </button>
                </div>
              )}
            </div>

            {/* Gráfico de finalización por taller para estudiantes */}
            <div className="bg-white p-4 rounded-lg shadow border border-gray-200 mb-6">
              <h3 className="font-bold text-[#007B3E] mb-3 text-center flex items-center justify-center gap-2">
                <MdOutlineWork /> Estado de Talleres (Estudiantes)
              </h3>
              <div className="h-64 md:h-96">
                <Bar 
                  data={studentCompletionData} 
                  options={{ 
                    responsive: true, 
                    maintainAspectRatio: false,
                    scales: {
                      y: {
                        beginAtZero: true,
                        max: 100,
                        title: {
                          display: true,
                          text: 'Porcentaje'
                        }
                      }
                    }
                  }} 
                />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
                <h3 className="font-bold text-[#007B3E] mb-3 text-center">Distribución de Roles</h3>
                <div className="h-64 md:h-80">
                  <Pie data={roleDistributionData} options={{ responsive: true, maintainAspectRatio: false }} />
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
                <h3 className="font-bold text-[#007B3E] mb-3 text-center">
                    {viewMode === 'finalizados' ? 'Progreso de Finalización' : 'Talleres Abiertos'}
                </h3>
                <div className="h-64 md:h-80">
                    <Bar 
                    data={activeTab === 'Docentes' ? studentProgressData : teacherActivityData} 
                    options={{ 
                        responsive: true, 
                        maintainAspectRatio: false,
                        scales: {
                        x: {
                            stacked: true,
                        },
                        y: {
                            stacked: true,
                            beginAtZero: true,
                            max: 8,
                            ticks: {
                            stepSize: 1
                            }
                        }
                        }
                    }} 
                    />
                </div>
                {/* Controles de paginación para el gráfico */}
                {Math.ceil(
                    (activeTab === 'estudiantes' 
                    ? stats.userProgress.filter(u => u.role === 'estudiante').length 
                    : stats.userProgress.filter(u => u.role === 'docente').length) / itemsPerPage
                ) > 1 && (
                    <div className="flex justify-between items-center p-2 bg-gray-50">
                    <button
                        onClick={() => {
                        playClick();
                        setCurrentChartPage(prev => Math.max(prev - 1, 1));
                        }}
                        disabled={currentChartPage === 1}
                        className={`px-3 py-1 text-sm rounded-md ${currentChartPage === 1 ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-[#007B3E] text-white hover:bg-[#009e4f]'}`}
                    >
                        Anterior
                    </button>
                    <span className="text-sm text-gray-600">
                        Página {currentChartPage} de {
                        Math.ceil(
                            (activeTab === 'estudiantes' 
                            ? stats.userProgress.filter(u => u.role === 'estudiante').length 
                            : stats.userProgress.filter(u => u.role === 'docente').length) / itemsPerPage
                        )
                        }
                    </span>
                    <button
                        onClick={() => {
                        playClick();
                        setCurrentChartPage(prev => prev + 1);
                        }}
                        disabled={currentChartPage >= Math.ceil(
                        (activeTab === 'estudiantes' 
                            ? stats.userProgress.filter(u => u.role === 'estudiante').length 
                            : stats.userProgress.filter(u => u.role === 'docente').length) / itemsPerPage
                        )}
                        className={`px-3 py-1 text-sm rounded-md ${currentChartPage >= Math.ceil(
                        (activeTab === 'estudiantes' 
                            ? stats.userProgress.filter(u => u.role === 'estudiante').length 
                            : stats.userProgress.filter(u => u.role === 'docente').length) / itemsPerPage
                        ) ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-[#007B3E] text-white hover:bg-[#009e4f]'}`}
                    >
                        Siguiente
                    </button>
                    </div>
                )}
                </div>
            </div>

            {/* Tabla de actividad por docente */}
            <div className="overflow-x-auto bg-white rounded-lg shadow border border-gray-200 mb-6">
              <h3 className="font-bold text-[#007B3E] p-4 text-center flex items-center justify-center gap-2">
                <FaChalkboardTeacher /> Detalle por Docente
              </h3>
              <div className="max-h-96 overflow-y-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-[#00482B] text-white sticky top-0">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Docente</th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Talleres Totales</th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Talleres Abiertos</th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Talleres Finalizados</th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Progreso</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {paginatedTeachers().map((user, index) => (
                      <tr key={user.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">8</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.opened}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.completed}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div 
                              className="bg-[#00482B] h-2.5 rounded-full" 
                              style={{ width: `${viewMode === 'finalizados' ? user.completionRate : user.openedRate}%` }}
                            ></div>
                          </div>
                          <span className="text-xs text-gray-500">
                            {Math.round(viewMode === 'finalizados' ? user.completionRate : user.openedRate)}%
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {/* Controles de paginación para docentes */}
              {totalTeacherPages > 1 && (
                <div className="flex justify-between items-center p-4 bg-gray-50">
                  <button
                    onClick={() => {
                      playClick();
                      setCurrentTeacherPage(prev => Math.max(prev - 1, 1));
                    }}
                    disabled={currentTeacherPage === 1}
                    className={`px-4 py-2 rounded-md ${currentTeacherPage === 1 ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-[#007B3E] text-white hover:bg-[#009e4f]'}`}
                  >
                    Anterior
                  </button>
                  <span className="text-sm text-gray-600">
                    Página {currentTeacherPage} de {totalTeacherPages}
                  </span>
                  <button
                    onClick={() => {
                      playClick();
                      setCurrentTeacherPage(prev => Math.min(prev + 1, totalTeacherPages));
                    }}
                    disabled={currentTeacherPage === totalTeacherPages}
                    className={`px-4 py-2 rounded-md ${currentTeacherPage === totalTeacherPages ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-[#007B3E] text-white hover:bg-[#009e4f]'}`}
                  >
                    Siguiente
                  </button>
                </div>
              )}
            </div>

            {/* Gráfico de finalización por taller para docentes */}
            <div className="bg-white p-4 rounded-lg shadow border border-gray-200 mb-6">
              <h3 className="font-bold text-[#007B3E] mb-3 text-center flex items-center justify-center gap-2">
                <MdOutlineWork /> Estado de Talleres (Docentes)
              </h3>
              <div className="h-64 md:h-96">
                <Bar 
                  data={teacherCompletionData} 
                  options={{ 
                    responsive: true, 
                    maintainAspectRatio: false,
                    scales: {
                      y: {
                        beginAtZero: true,
                        max: 100,
                        title: {
                          display: true,
                          text: 'Porcentaje'
                        }
                      }
                    }
                  }} 
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Datosestadisticos;