import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './main.css'

import AuthProvider from './providers/AuthProvider';

import HomePage from './view/pages/HomePage';
import WelcomePage from './view/pages/WelcomePage';
import LoginPage from './view/pages/LoginPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage />,
    errorElement: <h1>Erro</h1>
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

