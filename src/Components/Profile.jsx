import React, { useState } from 'react';

function Profile() {
  // Kisan ki details ko state mein rakha hai taaki unhe change (edit) kiya ja sake
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'Ramesh Kumar',
    phone: '+91 98765 43210',
    location: 'Nashik, Maharashtra',
    landSize: '5 Acre',
    soilType: 'Kali Mitti (Black Soil)',
    crop: 'Gehu, Pyaz, Soyabean',
    language: 'marathi,hindi,english'
  });

  // App ke dark theme ke hisaab se styles
  const containerStyle = { 
    padding: '20px', 
    color: 'white', 
    fontFamily: 'sans-serif',
    maxWidth: '600px',
    margin: '0 auto'
  };
  
  const cardStyle = { 
    backgroundColor: '#121516', 
    padding: '25px', 
    borderRadius: '15px', 
    marginBottom: '20px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
  };
  
  const headingStyle = { 
    color: '#00e676', 
    marginBottom: '15px', 
    borderBottom: '1px solid #333', 
    paddingBottom: '10px',
    fontSize: '20px'
  };
  
  const textRowStyle = { 
    display: 'flex', 
    justifyContent: 'space-between', 
    margin: '12px 0', 
    fontSize: '16px',
    borderBottom: '1px dashed #222',
    paddingBottom: '8px'
  };

  const inputStyle = {
    padding: '8px',
    borderRadius: '5px',
    border: '1px solid #00e676',
    backgroundColor: '#222',
    color: 'white',
    width: '60%'
  };

  const buttonStyle = { 
    width: '100%', 
    padding: '15px', 
    backgroundColor: '#00e676', 
    color: 'black', 
    border: 'none', 
    borderRadius: '10px', 
    fontSize: '16px', 
    fontWeight: 'bold', 
    cursor: 'pointer', 
    marginTop: '10px' 
  };

  const logoutButtonStyle = { 
    ...buttonStyle, 
    backgroundColor: '#ff4d4d', 
    color: 'white' 
  };

  // Input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  // Logout function
  const handleLogout = () => {
    alert("Aapne successfully logout kar liya hai!");
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ textAlign: 'center', marginBottom: '25px' }}>Mera Profile</h2>

      {/* Kisan Ki Personal Details */}
      <div style={cardStyle}>
        <h3 style={headingStyle}>👤 Personal Details</h3>
        
        <div style={textRowStyle}>
          <span style={{ color: '#aaa' }}>Naam:</span>
          {isEditing ? (
            <input style={inputStyle} type="text" name="name" value={profileData.name} onChange={handleChange} />
          ) : (
            <strong>{profileData.name}</strong>
          )}
        </div>

        <div style={textRowStyle}>
          <span style={{ color: '#aaa' }}>Mobile No:</span>
          {isEditing ? (
            <input style={inputStyle} type="text" name="phone" value={profileData.phone} onChange={handleChange} />
          ) : (
            <strong>{profileData.phone}</strong>
          )}
        </div>

        <div style={textRowStyle}>
          <span style={{ color: '#aaa' }}>Pata (Location):</span>
          {isEditing ? (
            <input style={inputStyle} type="text" name="location" value={profileData.location} onChange={handleChange} />
          ) : (
            <strong>{profileData.location}</strong>
          )}
        </div>
      </div>

      {/* Khet Ki Details */}
      <div style={cardStyle}>
        <h3 style={headingStyle}>🌾 Khet ki Jankari</h3>
        <div style={textRowStyle}>
          <span style={{ color: '#aaa' }}>Zameen (Land Size):</span>
          <strong>{profileData.landSize}</strong>
        </div>
        <div style={textRowStyle}>
          <span style={{ color: '#aaa' }}>Mitti (Soil Type):</span>
          <strong>{profileData.soilType}</strong>
        </div>
        <div style={textRowStyle}>
          <span style={{ color: '#aaa' }}>Mukhya Fasal:</span>
          <strong>{profileData.crop}</strong>
        </div>
      </div>

      {/* Settings aur Buttons */}
      <div style={cardStyle}>
        <h3 style={headingStyle}>⚙️ App Settings</h3>
        <div style={textRowStyle}>
          <span style={{ color: '#aaa' }}>Bhasha (Language):</span>
          <strong>{profileData.language}</strong>
        </div>

        {/* Edit Profile Button */}
        <button style={buttonStyle} onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? 'Save Profile' : 'Edit Profile'}
        </button>

        {/* Logout Button */}
        <button style={logoutButtonStyle} onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default Profile;