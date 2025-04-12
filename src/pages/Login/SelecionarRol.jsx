import React from 'react'
import { useNavigate } from 'react-router-dom';

const SelecionarRol = () => {
  const navigate = useNavigate();
  return (
    <div className='relative text-white min-h-[100vh] bg-cover bg-center bg-gray-200' style={{"backgroundImage": "url('https://res.cloudinary.com/dufzsv87k/image/upload/v1744386560/WallpaperRED.png')"}}>
{/* Logos en posición absoluta (arriba a la izquierda) */}
<div className="absolute top-4 left-4 z-10">
        <div className="flex items-center gap-4">
          <img
            src="https://res.cloudinary.com/dufzsv87k/image/upload/v1741305038/logo-titulo_gtcapj.png"
            alt="Logo Universidad"
            className="h-16 md:h-16"
          />
          <img
            src="https://res.cloudinary.com/dufzsv87k/image/upload/v1743288905/logoeludec_qcilsr.png"
            alt="Logo Semillero"
            className="h-16 md:h-16"
          />
        </div>
      </div>
      <div className='flex justify-center items-center h-[100vh]' >
      <div className="bg-gray-100 rounded-md p-0 shadow-lg ">
        <div className="text-center bg-gray p-8 rounded-lg shadow-lg max-w-2xl w-full bg-gray-100">
          <h1 className='text-4x1 text-[#009e4f] text-[30px] font-bold text-center mb-6'>Selecciona tu rol</h1>
            <button onClick={() => navigate('/Login/Teacher')} className='cursor-pointer w-full mb-4 text-[18px] mt-6 rounded-full bg-emerald-700 text-white hover:bg-emerald-500 hover:text-white py-2 transition-colors duration-300 ' type='submit' >Docente</button>
            <button onClick={() => navigate('/Login/Student')} className='cursor-pointer w-full mb-4 text-[18px] mt-6 rounded-full bg-emerald-700 text-white hover:bg-emerald-500 hover:text-white py-2 transition-colors duration-300 ' type='submit' >Estudiante</button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default SelecionarRol