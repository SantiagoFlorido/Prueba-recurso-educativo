import React from 'react'
import { Link } from 'react-router-dom'
import {BiUser} from "react-icons/bi"
import {AiOutlineUnlock} from "react-icons/ai"
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className='text-white h-[100vh] flex justify-center items-center bg-cover bg-center' style={{"backgroundImage": "url('https://res.cloudinary.com/dufzsv87k/image/upload/v1742152924/fondoU.jpg')"}}>

      <div>
        <div className="bg-[#0e3f2788] border border-[#007b3e] rounded-md p-8 shadow-lg">
          <h1 className='text-4x1 text-[30px] text-[#009e4f] font-bold text-center mb-6'>Iniciar sesión</h1>
          {/*<form action="">*/}
            <div className='relative my-4'>
              <input type="text" className='block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-[#007b3e] focus:outline-none focus:ring-0 focus:text-white focus:border-[#007b3e] peer' placeholder=''/>
              <label htmlFor="" className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#007b3e] peer-focus:dark:text-[#007b3e] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Tu nombre de usuario</label>
              <BiUser className='absolute top-4 right-4 '/>
            </div>
            <div className='relative my-4'>
              <input type="password" className='block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-[#007b3e] focus:outline-none focus:ring-0 focus:text-white focus:border-[#007b3e] peer' placeholder=''/>
              <label htmlFor="" className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#007b3e] peer-focus:dark:text-[#007b3e] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Tu contraseña</label>
              <AiOutlineUnlock className='absolute top-4 right-4 '/>
            </div>
            {/* 
            <div className='flex justify-between items-center'>
              <div className='flex gap-2 items-center'>
                <input type="checkbox" name='' id='' />
                <label htmlFor="Remember Me">Remember Me</label>
              </div>
              <Link to='' className='text-[#009e4f] '>Forgot Password?</Link>
            </div>
            */}
            <button onClick={() => navigate('/Principal')} className='w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300 ' type='submit' >Ingresar</button>
            <div>
              <span className='m-4'>Nuevo aqui? 
                <Link className='text-blue-500' to='/Register/Student'> Crear una cuenta</Link>
              </span>
            </div>
          {/*</form>*/}
        </div>
      </div>

    </div>
  )
}

export default Login