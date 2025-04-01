import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ allowedRoles, redirectPath = '/Rol' }) => {
  // Obtener datos del usuario desde localStorage
  const userData = JSON.parse(localStorage.getItem('studentUser') || localStorage.getItem('teacherUser'));
  
  // Si no hay usuario logeado, redirigir
  if (!userData) {
    return <Navigate to={redirectPath} replace />;
  }
  
  // Si hay roles específicos requeridos y el usuario no tiene permiso
  if (allowedRoles && !allowedRoles.includes(userData.rol.toLowerCase())) {
    return <Navigate to="/Principal" replace />;
  }
  
  return <Outlet />;
};

export default ProtectedRoute;