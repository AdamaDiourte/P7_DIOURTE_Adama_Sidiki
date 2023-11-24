import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Navbar from "./components/layaout/navbar.jsx";
import Banner from "./components/accueil/banner.jsx";
import About from "./components/about/about.jsx";
import PageApp from "./components/appartement/pageApp.jsx";
import Footer from "./components/layaout/footer.jsx";
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
