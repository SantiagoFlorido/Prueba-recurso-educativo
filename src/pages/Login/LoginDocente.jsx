import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BiUser } from "react-icons/bi";
import { AiOutlineUnlock, AiOutlineLoading } from "react-icons/ai";

const Login = () => {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!nombre || !password) {
      setError('Todos los campos son obligatorios');
      return;
    }
    
    setLoading(true);
    setError('');

    try {
      // Buscar al usuario por nombre
      const searchResponse = await fetch(`https://prueba-api-recurso-educativo.onrender.com/api/v1/users?nombre=${nombre}`);
      
      if (!searchResponse.ok) {
        throw new Error('Error al buscar usuario');
      }

      const users = await searchResponse.json();
      console.log('Respuesta API:', users); // Para debugging
      
      // Verificar si encontramos al usuario
      if (!users || users.length === 0) {
        throw new Error('Usuario no encontrado');
      }

      const user = users.find(u => u.nombre === nombre); // Búsqueda exacta
      if (!user) {
        throw new Error('Credenciales incorrectas');
      }

      // Verificación robusta del rol (insensible a mayúsculas/espacios)
      const normalizedRole = String(user.rol).toLowerCase().trim();
      if (normalizedRole !== 'docente') {
        throw new Error(`Acceso restringido. Rol actual: ${user.rol}`);
      }

      // Verificar la contraseña
      if (user.contraseña !== password) {
        throw new Error('Contraseña incorrecta');
      }

      // Guardar datos de usuario en localStorage (actualizado)
      localStorage.setItem('currentUser', JSON.stringify({
        id: user.id_usuario || user.id,
        nombre: user.nombre,
        rol: user.rol,
        tipo: 'docente', // Identificador adicional
        timestamp: new Date().getTime() // Para control de expiración
      }));

      // Guardar también específicamente como docente
      localStorage.setItem('teacherUser', JSON.stringify({
        id: user.id_usuario || user.id,
        nombre: user.nombre,
        rol: user.rol
      }));

      // Redirigir al dashboard de docentes
      navigate('/Principal');
      
    } catch (err) {
      console.error('Error en login:', err); // Para debugging
      setError(err.message || 'Error al iniciar sesión');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='text-white h-[100vh] flex justify-center items-center bg-cover bg-center bg-gray-200'>
      <div>
        <div className="bg-gray-100 rounded-md p-7 shadow-lg">
          <h1 className='text-4x1 text-[30px] text-[#009e4f] font-bold text-center mb-6'>Iniciar sesión</h1>
          
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
              <BiUser className='absolute top-4 right-4 text-black '/>
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
              <AiOutlineUnlock className='absolute top-4 right-4 text-black '/>
            </div>
            
            <button 
              type='submit' 
              disabled={loading}
              className='cursor-pointer w-full mb-4 text-[18px] mt-6 rounded-full bg-emerald-700 text-white hover:bg-emerald-500 hover:text-white py-2 transition-colors duration-300 flex justify-center items-center gap-2'
            >
              {loading ? (
                <>
                  <AiOutlineLoading className="animate-spin" />
                  Verificando...
                </>
              ) : 'Ingresar'}
            </button>
            
            <div>
              <span className='m-4 text-black'>Nuevo aqui? 
                <Link className='text-emerald-700 text-1xl' to='/Register/Teacher'> Crear una cuenta</Link>
              </span>
            </div>
            <div>
              <span className='m-4 text-black'>Rol equivocado? 
                <Link className='text-emerald-700 text-1xl' to='/Login/Student'> Cambiar a estudiante</Link>
              </span>
            </div>
            {/*Borrar luego*/}
            <div>
            <span className='text-black'>
              Nombre: Docente1
            </span>
          </div>
          <div>
            <span className='text-black'>
              Contraseña: Docente1
            </span>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;