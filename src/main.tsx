import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './main.css'

import HomePage from './view/pages/HomePage';
import WelcomePage from './view/pages/WelcomePage';
import MePage from './view/pages/MePage';
import AuthProvider from './providers/AuthProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage />,
    errorElement: <h1>Erro</h1>,
  },
  {
    path: "/home",
    element: <AuthProvider noAuthRedirect='/'>
      <HomePage />
    </AuthProvider>,
  },
  {
    path: "me",
    element: <AuthProvider noAuthRedirect='/'>
      <MePage />
    </AuthProvider>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

