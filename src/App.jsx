import { Routes, Route } from 'react-router-dom'; // Importar Routes y Route para definir las rutas
import './App.css';

//importa el rol
import Rol from './pages/Login/SelecionarRol'

//importa el login
import LoginEstudiante from './pages/Login/LoginEstudiante'; //importa el componente del login del estudiante
import LoginDocente from './pages/Login/LoginDocente'; //importa el componente del login del docente
import RegisterEstudiante from './pages/Login/RegisterEstudiante'; //importa el componente de registro del estudiante
import RegisterDocente from './pages/Login/RegisterDocente'; //importa el componente de registro del docente

//paginas o rutas
import Pagina1 from './pages/pagina1/pagina1'; // Importa el componente de la página Inicio
import Pagina2 from './pages/pagina2/pagina2'; // importa el componente de la pagina de conexion (animacion)
import Pagina3 from './pages/pagina3/pagina3'; // importa el componente de la pagina de menu principal
import PaginaProyectos from './pages/pagina3Proyectos/pagina3Proyectos'; // importa el componente de la pagina de los proyectos

//paginas a las descripcion de cada tema/taller/proyecto
import Pagina4Descripcion1 from './pages/pagina4/tema1/pagina4Descripcion1'  // importa la descripcion del tema 1
import Pagina4Descripcion2 from './pages/pagina4/tema2/pagina4Descripcion2'  // importa la descripcion del tema 2
import Pagina4Descripcion3 from './pages/pagina4/tema3/pagina4Descripcion3'  // importa la descripcion del tema 3
import Pagina4Descripcion4 from './pages/pagina4/tema4/pagina4Descripcion4'; // importa la descripcion del tema 4
import Pagina4Descripcion5 from './pages/pagina4/tema5/pagina4Descripcion5'  // importa la descripcion del tema 5
import Pagina4Descripcion6 from './pages/pagina4/tema6/pagina4Descripcion6'  // importa la descripcion del tema 6

//paginas a la informacion/contenido de cada tema
import Pagina4Informacion1 from './pages/pagina4/tema1/pagina4Informacion1'  //importa el contenido del tema 1
import Pagina4Informacion2 from './pages/pagina4/tema2/pagina4Informacion2'  //importa el contenido del tema 2
import Pagina4Informacion3 from './pages/pagina4/tema3/pagina4Informacion3'  //importa el contenido del tema 3
import Pagina4Informacion4 from './pages/pagina4/tema4/pagina4Informacion4'; //importa el contenido del tema 4
import Pagina4Informacion5 from './pages/pagina4/tema5/pagina4Informacion5'  //importa el contenido del tema 5
import Pagina4Informacion6 from './pages/pagina4/tema6/pagina4Informacion6'  //importa el contenido del tema 6


//pagina de creditos
import Creditos from './pages/pagina5/Creditos'  //importa los creditos

function App() {
  return (
    <div className="App">
      <Routes>

        {/*Ruta para el login*/}
        <Route path='/Rol' element={<Rol />} />

        {/*Ruta para el login*/}
        <Route path='/Login/Student' element={<LoginEstudiante />} />
        <Route path='/Login/Teacher' element={<LoginDocente />} />
        <Route path='/Register/Student' element={<RegisterEstudiante />} />
        <Route path='/Register/Teacher' element={<RegisterDocente />} />

        {/*Rutas pricipales*/}
        <Route path="/" element={<Pagina1 />} />
        <Route path="/Conexión" element={<Pagina2 />} />
        <Route path='/Principal' element={<Pagina3 />} />
        <Route path='/Proyectos' element={<PaginaProyectos />} />

        {/*Rutas por tema*/}
        <Route path='/Tema1' element={<Pagina4Descripcion1 />} />
        <Route path='/Tema2' element={<Pagina4Descripcion2 />} />
        <Route path='/Tema3' element={<Pagina4Descripcion3 />} />
        <Route path='/Tema4' element={<Pagina4Descripcion4 />} />
        <Route path='/Tema5' element={<Pagina4Descripcion5 />} />
        <Route path='/Tema6' element={<Pagina4Descripcion6 />} />

        {/*Rutas por tema y contenido*/}
        <Route path='/Contenido1' element={<Pagina4Informacion1 />} />
        <Route path='/Contenido2' element={<Pagina4Informacion2 />} />
        <Route path='/Contenido3' element={<Pagina4Informacion3 />} />
        <Route path='/Contenido4' element={<Pagina4Informacion4 />} />
        <Route path='/Contenido5' element={<Pagina4Informacion5 />} />
        <Route path='/Contenido6' element={<Pagina4Informacion6 />} />

        {/*Ruta para los creditos*/}
        <Route path='/Creditos' element={<Creditos />} />

      </Routes>
    </div>
  );
}

export default App;


