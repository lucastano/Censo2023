import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './Estilos/MiEstilos.css'
import { Provider } from "react-redux";
import { store } from './redux/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {createHashRouter,RouterProvider} from 'react-router-dom'
import CantidadCensados from './components/CantidadCensados.jsx'
import Censados from './components/Censados.jsx'
import Login from './components/Login.jsx'
const router = createHashRouter([{
    path:'/',
    element:<App/>
}])
const root = ReactDOM.createRoot(document.getElementById( 'root'));
root.render(
<React.StrictMode>
<Provider store={store}>
 
<RouterProvider router={router}/>
<App></App>
 </Provider> 
 
 
 
</React.StrictMode>
)

