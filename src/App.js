import './CSS/App.css'
import Navbar from "./Componets/Navbar";
import Home from "./Pages/Home"
import AboutUs from "./Pages/AboutUs"
import OurWorks from "./Pages/OurWorks"
import ContactUs from "./Pages/ContactUs"
import Footer from "./Componets/Footer"
import {Routes, Route, BrowserRouter } from 'react-router-dom'


function App() {
  return (
    <div className='App'>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/aboutUs" element={<AboutUs/>} />
          <Route path="/ourWorks" element={<OurWorks/>}/>
          <Route path="/contactUs" element={<ContactUs/>}/>
        </Routes>
      </BrowserRouter>
      <Footer />




    </div>
  );
}

export default App;
