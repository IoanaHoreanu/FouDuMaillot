import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import Home from './pages/Home';
import Catalogue from "./pages/Catalogue";
import Apropos from "./pages/Apropos";
import "./App.css"

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
        path: "/catalogue",
        element: <Catalogue />,
      },
      {
        path: "/apropos",
        element: <Apropos />,
      },
        
  ]);
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );