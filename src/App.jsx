import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Substitua Switch por Routes
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ImageGrid from './pages/ImageGrid';
import Faq from './pages/Faq';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes> {/* Use Routes em vez de Switch */}
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/espaço" element={<ImageGrid />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
