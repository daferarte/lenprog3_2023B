import {BrowserRouter, Routes, Route, Link, Outlet, useNavigate, Navigate, useParams} from 'react-router-dom';

let Hello = () => {
  return (
    <div>
      <h1>Hola estudiantes!</h1>
    </div>
  );
}

let UsuarioParams = () => {
  let {id} = useParams();
  let params = useParams();
  console.log(params);

  return(
    <p>
      {id}
    </p>
  )
}

let UsuariosOutlet = () => {

  let navigate = useNavigate();

  let redirect =()=>{
    navigate('/');
  }

  return (
    <div>
      <h1>Usuarios!</h1>
      <button onClick={redirect}>Ir al inicio</button>
      <Outlet/>
    </div>
  );
}

let NotImplemented = () => {
  return (
    <div>
      <h1>Pagina en construccion!</h1>
      <Link to="/">Volver al inicio</Link>
    </div>
  );
}

let Error404 = () =>{
  return(
    <>
      <Link to="/">Regresar al inicio</Link>
      <h1>Esta pagina no existe - 404</h1>
    </>
  )
}

function App() {
  const isAuth = true;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hello />} />

        <Route path="usuario" element={<UsuariosOutlet />}>
          <Route path="registro" element={isAuth? <NotImplemented />:<Navigate to='/'/>} />
          <Route path="editar/:id" element={<UsuarioParams />} />
          <Route path="eliminar/:id" element={<NotImplemented />} />
        </Route>

        <Route path="personas" element={<NotImplemented />}>
          <Route path="registro" element={<NotImplemented />} />
          <Route path="editar/:id" element={<NotImplemented />} />
          <Route path="eliminar/:id" element={<NotImplemented />} />
        </Route>

        <Route path='*' element={<Error404/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
