import { useEffect } from "react";
import "./App.css";
import Home from "./page/home";
import "bootstrap/dist/css/bootstrap.min.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Ourproduct from "./page/ourproduct";
import Contactus from "./page/contactus";
import { Route, Routes } from "react-router-dom";
import About from "./page/About";
import Event from "./page/Event";

function App() {
  useEffect(() => { 
    Aos.init();
  }, []);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-product" element={<Ourproduct />} />
        <Route path="/contact-us" element={<Contactus />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/event" element={<Event />} />
      </Routes>
    </div>
  );
}

export default App;
