import React from 'react';
import { useNavigate } from 'react-router-dom';

const Pagina3Proyectos = () => {
    const navigate = useNavigate();
  return (
    <div className="bg-white w-[1369px] h-[642px] flex">
      {/* Rectángulo izquierdo con el texto "Proyectos" */}
      <div className="w-1/4 flex items-center justify-center">
        <h1 className="border text-2xl font-bold w-80 h-155 text-center content-center bg-gray-200">Proyectos</h1>
      </div>

      {/* Contenedor de los temas con desplazamiento vertical */}
      <div className="w-3/4 p-4 overflow-y-auto">
        <div className="grid grid-cols-2 gap-4 text-center content-center">
          {/* Tema 1 */}
          <div onClick={() => navigate('/Tema1')} className="border rounded-lg overflow-hidden">
            <div className="h-10 flex items-center justify-center bg-gray-100">
              <h2 className="text-xl font-semibold">Tema 1</h2>
            </div>
            <div className="h-64 flex items-center justify-center"> {/* Aumenté la altura a h-64 */}
              <img src="ruta/a/tu/imagen1.gif" alt="Animación 1" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Tema 2 */}
          <div onClick={() => navigate('/Tema2')} className="border rounded-lg overflow-hidden">
            <div className="h-10 flex items-center justify-center bg-gray-100">
              <h2 className="text-xl font-semibold">Tema 2</h2>
            </div>
            <div className="h-64 flex items-center justify-center"> {/* Aumenté la altura a h-64 */}
              <img src="ruta/a/tu/imagen2.gif" alt="Animación 2" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Tema 3 */}
          <div onClick={() => navigate('/Tema3')} className="border rounded-lg overflow-hidden">
            <div className="h-10 flex items-center justify-center bg-gray-100">
              <h2 className="text-xl font-semibold">Tema 3</h2>
            </div>
            <div className="h-64 flex items-center justify-center"> {/* Aumenté la altura a h-64 */}
              <img src="ruta/a/tu/imagen3.gif" alt="Animación 3" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Tema 4 */}
          <div onClick={() => navigate('/Tema4')} className="border rounded-lg overflow-hidden">
            <div className="h-10 flex items-center justify-center bg-gray-100">
              <h2 className="text-xl font-semibold">Tema 4</h2>
            </div>
            <div className="h-64 flex items-center justify-center"> {/* Aumenté la altura a h-64 */}
              <img src="ruta/a/tu/imagen4.gif" alt="Animación 4" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Tema 5 */}
          <div onClick={() => navigate('/Tema5')} className="border rounded-lg overflow-hidden">
            <div className="h-10 flex items-center justify-center bg-gray-100">
              <h2 className="text-xl font-semibold">Tema 5</h2>
            </div>
            <div className="h-64 flex items-center justify-center"> {/* Aumenté la altura a h-64 */}
              <img src="ruta/a/tu/imagen5.gif" alt="Animación 5" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagina3Proyectos;