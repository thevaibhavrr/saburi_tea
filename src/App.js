import { useEffect } from 'react';
import "./App.css";
import Home from "./page/home";
import "bootstrap/dist/css/bootstrap.min.css"
import Aos from 'aos';
import "aos/dist/aos.css"
function App() {
  useEffect(()=>{
    Aos.init()
      },[])
  return (
    <div>
      <Home/>
      
    </div>
  );
}

export default App;
