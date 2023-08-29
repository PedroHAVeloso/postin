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
import AuthProvider from '../presenter/providers/AuthProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element:
      <AuthProvider noAuthRedirect='/home' authNeed={false}>
        <WelcomePage />
      </AuthProvider>,
    errorElement:
      <ErrorPage />,
  },
  {
    path: "/home",
    element:
      // <AuthProvider noAuthRedirect='/'>
      <HomePage />
    // </AuthProvider>
  },
  {
    path: "me",
    element:
      // <AuthProvider noAuthRedirect='/'>
      <MePage />
    // </AuthProvider>
  },
  {
    path: "profile/*",
    element:
      // <AuthProvider noAuthRedirect='/'>
      <ProfilePage />
    // </AuthProvider>
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

