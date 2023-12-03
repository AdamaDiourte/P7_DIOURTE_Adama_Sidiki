import React from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/layout'; // Remplacez par le chemin d'accès de votre Layout
import ContenerMain from "./components/accueil/cardsAppartContainer";
import CardsAppartement from "./pages/accueilpage";
import About from "./pages/aboutpage";
import PageAppart from "./pages/appartpage";
import ErrorPage from "./pages/errorpage";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<ContenerMain><CardsAppartement/></ContenerMain>} />
          <Route path="/appartement/:appartId" element={<PageAppart />} />
          <Route path="/accueil" element={<li>Accueil</li>} />
          <Route path="/apropos" element={<About />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
