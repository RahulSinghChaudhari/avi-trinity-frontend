
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

//Import the pages

import Home from "./Pages/home"
import "./css/style.css"
import Navbar from "./Navbar";
import About from "./Pages/about";
import Services from "./Pages/services";
import Contact from "./Pages/contact";


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="services" element={<Services />} />
          <Route exact path="about" element={<About />} />
          <Route exact path="contact" element={<Contact />} />
        </Routes>
      
      </Router>
    </div>
  );
}

export default App;
