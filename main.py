import os
import numpy as np
from PIL import Image
import tensorflow as tf
from flask import Flask, request, jsonify
from flask_cors import CORS  # CORS permission sathi

app = Flask(__name__)
CORS(app)  # Sagle domains aani requests allow karnyasathi

# 1. Model Load Setup
MODEL_PATH = 'model.h5'

try:
    model = tf.keras.models.load_model(MODEL_PATH)
    print("Model successfully loaded!")
except Exception as e:
    print(f"Error loading model: {e}")
    model = None

@app.route('/', methods=['GET'])
def home():
    return jsonify({"status": "Krishi AI Backend is Live and Running!"})

@app.route('/predict', methods=['POST'])
def predict():
    # Frontend kadun 'file' parameter taspana
    if 'file' not in request.files:
        return jsonify({'error': 'No file provided in request'}), 400
    
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No file selected'}), 400

    if model is None:
        return jsonify({'error': 'Model file not loaded on server'}), 500

    try:
        # Image process kara
        img = Image.open(file.stream).convert('RGB')
        img = img.resize((224, 224))  # Model input size nusar (224x224 kiwa 256x256)
        img_array = np.array(img) / 255.0
        img_array = np.expand_dims(img_array, axis=0)

        # Prediction kara
        predictions = model.predict(img_array)
        predicted_class_index = int(np.argmax(predictions[0]))
        confidence = float(np.max(predictions[0]))

        return jsonify({
            'class': f"Detected Disease ID: {predicted_class_index}",
            'prediction': predicted_class_index,
            'confidence': confidence
        })

    except Exception as e:
        print(f"Prediction Error: {e}")
        return jsonify({'error': f"Prediction failed: {str(e)}"}), 500

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
