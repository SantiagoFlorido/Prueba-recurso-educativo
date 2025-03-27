import React from 'react'
import { useNavigate } from 'react-router-dom';

const SelecionarRol = () => {
  const navigate = useNavigate();
  return (
    <div className='text-white h-[100vh] flex justify-center items-center bg-cover bg-center bg-gray-200'>

      <div>
        <div className="text-center bg-gray p-8 rounded-lg shadow-lg max-w-2xl w-full bg-gray-100">
          <h1 className='text-4x1 text-[#009e4f] text-[30px] font-bold text-center mb-6'>Seleciona tu rol</h1>
            <button onClick={() => navigate('/Login/Teacher')} className='w-full mb-4 text-[18px] mt-6 rounded-full bg-emerald-700 text-white hover:bg-emerald-500 hover:text-white py-2 transition-colors duration-300 ' type='submit' >Docente</button>
            <button onClick={() => navigate('/Login/Student')} className='w-full mb-4 text-[18px] mt-6 rounded-full bg-emerald-700 text-white hover:bg-emerald-500 hover:text-white py-2 transition-colors duration-300 ' type='submit' >Estudiante</button>
        </div>
      </div>

    </div>
  )
}

export default SelecionarRol