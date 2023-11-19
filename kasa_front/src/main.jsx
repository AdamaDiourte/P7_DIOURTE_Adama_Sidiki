import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Header from "./components/header";
import Navbar from "./components/navbar";
import Banner from "./components/banner";
import About from "./components/about";
import PageApp from "./components/pageApp";
import Footer from "./components/footer";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<h1>404</h1>
  },



  {
    path: "/appartement",
    element: (
      <div>
         <Navbar/>
         <Banner/>
        <PageApp/>
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


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
