import React from 'react'
import { useNavigate } from 'react-router-dom';

const SelecionarRol = () => {
  const navigate = useNavigate();
  return (
    <div className='text-white h-[100vh] flex justify-center items-center bg-cover bg-center' style={{"backgroundImage": "url('https://res.cloudinary.com/dufzsv87k/image/upload/v1742152924/fondoU.jpg')"}}>

      <div>
        <div className="bg-[#0e3f2788] border border-[#007b3e] rounded-md p-8 shadow-lg">
          <h1 className='text-4x1 text-[30px] font-bold text-center mb-6'>Seleciona tu rol</h1>
            <button onClick={() => navigate('/Login/Teacher')} className='w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300 ' type='submit' >Docente</button>
            <button onClick={() => navigate('/Login/Student')} className='w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300 ' type='submit' >Estudiante</button>
        </div>
      </div>

    </div>
  )
}

export default SelecionarRol