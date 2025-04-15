import React from 'react';
import { useNavigate } from 'react-router-dom';

const NuevoTaller = () => {
    const navigate = useNavigate();
    
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full">
                <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                    Nuevo Taller
                </h1>
                
                <p className="text-gray-600 mb-8 text-center">
                    Plantilla para agregar todos los datos del taller nuevo. 
                    Lo sentimos, esta función aún no está disponible.
                </p>
                
                <div className="flex justify-center">
                    <button 
                        onClick={() => navigate('/Proyectos')}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg transition duration-200"
                    >
                        Regresar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default NuevoTaller;