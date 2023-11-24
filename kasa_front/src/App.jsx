import React from 'react';
import Header from "./components/accueil/header";
import Navbar from "./components/layaout/navbar";
import Banner from "./components/accueil/banner";
import Main from "./components/accueil/main";
import Gallery from "./components/accueil/gallery";
import Footer from "./components/layaout/footer";
import About from "./components/about/about";




import './App.css';



function App() {
  return (
    <div>


      <Header>
        <Navbar/>
        <Banner/>
      </Header>
      <About/>
      
     <Main>
        <Gallery/>
     </Main>
     <Footer/>
     

    </div>
  )
}

export default App