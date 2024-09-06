import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./assets/component/Footer";
import Navbar_V2 from "./assets/component/navbar_V2";
import Home from './assets/pages/Home';
import Shop from './assets/pages/Shop';
import About from './assets/pages/About';
import Contact from './assets/pages/Contact';





const App = () => {


  return (

    <Router>
      <Navbar_V2/>
      <Routes>
        <Route path= "/" element={<Home/>} />
        <Route path="/Shop" element={ <Shop/> } />
        <Route path="/About" element={ <About/> } />
        <Route path="/Contact" element={ <Contact/> } />
      </Routes>
      <Footer/>
    </Router>
    
    
  );
};

export default App;