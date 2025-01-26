import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from './Pages/login.jsx';
import RegisterPage from './Pages/register.jsx';
import ErrorPage from './Pages/404.jsx';
import HomePage from './Pages/home.jsx';
import ProductPage from './Pages/product.jsx';
import BerandaPage from './Pages/beranda.jsx';
import DetailPage from './Pages/detailProducts.jsx';
import Profile from './Pages/account.jsx';
import ContactPage from './Pages/contact.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/register",
    element: <RegisterPage />
  },
  {
    path: "/beranda",
    element: <BerandaPage />
  },
  {
    path: "/product",
    element: <ProductPage />
  },
  {
    path: "/product/:id",
    element: <DetailPage />
  },
  {
    path: "/account",
    element: <Profile />
  },
  {
    path: "/contact",
    element: <ContactPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
