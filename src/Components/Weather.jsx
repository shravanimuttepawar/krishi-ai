import React, { useState } from 'react';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState({
    temp: '28°C',
    condition: 'Partly Cloudy',
    humidity: '60%',
    location: 'Current Location'
  });

  const handleUpdateWeather = (e) => {
    e.preventDefault();
    if (!city) return;
    // Yahan aap apni weather API call (jaise OpenWeatherMap) ya backend connect kar sakte hain
    setWeatherData({
      temp: '31°C',
      condition: 'Sunny & Clear',
      humidity: '45%',
      location: city
    });
    setCity('');
  };

  return (
    <div className="krishi-card">
      <h2>🌤️ Live Weather</h2>
      <div style={{ textAlign: 'center', margin: '0.5rem 0' }}>
        <h1 style={{ fontSize: '2.8rem', color: 'var(--text-primary)', fontWeight: '800' }}>
          {weatherData.temp}
        </h1>
        <p style={{ color: 'var(--primary-neon)', fontWeight: '600', fontSize: '0.95rem' }}>
          {weatherData.location}
        </p>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '0.2rem' }}>
          {weatherData.condition} | Humidity: {weatherData.humidity}
        </p>
      </div>
      <form onSubmit={handleUpdateWeather} style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginTop: 'auto' }}>
        <div className="form-group">
          <input 
            type="text" 
            placeholder="Enter city name..." 
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <button type="submit" className="btn-submit">Update Location</button>
      </form>
    </div>
  );
};

export default Weather;