import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const TallerDinamicoDescripcion = () => {
  const navigate = useNavigate();
  const { tallerId } = useParams();
  const [taller, setTaller] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTaller = async () => {
      try {
        const response = await fetch(`https://api-aws-ndou.onrender.com/talleres/${tallerId}`);
        if (!response.ok) {
          throw new Error('No se pudo cargar el taller');
        }
        const data = await response.json();
        setTaller(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTaller();
  }, [tallerId]);

  // Función para determinar el color según el nivel de dificultad
  const getDifficultyColor = (nivel) => {
    switch(nivel?.toUpperCase()) {
      case 'FÁCIL':
        return 'text-blue-600';
      case 'INTERMEDIO':
        return 'text-orange-400';
      case 'DIFÍCIL':
        return 'text-red-500';
      default:
        return 'text-blue-400';
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#007B3E]"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-red-500 text-lg">{error}</div>
      </div>
    );
  }

  if (!taller) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-gray-500 text-lg">No se encontró el taller</div>
      </div>
    );
  }

  return (
    <div className="bg-white w-full h-screen p-4 md:p-8 flex flex-col">
      {/* Título centrado en la parte superior */}
      <h1 className="border text-2xl md:text-3xl font-bold text-center mb-4 md:mb-6 rounded-lg">
        {taller.nombre}
      </h1>

      {/* Contenedor principal */}
      <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
        {/* Contenedor izquierdo (contenido del taller con scroll) */}
        <div className="border w-full md:w-1/2 pr-0 md:pr-4 mb-4 md:mb-0 rounded-lg p-6 bg-white shadow-md overflow-y-auto">
          {/* Sección de Descripción */}
          <div className="mb-4 md:mb-6">
            <h2 className="text-lg md:text-xl mb-2 font-bold">Descripción</h2>
            <p className="text-gray-700 mb-4">
              {taller.descripcion}
            </p>
            <ul className="list-disc pl-5 text-gray-700">
              <li><strong>Duración:</strong> {taller.duracion}</li>
              <li>
                <strong>Materiales:</strong>
                <ul className="list-disc pl-5">
                  {taller.materiales.split('\n').map((material, index) => (
                    material.trim() && <li key={index}>{material.trim()}</li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>

          {/* Sección de Nivel de Dificultad, Objetivos y Finalidades */}
          <div className="mb-4 md:mb-6">
            <h2 className="text-lg md:text-xl font-semibold mb-2">
              Nivel de dificultad: <span className={getDifficultyColor(taller.nivelDificultad)}>
                {taller.nivelDificultad}
              </span>
            </h2>
            <ul className="list-disc pl-5 text-gray-700">
              <li>
                <strong>Objetivos:</strong>
                <ul className="list-disc pl-5">
                  {taller.objetivos.split('\n').map((objetivo, index) => (
                    objetivo.trim() && <li key={index}>{objetivo.trim()}</li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        </div>

        {/* Contenedor derecho (imagen, video y botones) */}
        <div className="w-full md:w-1/2 pl-0 md:pl-4 flex flex-col">
          {/* Imagen o video */}
          <div className="border flex-1 mb-4 rounded-lg overflow-hidden">
            <div className="bg-gray-200 h-48 md:h-full flex items-center justify-center rounded-lg">
              {taller.portadaUrl ? (
                <img
                  src={taller.portadaUrl}
                  alt="Portada del taller"
                  className="w-full h-full object-cover rounded-md"
                />
              ) : (
                <span className="text-gray-500">No hay imagen disponible</span>
              )}
            </div>
          </div>

          {/* Botones en la parte inferior */}
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <button
              onClick={() => navigate('/Proyectos')}
              className="bg-[#007B3E] text-white px-4 py-2 rounded shadow-lg hover:bg-[#009e4f] transition-colors w-full md:w-80 cursor-pointer"
            >
              Regresar
            </button>
            <button
              onClick={() => navigate(`/Contenido/${tallerId}`)}
              className="bg-[#007B3E] text-white px-4 py-2 rounded shadow-lg hover:bg-[#009e4f] transition-colors w-full md:w-80 cursor-pointer"
            >
              Iniciar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TallerDinamicoDescripcion;