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
      const searchResponse = await fetch(`https://prueba-api-recurso-educativo.onrender.com/api/v1/users?nombre=${nombre}`);
      
      if (!searchResponse.ok) {
        throw new Error('Error al buscar usuario');
      }

      const users = await searchResponse.json();
      
      if (!users || users.length === 0) {
        throw new Error('Usuario no encontrado');
      }

      const user = users.find(u => u.nombre === nombre);
      if (!user) {
        throw new Error('Credenciales incorrectas');
      }

      const normalizedRole = String(user.rol).toLowerCase().trim();
      if (normalizedRole !== 'docente') {
        throw new Error(`Acceso restringido. Rol actual: ${user.rol}`);
      }

      if (user.contraseña !== password) {
        throw new Error('Contraseña incorrecta');
      }

      localStorage.setItem('currentUser', JSON.stringify({
        id: user.id_usuario || user.id,
        nombre: user.nombre,
        rol: user.rol,
        tipo: 'docente',
        timestamp: new Date().getTime()
      }));

      localStorage.setItem('teacherUser', JSON.stringify({
        id: user.id_usuario || user.id,
        nombre: user.nombre,
        rol: user.rol
      }));

      navigate('/Principal');
      
    } catch (err) {
      console.error('Error en login:', err);
      setError(err.message || 'Error al iniciar sesión');
    } finally {
      setLoading(false);
    }
  };

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

      {/* Formulario centrado */}
      <div className='flex justify-center items-center h-[100vh]' >
        <div className="bg-gray-100 rounded-md p-7 shadow-lg ">
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
            {/* Borrar luego */}
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