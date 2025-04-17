import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPlus, FaTimes } from 'react-icons/fa';
import useSound from 'use-sound';

const Pagina3Proyectos = () => {
  const navigate = useNavigate();
  const [playClick] = useSound(
    'https://res.cloudinary.com/dufzsv87k/video/upload/v1744909247/ClickSound.mp3',
    { volume: 1.0 }
  );

  // Obtener datos del usuario del localStorage
  const userData = JSON.parse(localStorage.getItem('studentUser') || localStorage.getItem('teacherUser') || '{}');
  const isTeacher = userData?.rol?.toLowerCase() === 'docente';

  // Estado para almacenar los talleres
  const [talleres, setTalleres] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [tallerToDelete, setTallerToDelete] = useState(null);

  // Función para obtener los talleres de la API
  React.useEffect(() => {
    const fetchTalleres = async () => {
      try {
        const response = await fetch('https://api-aws-ndou.onrender.com/talleres');
        if (!response.ok) {
          throw new Error('Error al obtener los talleres');
        }
        const data = await response.json();
        setTalleres(data);
      } catch (error) {
        console.error('Error al cargar talleres:', error);
      }
    };

    fetchTalleres();
  }, []);

  // Función para eliminar un taller
  const handleDeleteTaller = async () => {
    try {
      const response = await fetch(`https://api-aws-ndou.onrender.com/talleres/${tallerToDelete.id}`, {
        method: 'DELETE'
      });

      if (!response.ok) {
        throw new Error('Error al eliminar el taller');
      }

      // Actualizar la lista de talleres
      setTalleres(talleres.filter(t => t.id !== tallerToDelete.id));
      setShowDeleteModal(false);
    } catch (error) {
      console.error('Error al eliminar taller:', error);
      alert('No se pudo eliminar el taller');
    }
  };

  // Función para crear o actualizar la relación usuario-taller (solo para talleres 1-8)
  const handleTallerUsuario = async (userId, tallerId) => {
    try {
      const response = await fetch('https://prueba-api-recurso-educativo.onrender.com/api/v1/usuarios-talleres', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id_usuario: userId,
          id_taller: tallerId,
          estadoabierto: 'abierto'
        }),
      });

      if (!response.ok) {
        throw new Error('Error al actualizar el taller');
      }

      return await response.json();
    } catch (error) {
      console.error('Error al manejar la relación usuario-taller:', error);
      throw error;
    }
  };

  // Manejo de click para talleres estáticos (1-8) con sonido
  const handleTopicClick = async (topicNumber) => {
    playClick();
    setTimeout(async () => {
      if (!userData?.id) {
        console.error('No se encontró ID de usuario en los datos locales');
        alert('No se pudo identificar tu usuario. Por favor, inicia sesión nuevamente.');
        return;
      }
    
      try {
        // Solo para talleres 1-8: crear/actualizar la relación usuario-taller
        await handleTallerUsuario(userData.id, topicNumber);

        // Navegar según el rol
        if (isTeacher) {
          navigate(`/Tema${topicNumber}`);
        } else {
          navigate(`/Contenido${topicNumber}`);
        }
      } catch (error) {
        console.error('Error:', error);
        alert(`Error: ${error.message || 'No se pudo iniciar el taller'}`);
      }
    }, 200);
  };

  // Manejo de click para talleres dinámicos (de la API) con sonido
  const handleTallerApiClick = (tallerId) => {
    playClick();
    setTimeout(() => {
      if (!userData?.id) {
        console.error('No se encontró ID de usuario en los datos locales');
        alert('No se pudo identificar tu usuario. Por favor, inicia sesión nuevamente.');
        return;
      }

      // Navegar directamente sin verificar relación usuario-taller
      if (isTeacher) {
        navigate(`/Tema/${tallerId}`);
      } else {
        navigate(`/Contenido/${tallerId}`);
      }
    }, 200);
  };

  // Función para abrir el modal de confirmación de eliminación con sonido
  const confirmDelete = (taller, e) => {
    e.stopPropagation();
    playClick();
    setTallerToDelete(taller);
    setShowDeleteModal(true);
  };

  // Función para navegación con sonido
  const handleNavigationWithSound = (path) => {
    playClick();
    setTimeout(() => {
      navigate(path);
    }, 200);
  };

  // Función para eliminar con sonido
  const handleDeleteWithSound = () => {
    playClick();
    setTimeout(() => {
      handleDeleteTaller();
    }, 200);
  };

  // Función para cancelar con sonido
  const handleCancelWithSound = () => {
    playClick();
    setTimeout(() => {
      setShowDeleteModal(false);
    }, 200);
  };

  return (
    <div className="bg-white flex flex-col md:flex-row min-h-screen">
      {/* Rectángulo izquierdo con el texto "Proyectos" */}
      <div className="w-full md:w-1/4 p-4 md:fixed md:left-0 md:top-0 md:h-full flex flex-col h-[100px]">
        <div className="border text-2xl font-bold w-full h-full flex items-center justify-center bg-gray-200 rounded-lg">
          <h1>Proyectos</h1>
        </div>
        {/* Botón "Regresar" dentro del contenedor izquierdo */}
        <button
          onClick={() => handleNavigationWithSound('/Principal')}
          className="hidden md:block mt-4 w-full bg-[#007B3E] text-white px-4 py-2 rounded-lg shadow-lg hover:bg-[#009e4f] transition-colors"
        >
          Regresar
        </button>
      </div>

      {/* Contenedor de los temas con desplazamiento vertical */}
      <div className="w-full md:w-3/4 p-4 overflow-y-auto md:ml-[25%] pb-20 md:pb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center content-center">
          {/* Tema 1 */}
          <div onClick={() => handleTopicClick(1)} className="cursor-pointer border rounded-lg overflow-hidden hover:opacity-70">
            <div className="h-10 flex items-center justify-center bg-[#007B3E] text-white">
              <h2 className="text-xl font-semibold">Taller 1: El viaje de Pedro</h2>
            </div>
            <div className="h-64 flex items-center justify-center">
              <img
                src="https://res.cloudinary.com/dufzsv87k/image/upload/v1741305069/mapa_igu9fc.webp"
                alt="Animación 1"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Tema 2 */}
          <div onClick={() => handleTopicClick(2)} className="cursor-pointer border rounded-lg overflow-hidden hover:opacity-70">
            <div className="h-10 flex items-center justify-center bg-[#007B3E] text-white">
              <h2 className="text-xl font-semibold">Taller 2: Armando un Mbot</h2>
            </div>
            <div className="h-64 flex items-center justify-center">
              <img
                src="https://res.cloudinary.com/dufzsv87k/image/upload/v1741305069/piezas_nemtfi.webp"
                alt="Animación 2"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Tema 3 */}
          <div onClick={() => handleTopicClick(3)} className="cursor-pointer border rounded-lg overflow-hidden hover:opacity-70">
            <div className="h-10 flex items-center justify-center bg-[#007B3E] text-white">
              <h2 className="text-xl font-semibold">Taller 3: Conectar un Mbot al PC</h2>
            </div>
            <div className="h-64 flex items-center justify-center">
              <img
                src="https://res.cloudinary.com/dufzsv87k/image/upload/v1741305067/conectar_iv5sdj.webp"
                alt="Animación 3"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Tema 4 */}
          <div onClick={() => handleTopicClick(4)} className="cursor-pointer border rounded-lg overflow-hidden hover:opacity-70">
            <div className="h-10 flex items-center justify-center bg-[#007B3E] text-white">
              <h2 className="text-xl font-semibold">Taller 4: Conectar un Mbot al Celular</h2>
            </div>
            <div className="h-64 flex items-center justify-center">
              <img
                src=""
                alt="Animación 4"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Tema 5 */}
          <div onClick={() => handleTopicClick(5)} className="cursor-pointer border rounded-lg overflow-hidden hover:opacity-70">
            <div className="h-10 flex items-center justify-center bg-[#007B3E] text-white">
              <h2 className="text-xl font-semibold">Taller 5: Evitar objetos con el Mbot</h2>
            </div>
            <div className="h-64 flex items-center justify-center">
              <img
                src="https://res.cloudinary.com/dufzsv87k/image/upload/v1741305070/sensor4_yxeq9c.webp"
                alt="Animación 4"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Tema 6 */}
          <div onClick={() => handleTopicClick(6)} className="cursor-pointer border rounded-lg overflow-hidden hover:opacity-70">
            <div className="h-10 flex items-center justify-center bg-[#007B3E] text-white">
              <h2 className="text-xl font-semibold">Taller 6: Seguir lineas con el Mbot</h2>
            </div>
            <div className="h-64 flex items-center justify-center">
              <img
                src="https://res.cloudinary.com/dufzsv87k/image/upload/v1741305068/linea5_ixd3hm.webp"
                alt="Animación 5"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Tema 7 */}
          <div onClick={() => handleTopicClick(7)} className="cursor-pointer border rounded-lg overflow-hidden hover:opacity-70">
            <div className="h-10 flex items-center justify-center bg-[#007B3E] text-white">
              <h2 className="text-xl font-semibold">Taller 7: </h2>
            </div>
            <div className="h-64 flex items-center justify-center">
              <img
                src=""
                alt="Animación 7"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Tema 8 */}
          <div onClick={() => handleTopicClick(8)} className="cursor-pointer border rounded-lg overflow-hidden hover:opacity-70">
            <div className="h-10 flex items-center justify-center bg-[#007B3E] text-white">
              <h2 className="text-xl font-semibold">Taller 8: </h2>
            </div>
            <div className="h-64 flex items-center justify-center">
              <img
                src=""
                alt="Animación 8"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Comentario "Creados por docentes" */}
          {talleres.length > 0 && (
            <div className="col-span-1 md:col-span-2 text-gray-500 text-center italic">
              Creados por docentes:
            </div>
          )}

          {/* Taller de proyectos guardados */}
          {talleres.length > 0 && (
            talleres.map((taller) => (
              <div 
                key={taller.id} 
                onClick={() => handleTallerApiClick(taller.id)} 
                className="cursor-pointer border rounded-lg overflow-hidden hover:opacity-70 relative"
              >
                {/* Botón de eliminar (solo para docentes) */}
                {isTeacher && (
                  <button
                    onClick={(e) => confirmDelete(taller, e)}
                    className="absolute top-2 right-3 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 z-10 cursor-pointer"
                  >
                    <FaTimes size={14} />
                  </button>
                )}
                
                <div className="h-10 flex items-center justify-center bg-[#007B3E] text-white">
                  <h2 className="text-xl font-semibold">{taller.nombre}</h2>
                </div>
                <div className="h-64 flex items-center justify-center">
                  {taller.portadaUrl ? (
                    <img
                      src={taller.portadaUrl}
                      alt={taller.nombre}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <span>Sin imagen</span>
                    </div>
                  )}
                </div>
              </div>
            ))
          )}

          {/* Botón para agregar nuevo proyecto - SOLO PARA DOCENTES */}
          {isTeacher && (
            <div 
              onClick={() => handleNavigationWithSound('/TallerNuevo')}
              className="cursor-pointer border rounded-lg overflow-hidden hover:opacity-70"
            >
              <div className="h-10 flex items-center justify-center bg-[#007B3E] text-white">
                <h2 className="text-xl font-semibold">Agregar un nuevo Proyecto</h2>
              </div>  
              <div className="h-64 flex items-center justify-center bg-gray-100">
                <div className="w-16 h-16 rounded-full bg-[#007B3E] flex items-center justify-center text-white hover:bg-[#009e4f] transition-colors">
                  <FaPlus size={24} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Botón "Regresar" */}
      <button
        onClick={() => handleNavigationWithSound('/Principal')}
        className="md:hidden fixed bottom-4 left-4 right-4 md:left-4 md:right-[calc(25%+1rem)] bg-[#007B3E] text-white px-4 py-2 rounded-lg shadow-lg hover:bg-[#009e4f] transition-colors"
      >
        Regresar
      </button>

      {/* Modal de confirmación para eliminar taller */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-transparent bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full border-1 border-black">
            <h3 className="text-xl font-bold mb-4">¿Estás seguro de eliminar este taller?</h3>
            <p className="mb-6">Quizás no lo vuelvas a ver, esto es mucho tiempo :(</p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleCancelWithSound}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition-colors cursor-pointer"
              >
                Cancelar
              </button>
              <button
                onClick={handleDeleteWithSound}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors cursor-pointer"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pagina3Proyectos;