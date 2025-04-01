import { Navigate } from 'react-router-dom';

const TeacherOnlyRoute = ({ children }) => {
  const userData = JSON.parse(localStorage.getItem('teacherUser'));
  
  if (!userData) {
    return <Navigate to="/Principal" replace />;
  }
  
  return children;
};

export default TeacherOnlyRoute;