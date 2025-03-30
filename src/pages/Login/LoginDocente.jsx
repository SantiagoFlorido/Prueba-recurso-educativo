import React from 'react'
import { Link } from 'react-router-dom'
import {BiUser} from "react-icons/bi"
import {AiOutlineUnlock} from "react-icons/ai"
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className='text-white h-[100vh] flex justify-center items-center bg-cover bg-center bg-gray-200' >

      <div>
        <div className="bg-gray-100 rounded-md p-7 shadow-lg">
          <h1 className='text-4x1 text-[30px] text-[#009e4f] font-bold text-center mb-6'>Iniciar sesión</h1>
          {/*<form action="">*/}
            <div className='relative my-4'>
              <input type="text" className='block w-73 py-2.5 px-0 text-sm text-[#007b3e] bg-transparent border-0 border-b-2 border-black appearance-none dark:focus:border-[#007b3e] focus:outline-none focus:ring-0 focus:text-black focus:border-[#007b3e] peer' placeholder=''/>
              <label htmlFor="" className='absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#007b3e] peer-focus:dark:text-[#007b3e] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>NOMBRE</label>
              <BiUser className='absolute top-4 right-4 text-black '/>
            </div>
            <div className='relative my-4'>
              <input type="password" className='block w-73 py-2.5 px-0 text-sm text-[#007b3e] bg-transparent border-0 border-b-2 border-black appearance-none dark:focus:border-[#007b3e] focus:outline-none focus:ring-0 focus:text-black focus:border-[#007b3e] peer' placeholder=''/>
              <label htmlFor="" className='absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#007b3e] peer-focus:dark:text-[#007b3e] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>CONTRASEÑA</label>
              <AiOutlineUnlock className='absolute top-4 right-4 text-black '/>
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
            <button onClick={() => navigate('/Principal')} className='cursor-pointer w-full mb-4 text-[18px] mt-6 rounded-full bg-emerald-700 text-white hover:bg-emerald-500 hover:text-white py-2 transition-colors duration-300 ' type='submit' >Ingresar</button>
            <div>
              <span className='m-4 text-black'>Nuevo aqui? 
                <Link className='text-emerald-700 text-2xl' to='/Register/Teacher'> Crear una cuenta</Link>
              </span>
            </div>
          {/*</form>*/}
        </div>
      </div>

    </div>
  )
}

export default Login