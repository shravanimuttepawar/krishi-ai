import React from 'react';
import { useNavigate } from 'react-router-dom';
function Services() {
 const navigate = useNavigate();   
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
    padding: '20px', 
    borderRadius: '15px', 
    marginBottom: '20px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
  };
  
  const headingStyle = { 
    color: '#00e676', 
    marginBottom: '10px', 
    fontSize: '18px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  };

  const paragraphStyle = {
    color: '#ccc',
    fontSize: '14px',
    marginBottom: '15px',
    lineHeight: '1.5'
  };

  const buttonStyle = { 
    width: '100%', 
    padding: '12px', 
    backgroundColor: '#00e676', 
    color: 'black', 
    border: 'none', 
    borderRadius: '8px', 
    fontSize: '15px', 
    fontWeight: 'bold', 
    cursor: 'pointer' 
  };

  // -----------------------------------------------------
  // BUTTON CLICK FUNCTIONS (Yahan se buttons kaam karenge)
  // -----------------------------------------------------

  const openYojna = () => {
    // Asli PM-KISAN website naye tab mein open hogi
    window.open('https://pmkisan.gov.in/', '_blank');
  };

  const callHelpline = () => {
    alert("Kisan Call Center Toll-Free Number: 1800-180-1551");
  };
  const searchTractor = () => {
    navigate('/equipment-rental');
  };

  const findLabs = () => {
    // Google Maps par aas paas ki lab search karega
    window.open('https://www.google.com/maps/search/soil+testing+lab+near+me', '_blank');
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ textAlign: 'center', marginBottom: '25px' }}>Krishi.AI Services</h2>

      {/* Sarkari Yojnaayein */}
      <div style={cardStyle}>
        <h3 style={headingStyle}>🏛️ Sarkari Yojnaayein</h3>
        <p style={paragraphStyle}>PM-KISAN Samman Nidhi aur Fasal Bima Yojna ki jankari dekhein aur aavedan karein.</p>
        <button style={buttonStyle} onClick={openYojna}>Yojna Dekhein</button>
      </div>

      {/* Krishi Salahkaar */}
      <div style={cardStyle}>
        <h3 style={headingStyle}>📞 Krishi Salahkaar (Helpline)</h3>
        <p style={paragraphStyle}>Fasal mein bimaari ya mitti ki samasya ke liye kisan call center ya krishi expert se direct baat karein.</p>
        <button style={buttonStyle} onClick={callHelpline}>Call Karein (Toll-Free)</button>
      </div>

      {/* Yantra Kiraya Par */}
      <div style={cardStyle}>
        <h3 style={headingStyle}>🚜 Krishi Yantra (Tractor/Tools)</h3>
        <p style={paragraphStyle}>Tractor, Harvester, ya kheti ke dusre ajar-o-samagri aasaani se kiraye (Rent) par lein.</p>
        <button style={buttonStyle} onClick={searchTractor}>Yantra Khojein</button>
      </div>

      {/* Mitti Jaanch */}
      <div style={cardStyle}>
        <h3 style={headingStyle}>🧪 Mitti Jaanch (Soil Testing)</h3>
        <p style={paragraphStyle}>Apne khet ki mitti ki jaanch ke liye aas-paas ke mitti parikshan kendro (Labs) ki list dekhein.</p>
        <button style={buttonStyle} onClick={findLabs}>Lab Khojein</button>
      </div>

    </div>
  );
}

export default Services;