import React from 'react';
import Header from "./components/header";
import Navbar from "./components/navbar";
import Banner from "./components/banner";
import Main from "./components/main";
import Gallery from "./components/gallery";
import Footer from "./components/footer";
import About from "./components/about";




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