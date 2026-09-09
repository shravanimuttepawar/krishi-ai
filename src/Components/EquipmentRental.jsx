import React, { useState } from 'react';

export default function EquipmentRental() {
  // Sample Tractors and Tools Data
  const [equipments, setEquipments] = useState([
    {
      id: 1,
      name: 'Mahindra 575 DI Tractor',
      category: 'Tractor',
      price: '₹1200 / day',
      hp: '45 HP',
      location: 'Nagpur, MH',
      image: '🚜'
    },
    {
      id: 2,
      name: 'Rotavator (Land Cultivator)',
      category: 'Tool',
      price: '₹500 / day',
      hp: 'Suitable for 35-50 HP',
      location: 'Pune, MH',
      image: '⚙️'
    },
    {
      id: 3,
      name: 'Sonalika DI 745 III',
      category: 'Tractor',
      price: '₹1300 / day',
      hp: '50 HP',
      location: 'Nashik, MH',
      image: '🚜'
    },
    {
      id: 4,
      name: 'Wheat Thresher',
      category: 'Tool',
      price: '₹800 / day',
      hp: 'Heavy Duty',
      location: 'Kolhapur, MH',
      image: '🌾'
    }
  ]);

  const containerStyle = {
    padding: '20px',
    color: 'white',
    fontFamily: 'sans-serif',
    maxWidth: '800px',
    margin: '0 auto'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '16px',
    marginTop: '20px'
  };

  const cardStyle = {
    backgroundColor: '#1e293b',
    padding: '16px',
    borderRadius: '12px',
    border: '1px solid #334155',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
  };

  const buttonStyle = {
    backgroundColor: '#22c55e',
    color: 'white',
    padding: '8px 16px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold',
    marginTop: '12px',
    width: '100%'
  };

  const handleBooking = (name) => {
    alert(`Aapne ${name} ke liye booking request bhej di hai! Owner aapse jald sampark karega.`);
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ fontSize: '24px', marginBottom: '8px' }}>🚜 Krishi Yantra Rental</h2>
      <p style={{ color: '#94a3b8', fontSize: '14px' }}>
        Yahan aap tractor aur kheti ke doosre ajar-o-samagri (tools) kiray par le sakte hain.
      </p>

      {/* Equipment Cards Grid */}
      <div style={gridStyle}>
        {equipments.map((item) => (
          <div key={item.id} style={cardStyle}>
            <div style={{ fontSize: '32px', marginBottom: '8px' }}>{item.image}</div>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '4px' }}>{item.name}</h3>
            <p style={{ color: '#22c55e', fontWeight: 'bold', fontSize: '16px', marginBottom: '8px' }}>{item.price}</p>
            <p style={{ color: '#cbd5e1', fontSize: '13px', margin: '4px 0' }}><strong>Power/Type:</strong> {item.hp}</p>
            <p style={{ color: '#cbd5e1', fontSize: '13px', margin: '4px 0' }}><strong>Location:</strong> {item.location}</p>
            
            <button style={buttonStyle} onClick={() => handleBooking(item.name)}>
              Book Karein
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}