from flask import Flask, jsonify, request
from flask_cors import CORS
import numpy as np
from PIL import Image

app = Flask(__name__)
CORS(app)  # Frontend connection ke liye

# Class names
CLASS_NAMES = ["Healthy", "Leaf Spot", "Blight"]

@app.route("/predict", methods=["POST"])
def predict():
    try:
        if "file" not in request.files:
            return jsonify({"error": "No file uploaded"}), 400

        file = request.files["file"]

        # Image open aur resize karna
        image = Image.open(file.stream).convert("RGB")
        image = image.resize((224, 224))

        # Automatic pixel color/spot analysis logic
        img_np = np.array(image)
        r, g, b = img_np[:, :, 0], img_np[:, :, 1], img_np[:, :, 2]

        # Green pixels aur brown/dark spots count karna
        green_pixels = np.sum((g > r) & (g > b))
        brown_spots = np.sum((r > g) & (r > 80))
        total_pixels = 224 * 224

        spot_ratio = brown_spots / total_pixels

        # Image ke hisab se result badlega
        if spot_ratio > 0.12:
            predictions = np.array([[0.05, 0.10, 0.85]])  # Blight
        elif spot_ratio > 0.04:
            predictions = np.array([[0.10, 0.85, 0.05]])  # Leaf Spot
        else:
            predictions = np.array([[0.85, 0.10, 0.05]])  # Healthy

        max_confidence = float(np.max(predictions))
        predicted_index = int(np.argmax(predictions))

        THRESHOLD = 0.75
        if max_confidence < THRESHOLD:
            result = "Healthy"
        else:
            result = CLASS_NAMES[predicted_index]

        return jsonify({
            "result": result,
            "confidence": round(max_confidence * 100, 2)
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000, debug=True)