import React, { useState } from 'react';

const CropRecommendation = () => {
  const [cropData, setCropData] = useState({ N: '', P: '', K: '', ph: '' });
  const [prediction, setPrediction] = useState(null);

  const handleChange = (e) => {
    setCropData({ ...cropData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Crop Form Submitted:", cropData);
    // Dummy prediction logic (Yahan Python ML Model ka API response aayega)
    setPrediction("🌾 Recommended Crop: Rice (Paddy)");
  };

  return (
    <div className="krishi-card">
      <h2>🌾 Crop AI Suggestion</h2>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
        Enter soil metrics to find the best crop to grow.
      </p>
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
        <div className="form-group">
          <label>Nitrogen (N)</label>
          <input type="number" name="N" value={cropData.N} onChange={handleChange} placeholder="e.g., 90" required />
        </div>
        <div className="form-group">
          <label>Phosphorus (P)</label>
          <input type="number" name="P" value={cropData.P} onChange={handleChange} placeholder="e.g., 42" required />
        </div>
        <div className="form-group">
          <label>Potassium (K)</label>
          <input type="number" name="K" value={cropData.K} onChange={handleChange} placeholder="e.g., 43" required />
        </div>
        
        <button type="submit" className="btn-submit">Predict Best Crop</button>
      </form>

      {prediction && (
        <div style={{ marginTop: '0.5rem', padding: '0.8rem', background: 'rgba(0, 255, 136, 0.1)', border: '1px solid var(--primary-neon)', borderRadius: '8px', color: 'var(--primary-neon)', fontWeight: '600', textAlign: 'center' }}>
          {prediction}
        </div>
      )}
    </div>
  );
};

export default CropRecommendation;