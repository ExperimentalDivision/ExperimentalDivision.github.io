import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Join from './pages/Join';
import Resources from './pages/Resources';
import Updates from './pages/Updates';
import Footer from './layout/Footer';
import Gallery from './pages/Gallery';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="app-main-bg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/join" element={<Join />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/updates" element={<Updates />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;