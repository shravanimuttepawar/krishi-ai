import React, { useState } from 'react';
import axios from 'axios';

const DiseaseDetection = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
      setPrediction(null);
      setError("");
    }
  };

  const handleDetectDisease = async (e) => {
    if (e) e.preventDefault();
    
    if (!selectedFile) {
      setError("Pehle kripya ek image select karein!");
      return;
    }

    const formData = new FormData();
    // Backend la 'file' nav paahije
    formData.append("file", selectedFile);

    setLoading(true);
    setError("");

    try {
      // Live Render Backend Endpoint
      const response = await axios.post("https://krishi-ai-ruw7.onrender.com/predict", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setPrediction(response.data);
    } catch (err) {
      console.error("Error detecting disease:", err);
      setError("Disease detect karne mein samasya aayi. Kripya backend server check karein.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto", fontFamily: "Arial, sans-serif" }}>
      <h2>🌱 Krishi AI - Plant Disease Detection</h2>
      <p>Apni fasal ki patti ki tasveer upload karein taaki rog ki pehchaan ki ja sake.</p>

      <input type="file" accept="image/*" onChange={handleImageChange} style={{ marginBottom: "15px" }} />

      {preview && (
        <div style={{ marginBottom: "15px" }}>
          <img src={preview} alt="Selected Leaf" style={{ maxWidth: "100%", maxHeight: "300px", borderRadius: "8px" }} />
        </div>
      )}

      <div>
        <button 
          onClick={handleDetectDisease} 
          disabled={loading}
          style={{
            backgroundColor: "#2e7d32",
            color: "#fff",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          {loading ? "Detecting..." : "Detect Disease"}
        </button>
      </div>

      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}

      {prediction && (
        <div style={{ marginTop: "20px", padding: "15px", backgroundColor: "#e8f5e9", borderRadius: "8px" }}>
          <h3>Prediction Result:</h3>
          <p><strong>Result:</strong> {prediction.class || prediction.disease || prediction.prediction || JSON.stringify(prediction)}</p>
          {prediction.confidence && <p><strong>Confidence:</strong> {(prediction.confidence * 100).toFixed(2)}%</p>}
        </div>
      )}
    </div>
  );
};

export default DiseaseDetection;
