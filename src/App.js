import { useEffect } from 'react';
import "./App.css";
import Home from "./page/home";
import "bootstrap/dist/css/bootstrap.min.css"
import Aos from 'aos';
import "aos/dist/aos.css"
import Ourproduct from './page/ourproduct';
import { Route, Routes } from "react-router-dom";

function App() {
  useEffect(()=>{
    Aos.init()
      },[])
  return (
    <div>
    <Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/our-product" element={<Ourproduct/>} />

      
    </Routes>
    </div>
  );
}

export default App;
