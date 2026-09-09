import React from 'react';

function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      padding: '15px 20px',
      backgroundColor: '#121516',
      borderBottom: '1px solid #1a231e',
      color: 'white',
      alignItems: 'center',
      borderRadius: '0 0 15px 15px',
      marginBottom: '20px'
    }}>
      <h2
        style={{ color: '#00e676', margin: 0, cursor: 'pointer', fontSize: '20px' }}
        onClick={() => window.location.hash = '#/'}
      >
        🌾 Krishi-AI
      </h2>

      <div style={{ display: 'flex', gap: '20px' }}>
        <button
          onClick={() => window.location.hash = '#/'}
          style={{ background: 'none', border: 'none', color: '#b0bec5', cursor: 'pointer', fontSize: '16px' }}
        >
          Home
        </button>
        <button
          onClick={() => window.location.hash = '#/services'}
          style={{ background: 'none', border: 'none', color: '#b0bec5', cursor: 'pointer', fontSize: '16px' }}
        >
          Services
        </button>
        <button
          onClick={() => window.location.hash = '#/profile'}
          style={{ background: 'none', border: 'none', color: '#b0bec5', cursor: 'pointer', fontSize: '16px' }}
        >
          Profile
        </button>
      </div>
    </nav>
  );
}

export default Navbar;