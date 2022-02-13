import './App.css'
import Navbar from "./Componets/Navbar";
import Top from "./Componets/Top"
import Cards from "./Componets/Cards"
import Footer from "./Componets/Footer"
import News from './Componets/News';
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route,  } from "react-router-dom";





function App() {
  return (
    <div className="App">
      <Navbar />
      <Top />
      <Cards />
      <News/>
      <Footer/>
     



    </div>
  );
}

export default App;
