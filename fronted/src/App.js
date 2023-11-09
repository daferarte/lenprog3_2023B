import {BrowserRouter, Routes, Route, Link, Outlet, useNavigate, Navigate, useParams} from 'react-router-dom';
import {Provider, useDispatch, useSelector} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';



import { store, persistor } from './store';
import SignIn from './users/SingIn';
import { logOut } from './store/user';

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
  let user = useSelector(state => state.user.user);
  let dispatch = useDispatch();

  let navigate = useNavigate();

  let doLogOut = () =>{
    dispatch(
      logOut()
    )

    navigate('/');

  }

  return (
    <div>
      {
        user && <button onClick={doLogOut}>Cerrar Sesion</button>
      }
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
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Routes>
            <Route path="/" element={<Hello />} />

            <Route path="login" element={<SignIn />} />

            <Route path="usuario" element={<UsuariosOutlet />}>
              <Route path="registro" element={isAuth? <SignIn />:<Navigate to='/'/>} />
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
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
