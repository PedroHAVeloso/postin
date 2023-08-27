import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './main.css'

import HomePage from './pages/HomePage';
import WelcomePage from './pages/WelcomePage';
import MePage from './pages/MePage';
import ErrorPage from './pages/ErrorPage';
import ProfilePage from './pages/ProfilePage';

const router = createBrowserRouter([
  {
    path: "/",
    element:
      <WelcomePage />,
    errorElement:
      <ErrorPage />,
  },
  {
    path: "/home",
    element:
      <HomePage />
  },
  {
    path: "me",
    element:
      <MePage />
  },
  {
    path: "profile/*",
    element:
      <ProfilePage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

