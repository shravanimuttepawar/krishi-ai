import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Components Import
import Navbar from './Components/Navbar';
import Weather from './Components/Weather';
import CropRecommendation from './Components/CropRecommendation';
import FertilizerRecommendation from './Components/FertilizerRecommendation';
import DiseaseDetection from './Components/DiseaseDetection';
import MarketPrice from './Components/MarketPrice';
import Profile from './Components/Profile';
import Services from './Components/Services';
import EquipmentRental from './Components/EquipmentRental';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        
        <Routes>
          {/* Main Dashboard Route */}
          <Route path="/" element={
            <main className="dashboard-grid">
              <Weather />
              <CropRecommendation />
              <FertilizerRecommendation />
              <DiseaseDetection />
              <MarketPrice />
            </main>
          } />

          {/* Services Route */}
          <Route path="/services" element={<Services />} />

          {/* Equipment Rental Route */}
          <Route path="/equipment-rental" element={<EquipmentRental />} />

          {/* Profile Route */}
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;