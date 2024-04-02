import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import Home from './pages/Home';
//import CatalogPage from './CatalogPage';
//import AboutPage from './AboutPage';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );