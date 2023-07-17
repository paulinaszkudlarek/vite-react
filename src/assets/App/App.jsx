import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Navigation from '../Navigation/Navigation.jsx';
import LandingPage from '../LandingPage/LandingPage.jsx';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/about" element={<LandingPage />} />
          <Route path="/service" element={<LandingPage />} />
          <Route path="/work" element={<LandingPage />} />
          <Route path="/blog" element={<LandingPage />} />
          <Route path="/contact" element={<LandingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;