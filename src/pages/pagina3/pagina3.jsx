import React from 'react';
import { useNavigate } from 'react-router-dom';

const Pagina3 = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white p-4 w-full min-h-screen flex flex-col">
      {/* Fila superior: Menú Principal, Log in/Log up y Close */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl md:text-2xl font-bold">Menú Principal</h1>

        <div className="flex items-center gap-2">
          <div className="flex flex-col md:flex-row gap-2">
            <button className="bg-green-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-green-700" onClick={() => navigate('/')}>Cerrar Sesión</button>
          </div>
          <button className="bg-gray-200 px-3 py-1 rounded-lg text-sm hover:bg-gray-300" onClick={() => navigate('/')}>Inicio</button>
        </div>
      </div>

      {/* Contenedor con 3 columnas y 3 filas */}
      <div className="grid grid-cols-1 md:grid-cols-[minmax(200px,_1fr)_minmax(100px,_0.3fr)_240px] gap-4 flex-grow">
        {/* Proyectos (Columna 1, Fila 1) */}
        <div className="bg-green-100 p-2 rounded-md hover:bg-green-200 transition-colors flex flex-col">
          <h2 className="text-lg font-bold text-center" onClick={() => navigate('/Proyectos')}>Proyectos</h2>
          <div className="grid grid-cols-2 gap-3 mt-2 flex-grow">
            <div className="bg-blue-100 p-2 text-center content-center flex items-center justify-center hover:bg-blue-200 transition-colors" onClick={() => navigate('/Conexión')}>
              Formas de conexión
            </div>
            <div className="bg-red-100 p-2 rounded-br-md text-center content-center flex items-center justify-center">
              Proyectos 1 de 5
            </div>
          </div>
        </div>

        {/* Recursos (Columna 2, Fila 1) */}
        <div className="flex flex-col space-y-2">
          <div className="bg-gray-100 p-2 rounded-lg flex-grow flex items-center justify-center">
            <h2 className="text-lg font-bold text-center">Recursos Gestor</h2>
          </div>
          <div className="bg-gray-100 p-2 rounded-lg flex-grow flex items-center justify-center">
            <h2 className="text-lg font-bold text-center">Recursos de apoyo</h2>
          </div>
        </div>

        {/* Proyectos Guardados (Columna 3, ocupa todas las filas) */}
        <div className="row-span-3 bg-gray-100 p-2 rounded-lg">
          <h2 className="text-lg font-bold mb-2 text-center">Proyectos Guardados</h2>
          <div className="space-y-2">
            <div className="bg-white p-2 rounded-lg shadow-sm">
              <h3 className="font-semibold">Proyecto Guardado 1</h3>
              {/* Descripción del proyecto guardado 1 */}
            </div>
            <div className="bg-white p-2 rounded-lg shadow-sm">
              <h3 className="font-semibold">Proyecto Guardado 2</h3>
              {/* Descripción del proyecto guardado 2 */}
            </div>
            <div className="bg-white p-2 rounded-lg shadow-sm">
              <h3 className="font-semibold">Proyecto Guardado 3</h3>
              {/* Descripción del proyecto guardado 3 */}
            </div>
            <div className="bg-white p-2 rounded-lg shadow-sm">
              <h3 className="font-semibold">Proyecto Guardado 4</h3>
              {/* Descripción del proyecto guardado 4 */}
            </div>
            <div className="bg-white p-2 rounded-lg shadow-sm">
              <h3 className="font-semibold">Proyecto Guardado 5</h3>
              {/* Descripción del proyecto guardado 5 */}
            </div>
          </div>
        </div>

        {/* Imagen Temas del Proyecto (Columna 1-2, Fila 2) */}
        <div className="col-span-1 md:col-span-2 bg-gray-100 p-2 rounded-lg">
          <img
            src="public/image/temas-proyectos.png"
            alt="Temas del proyecto"
            className="w-full h-24 object-cover rounded-md"
          />
        </div>

        {/* Créditos (Columna 1-2, Fila 3) */}
        <div className="col-span-1 md:col-span-2 bg-gray-100 p-2 rounded-lg">
          <h2 className="text-lg font-bold text-center">Créditos</h2>
          <p className="text-sm text-center">Aquí puedes agregar los créditos relacionados con los temas y proyectos.</p>
        </div>
      </div>
    </div>
  );
};

export default Pagina3;