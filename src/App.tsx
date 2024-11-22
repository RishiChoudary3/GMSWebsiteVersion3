import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CareersPage from './pages/CareersPage';
import AchievementsPage from './pages/AchievementsPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/achievements" element={<AchievementsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;