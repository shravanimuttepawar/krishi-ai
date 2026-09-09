import React, { useState } from 'react';

const MarketPrice = () => {
  const [commodity, setCommodity] = useState('Wheat');
  const [price, setPrice] = useState('₹ 2,250 / Quintal');

  const handleCheckPrice = (e) => {
    e.preventDefault();
    const mockPrices = {
      'Wheat': '₹ 2,250 / Quintal',
      'Rice': '₹ 3,100 / Quintal',
      'Cotton': '₹ 6,400 / Quintal',
      'Soyabean': '₹ 4,500 / Quintal'
    };
    setPrice(mockPrices[commodity] || '₹ 2,500 / Quintal');
  };

  return (
    <div className="krishi-card">
      <h2>📈 Live Market Prices</h2>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
        Check today's Mandi rates for your produce.
      </p>

      <form onSubmit={handleCheckPrice} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div className="form-group">
          <label>Select Commodity</label>
          <select value={commodity} onChange={(e) => setCommodity(e.target.value)}>
            <option value="Wheat">Wheat</option>
            <option value="Rice">Rice</option>
            <option value="Cotton">Cotton</option>
            <option value="Soyabean">Soyabean</option>
          </select>
        </div>
        <button type="submit" className="btn-submit">Check Detailed Trends</button>
      </form>

      <div style={{ marginTop: '0.5rem', padding: '1rem', background: 'rgba(0, 255, 136, 0.08)', borderRadius: '10px', border: '1px solid rgba(0, 255, 136, 0.2)' }}>
        <h3 style={{ color: 'var(--primary-neon)', textAlign: 'center', fontSize: '1.2rem' }}>{price}</h3>
        <p style={{ textAlign: 'center', fontSize: '0.75rem', color: 'var(--text-muted)' }}>Current Avg. Mandi Rate</p>
      </div>
    </div>
  );
};

export default MarketPrice;