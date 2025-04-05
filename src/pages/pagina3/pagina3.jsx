import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaQuestionCircle } from 'react-icons/fa';

const Pagina3 = () => {
  const navigate = useNavigate();
  const [showHelp, setShowHelp] = useState(false);

  const handleLogout = () => {
    // Limpiar localStorage
    localStorage.removeItem('studentUser');
    localStorage.removeItem('teacherUser');
    // Redirigir a la página de inicio
    navigate('/');
  };

  const toggleHelp = () => {
    setShowHelp(!showHelp);
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
        </div>
      </div>

      {/* Contenedor con 3 columnas y 3 filas */}
      <div className="grid grid-cols-1 md:grid-cols-[minmax(200px,_1fr)_minmax(100px,_0.3fr)_240px] gap-4 flex-grow">
        {/* Proyectos (Columna 1, Fila 1) */}
        <div className="flex items-center justify-center bg-gray-100 p-2 rounded-md hover:bg-gray-200 transition-colors  min-h-[180px] cursor-pointer text-lg font-bold text-center" onClick={() => navigate('/Proyectos')}>
          {showHelp ? "Banner que indica la funcion del boton" : "Proyectos 0 de 6"}
        </div>

        {/* Recursos (Columna 2, Fila 1) */}
        <div className="flex flex-col space-y-2 min-h-[180px]">
          <div 
            className="bg-gray-100 p-2 rounded-lg flex-grow flex items-center justify-center hover:bg-gray-200 cursor-pointer"
            onClick={() => window.open('https://drive.google.com/drive/folders/1BRRCv8quGLVnSsB9ndCHO7cdWUf9sh3-?usp=sharing', '_blank', 'noopener,noreferrer')}   
          >
            <h2 className="text-lg text-center font-semibold">
              {showHelp ? "Banner que indica la funcion del boton" : "Recursos Gestor"}
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

        {/* Proyectos Guardados (Columna 3, ocupa todas las filas) */}
        <div className="row-span-2 bg-gray-100 p-2 rounded-lg">
          <h2 className="text-lg font-bold mb-2 text-center">Proyectos Guardados</h2>
          <div className="space-y-2">
            <div className="bg-white p-2 rounded-lg shadow-sm cursor-pointer">
              <h3 className="font-semibold">Proyecto Guardado 1</h3>
            </div>
            <div className="bg-white p-2 rounded-lg shadow-sm cursor-pointer">
              <h3 className="font-semibold">Proyecto Guardado 2</h3>
            </div>
            <div className="bg-white p-2 rounded-lg shadow-sm cursor-pointer">
              <h3 className="font-semibold">Proyecto Guardado 3</h3>
            </div>
            <div className="bg-white p-2 rounded-lg shadow-sm cursor-pointer">
              <h3 className="font-semibold">Proyecto Guardado 4</h3>
            </div>
            <div className="bg-white p-2 rounded-lg shadow-sm cursor-pointer">
              <h3 className="font-semibold">Proyecto Guardado 5</h3>
            </div>
            <div className="bg-white p-2 rounded-lg shadow-sm cursor-pointer">
              <h3 className="font-semibold">Proyecto Guardado 6</h3>
            </div>
            <div className="bg-white p-2 rounded-lg shadow-sm cursor-pointer">
              <h3 className="font-semibold">Proyecto Guardado 7</h3>
            </div>
            <div className="bg-white p-2 rounded-lg shadow-sm cursor-pointer">
              <h3 className="font-semibold">Proyecto Guardado 8</h3>
            </div>
          </div>
        </div>

        {/* Contenedor combinado para Imagen y Créditos */}
        <div className="col-span-1 md:col-span-2">
          {/* Imagen Temas del Proyecto */}
          <div className="bg-gray-100 p-2 rounded-lg">
            <img
              src="https://res.cloudinary.com/dufzsv87k/image/upload/v1743284192/Imagenes%20Recurso%20Educativo/Banner%20menu%20principal/vr8kxu1robbc9h0jxef6.jpg"
              alt="Banner "
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