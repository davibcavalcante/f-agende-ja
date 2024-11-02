import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Error from './pages/Error';
import App from './App';
import Authenticate from './pages/Authenticate';
import Home from './pages/Home';
import Appointments from './pages/Appointments';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <Error/>,
    children: [
      {
        path: '/f-agende-ja',
        element: <Home/>
      },
      {
        path: '/f-agende-ja/agendamento',
        element: <Appointments/>
      },
      {
        path: '/f-agende-ja/registro',
        element: <Authenticate action="Register"/>
      },
      {
        path: '/f-agende-ja/login',
        element: <Authenticate action="Login"/>
      }
    ],
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)