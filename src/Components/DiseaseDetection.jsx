import React, { useState } from "react";
import axios from "axios";

const DiseaseDetection = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Image select karne par yeh function chalega
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
      setPrediction(null);
      setError("");
    }
  };

  // Backend par image bhej kar predict karne ke liye
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedFile) {
      setError("Pehle kripya ek image select karein!");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedFile);

    setLoading(true);
    setError("");

    try {
      // Apne backend API ka URL yahan dalein (jaise Flask ka http://localhost:5000/predict)
      const response = await axios.post("http://localhost:5000/predict", formData, {
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

      <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
        <input 
          type="file" 
          accept="image/*" 
          onChange={handleImageChange} 
          style={{ marginBottom: "15px", display: "block" }}
        />

        {/* Image Preview */}
        {preview && (
          <div style={{ marginBottom: "15px" }}>
            <img 
              src={preview} 
              alt="Crop Preview" 
              style={{ width: "100%", maxHeight: "300px", objectFit: "contain", borderRadius: "8px" }} 
            />
          </div>
        )}

        <button 
          type="submit" 
          disabled={loading}
          style={{ 
            padding: "10px 20px", 
            backgroundColor: "#28a745", 
            color: "white", 
            border: "none", 
            borderRadius: "5px", 
            cursor: "pointer" 
          }}
        >
          {loading ? "Analyzing..." : "Detect Disease"}
        </button>
      </form>

      {/* Error Message */}
      {error && <p style={{ color: "red", marginTop: "15px" }}>{error}</p>}

      {/* Prediction Result */}
      {prediction && (
        <div style={{ marginTop: "25px", padding: "15px", backgroundColor: "#f8f9fa", borderRadius: "8px", border: "1px solid #ddd" }}>
          <h3>🔍 Detection Results:</h3>
          <p><strong>Disease Name:</strong> {prediction.disease || prediction.class || "N/A"}</p>
          <p><strong>Confidence:</strong> {prediction.confidence ? `${(prediction.confidence * 100).toFixed(2)}%` : "N/A"}</p>
          {prediction.remedy && (
            <p><strong>Recommended Solution:</strong> {prediction.remedy}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default DiseaseDetection;