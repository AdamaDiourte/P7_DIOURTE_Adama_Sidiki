import React from 'react';
import Header from "./components/accueil/header";
import Navbar from "./components/layaout/navbar";
import Banner from "./components/banner/banner";
import ContenerMain from "./components/accueil/main";
import CardsAppartement from "./components/accueil/cardsAppartement";
import Footer from "./components/layaout/footer";
import About from "./components/about/about";




import './App.css';



function App() {
  return (
    <div>
      <Header>
        <Navbar/>
      </Header>
      
     <ContenerMain>
        <CardsAppartement/>
     </ContenerMain>
     <Footer/>
    </div>
  )
}

export default App