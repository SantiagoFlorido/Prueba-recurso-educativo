import React from 'react';
import { useNavigate } from 'react-router-dom';

const Pagina3Proyectos = () => {
  const navigate = useNavigate();

  // Función para crear o actualizar la relación usuario-taller
  const handleTallerUsuario = async (userId, tallerId) => {
    try {
      // Primero intentamos crear/actualizar la relación
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

  const handleTopicClick = async (topicNumber) => {
    const userData = JSON.parse(localStorage.getItem('studentUser') || localStorage.getItem('teacherUser'));
    
    if (!userData?.id) {
      console.error('No se encontró ID de usuario en los datos locales');
      alert('No se pudo identificar tu usuario. Por favor, inicia sesión nuevamente.');
      return;
    }
  
    const isTeacher = userData?.rol?.toLowerCase() === 'docente';
  
    try {
      // 1. Crear/actualizar la relación usuario-taller
      await handleTallerUsuario(userData.id, topicNumber);

      // 2. Navegar según el rol
      if (isTeacher) {
        navigate(`/Tema${topicNumber}`);
      } else {
        navigate(`/Contenido${topicNumber}`);
      }
  
    } catch (error) {
      console.error('Error:', error);
      alert(`Error: ${error.message || 'No se pudo iniciar el taller'}`);
    }
  };

  return (
    <div className="bg-white flex flex-col md:flex-row">
      {/* Rectángulo izquierdo con el texto "Proyectos" */}
      <div className="w-full md:w-1/4 p-4 md:fixed md:left-0 md:top-0 md:h-screen">
        <div className="border text-2xl font-bold w-full md:w-80 h-40 md:h-140 flex items-center justify-center bg-gray-200 rounded-lg">
          <h1>Proyectos</h1>
        </div>
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
        </div>
      </div>

      {/* Botón "Regresar" */}
      <button
        onClick={() => navigate('/Principal')}
        className="fixed bottom-4 left-4 right-4 md:left-4 md:right-auto bg-[#007B3E] text-white px-4 py-2 rounded-lg shadow-lg hover:bg-[#009e4f] transition-colors w-[calc(100%-2rem)] md:w-80 mx-auto max-w-[384px]"
      >
        Regresar
      </button>
    </div>
  );
};

export default Pagina3Proyectos;