import React, { useState } from 'react';
import { AiOutlineUnlock, AiOutlineLoading } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validaciones
    if (!nombre || !password || !confirmPassword) {
      setError('Todos los campos son obligatorios');
      return;
    }
    
    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }
    
    setLoading(true);
    setError('');
    
    try {
      const response = await fetch('https://prueba-api-recurso-educativo.onrender.com/api/v1/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre: nombre,  // Asegúrate que coincida con el modelo de tu DB
          contraseña: password,
          rol: 'docente'
        }),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error al registrar usuario');
      }
      
      navigate('/Principal');
    } catch (err) {
      setError(err.message || 'Error al conectar con el servidor');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='text-white h-[100vh] flex justify-center items-center bg-cover bg-center bg-gray-200'>
      <div className="bg-gray-100 rounded-md p-5">
        <h1 className='text-4x1 text-[30px] text-[#009e4f] font-bold text-center mb-6'>Registrar</h1>
        {error && (
          <div className="mb-4 p-2 bg-red-100 text-red-700 rounded text-center">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className='relative my-4'>
            <input 
              type="text" 
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className='block w-73 py-2.5 px-0 text-sm text-[#007b3e] bg-transparent border-0 border-b-2 border-black appearance-none dark:focus:border-[#007b3e] focus:outline-none focus:ring-0 focus:text-black focus:border-[#007b3e] peer' 
              placeholder=''
            />
            <label htmlFor="" className='absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#007b3e] peer-focus:dark:text-[#007b3e] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>NOMBRE</label>
            <BiUser className='absolute top-4 right-4 text-black'/>
          </div>
          <div className='relative my-4'>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='block w-73 py-2.5 px-0 text-sm text-[#007b3e] bg-transparent border-0 border-b-2 border-black appearance-none dark:focus:border-[#007b3e] focus:outline-none focus:ring-0 focus:text-black focus:border-[#007b3e] peer' 
              placeholder=''
            />
            <label htmlFor="" className='absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#007b3e] peer-focus:dark:text-[#007b3e] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>CONTRASEÑA</label>
            <AiOutlineUnlock className='absolute top-4 right-4 text-black'/>
          </div>
          <div className='relative my-4'>
            <input 
              type="password" 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className='block w-73 py-2.5 px-0 text-sm text-[#007b3e] bg-transparent border-0 border-b-2 border-black appearance-none dark:focus:border-[#007b3e] focus:outline-none focus:ring-0 focus:text-black focus:border-[#007b3e] peer' 
              placeholder=''
            />
            <label htmlFor="" className='absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#007b3e] peer-focus:dark:text-[#007b3e] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>CONFIRMAR CONTRASEÑA</label>
            <AiOutlineUnlock className='absolute top-4 right-4 text-black'/>
          </div>
          
          <button 
            type='submit' 
            disabled={loading}
            className='w-full mb-4 text-[18px] mt-6 rounded-full bg-emerald-700 text-white hover:bg-emerald-500 hover:text-white py-2 transition-colors duration-300 flex justify-center items-center gap-2'
          >
            {loading ? (
              <>
                <AiOutlineLoading className="animate-spin" />
                Procesando...
              </>
            ) : 'Crear cuenta'}
          </button>
          
          <div>
            <span className='m-4 text-black'>Ya tienes una cuenta? 
              <Link className='text-emerald-700 text-1x1' to='/Login/Teacher'> Inicia sesión</Link>
            </span>
          </div>
          <div>
              <span className='m-4 text-black'>Rol equivocado? 
                <Link className='text-emerald-700 text-1x1' to='/Register/Student'> Cambiar a estudiante</Link>
              </span>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default Register;