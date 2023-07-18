import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Navigation from '../Navigation/Navigation.jsx';
import LandingPage from '../LandingPage/LandingPage.jsx';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/vite-react/" element={<LandingPage />} />
        <Route exact path="/vite-react/about" element={<LandingPage />} />
        <Route exact path="/vite-react/service" element={<LandingPage />} />
        <Route exact path="/vite-react/work" element={<LandingPage />} />
        <Route exact path="/vite-react/blog" element={<LandingPage />} />
        <Route exact path="/vite-react/contact" element={<LandingPage />} />
      </Routes>
  </Router>
  );
}

export default App;