import React from 'react';
import App from './App.jsx';
import Navbar from './components/layaout/navbar.jsx';
import Banner from "./components/accueil/banner.jsx";
import About from "./components/about/about.jsx";
import PageAppart from "./components/appartement/pageAppart.jsx";
import Footer from "./components/layaout/footer.jsx";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>404</h1>
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
        <Banner/>
        <About /> 
        <Footer/>
      </div>
    )
  },
]);
