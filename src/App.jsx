import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

// Componentes de protección de rutas
import ProtectedRoute from './components/ProtectedRoute';
import TeacherOnlyRoute from './components/TeacherOnlyRoute';

// Importar componentes de selección de rol y autenticación
import Rol from './pages/Login/SelecionarRol';
import LoginEstudiante from './pages/Login/LoginEstudiante';
import LoginDocente from './pages/Login/LoginDocente';
import RegisterEstudiante from './pages/Login/RegisterEstudiante';
import RegisterDocente from './pages/Login/RegisterDocente';
import Logout from './pages/Logout';

// Importar páginas principales
import Pagina1 from './pages/pagina1/pagina1';
import Pagina2 from './pages/pagina2/pagina2';
import Pagina3 from './pages/pagina3/pagina3';
import PaginaProyectos from './pages/pagina3Proyectos/pagina3Proyectos';
import Creditos from './pages/pagina5/Creditos';

// Importar páginas de temas (solo docentes)
import Pagina4Descripcion1 from './pages/pagina4/tema1/pagina4Descripcion1';
import Pagina4Descripcion2 from './pages/pagina4/tema2/pagina4Descripcion2';
import Pagina4Descripcion3 from './pages/pagina4/tema3/pagina4Descripcion3';
import Pagina4Descripcion4 from './pages/pagina4/tema4/pagina4Descripcion4';
import Pagina4Descripcion5 from './pages/pagina4/tema5/pagina4Descripcion5';
import Pagina4Descripcion6 from './pages/pagina4/tema6/pagina4Descripcion6';

// Importar páginas de contenido (accesibles para ambos)
import Pagina4Informacion1 from './pages/pagina4/tema1/pagina4Informacion1';
import Pagina4Informacion2 from './pages/pagina4/tema2/pagina4Informacion2';
import Pagina4Informacion3 from './pages/pagina4/tema3/pagina4Informacion3';
import Pagina4Informacion4 from './pages/pagina4/tema4/pagina4Informacion4';
import Pagina4Informacion5 from './pages/pagina4/tema5/pagina4Informacion5';
import Pagina4Informacion6 from './pages/pagina4/tema6/pagina4Informacion6';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Rutas públicas (accesibles sin autenticación) */}
        <Route path="/" element={<Pagina1 />} />
        
        <Route path='/Rol' element={<Rol />} />
        <Route path='/Login/Student' element={<LoginEstudiante />} />
        <Route path='/Login/Teacher' element={<LoginDocente />} />
        <Route path='/Register/Student' element={<RegisterEstudiante />} />
        <Route path='/Register/Teacher' element={<RegisterDocente />} />
        <Route path='/logout' element={<Logout />} />

        {/* Rutas protegidas (requieren autenticación) */}
        <Route element={<ProtectedRoute />}>
          {/* Rutas accesibles para estudiantes y docentes */}
          <Route path='/Principal' element={<Pagina3 />} />
          <Route path="/Conexión" element={<Pagina2 />} />
          <Route path='/Proyectos' element={<PaginaProyectos />} />
          <Route path='/Creditos' element={<Creditos />} />
          
          {/* Rutas de contenido */}
          <Route path='/Contenido1' element={<Pagina4Informacion1 />} />
          <Route path='/Contenido2' element={<Pagina4Informacion2 />} />
          <Route path='/Contenido3' element={<Pagina4Informacion3 />} />
          <Route path='/Contenido4' element={<Pagina4Informacion4 />} />
          <Route path='/Contenido5' element={<Pagina4Informacion5 />} />
          <Route path='/Contenido6' element={<Pagina4Informacion6 />} />

          {/* Rutas exclusivas para docentes */}
          <Route element={<ProtectedRoute allowedRoles={['docente']} />}>
            <Route path='/Tema1' element={<Pagina4Descripcion1 />} />
            <Route path='/Tema2' element={<Pagina4Descripcion2 />} />
            <Route path='/Tema3' element={<Pagina4Descripcion3 />} />
            <Route path='/Tema4' element={<Pagina4Descripcion4 />} />
            <Route path='/Tema5' element={<Pagina4Descripcion5 />} />
            <Route path='/Tema6' element={<Pagina4Descripcion6 />} />
          </Route>
        </Route>

        {/* Ruta de fallback para páginas no encontradas */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;