import React from 'react';
import App from './App.jsx';
import Navbar from './components/layaout/navbar.jsx';
import About from "./components/about/about.jsx";
import PageAppart from "./components/appartement/pageAppart.jsx";
import Footer from "./components/layaout/footer.jsx";
import ErrorPage from "./components/errorPage/errorpage.jsx";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/appartement/:appartId", // Ajout d'un paramètre dynamique pour l'ID de l'appartement
    element: (
      <div>
        <Navbar/>
        <div><PageAppart/></div>
        <Footer />
      </div>
    )
  },
  {
    path: "/accueil",
    element: <h1>Accueil</h1>
  },
  {
    path: "/apropos",
    element: (
      <div>
        <Navbar/>
        <About /> 
        <Footer/>
      </div>
    )
  },
  {
    path: "*", // Cette route attrapera toutes les URL non prises en charge
    element: (
      <div>
        <Navbar/>
        <ErrorPage />
      </div>
    ) 
  }
]);
