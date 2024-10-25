// src/middleware/Routes.js
import {
    createBrowserRouter,
  } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";
import Checkboxes from "../pages/Checkboxes";
import Layout from "../components/Layout";

  
const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true, 
          element: <HomePage />,
        },
        {
          path: "about",
          element: <AboutPage />,
        },
        
        {
          path: "shop",
          element: <Checkboxes />,
        },
      ],
    },
  ]);
  
  export default router;
  