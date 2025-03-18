import React from 'react'
import { AiOutlineUnlock } from 'react-icons/ai'
import { BiUser } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  return (
    <div className='text-white h-[100vh] flex justify-center items-center bg-cover bg-center' style={{"backgroundImage": "url('https://res.cloudinary.com/dufzsv87k/image/upload/v1742152924/fondoU.jpg')"}}>
            <div className="bg-[#0e3f2788] border border-[#007b3e] rounded-md p-8 ">
              <h1 className='text-4x1 text-[30px] text-[#009e4f] font-bold text-center mb-6'>Registrar</h1>
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
                <div className='relative my-4'>
                  <input type="password" className='block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-[#007b3e] focus:outline-none focus:ring-0 focus:text-white focus:border-[#007b3e] peer' placeholder=''/>
                  <label htmlFor="" className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#007b3e] peer-focus:dark:text-[#007b3e] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Confirma tu contraseña</label>
                  <AiOutlineUnlock className='absolute top-4 right-4 '/>
                </div>
                
                <button onClick={() => navigate('/Principal')} className='w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300 ' type='submit'>Crear</button>
                <div>
                  <span className='m-4'>Ya tienes una cuenta? 
                    <Link className='text-blue-500' to='/Login/Teacher'> Inicia sesión</Link>
                  </span>
                </div>
              {/*</form>*/}
            </div>
          </div>
  )
}

export default Register