import React, { useState } from 'react';

const FertilizerRecommendation = () => {
  const [crop, setCrop] = useState('');
  const [soil, setSoil] = useState('');
  const [result, setResult] = useState('');

  const handleRecommend = (e) => {
    e.preventDefault();
    if (!crop || !soil) {
      alert("Please fill in all fields!");
      return;
    }
    setResult("🌾 Recommended Fertilizer: Urea & NPK 20-20-20 (Best for healthy crop growth)");
  };

  return (
    <div className="krishi-card" style={{ backgroundColor: '#121516', padding: '20px', borderRadius: '15px', color: 'white', border: '1px solid #1a231e', marginBottom: '20px' }}>
      <h3 style={{ color: '#00e676', marginBottom: '15px' }}>🌾 Fertilizer Recommendation</h3>
      <p style={{ fontSize: '0.85rem', color: '#b0bec5', marginBottom: '15px' }}>
        Enter crop and soil type to get smart fertilizer suggestions.
      </p>

      <form onSubmit={handleRecommend}>
        <div style={{ marginBottom: '12px' }}>
          <input 
            type="text" 
            placeholder="Enter Crop Name (e.g., Rice, Wheat)" 
            value={crop}
            onChange={(e) => setCrop(e.target.value)}
            style={{ width: '100%', boxSizing: 'border-box', padding: '12px', backgroundColor: '#1a1e20', border: '1px solid #2a332f', color: 'white', borderRadius: '8px', outline: 'none' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <input 
            type="text" 
            placeholder="Enter Soil Type (e.g., Clay, Loamy, Sandy)" 
            value={soil}
            onChange={(e) => setSoil(e.target.value)}
            style={{ width: '100%', boxSizing: 'border-box', padding: '12px', backgroundColor: '#1a1e20', border: '1px solid #2a332f', color: 'white', borderRadius: '8px', outline: 'none' }}
          />
        </div>

        <button 
          type="submit"
          style={{ width: '100%', padding: '12px', backgroundColor: '#00e676', color: '#000', fontWeight: 'bold', border: 'none', borderRadius: '8px', cursor: 'pointer', marginBottom: '10px' }}
        >
          Get Recommendation
        </button>
      </form>

      {result && <p style={{ color: '#00e676', fontSize: '0.9rem', marginTop: '10px', textAlign: 'center', fontWeight: '500' }}>{result}</p>}
    </div>
  );
};

export default FertilizerRecommendation;