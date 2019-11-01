import React from 'react';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import MainContent from "./components/MainContent";

function App() {
  return (
    <div className="App">
     <NavBar />
     <Header /> 
     <MainContent />
     <Footer />
    </div>
  );
}

export default App;
