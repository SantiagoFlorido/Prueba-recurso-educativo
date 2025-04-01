import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Limpiar localStorage
    localStorage.removeItem('studentUser');
    localStorage.removeItem('teacherUser');
    
    // Redirigir a la página de inicio
    navigate('/');
  }, [navigate]);

  return null;
};

export default Logout;