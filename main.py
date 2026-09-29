import os
from flask import Flask, request, jsonify, render_template_string
import tensorflow as tf
from PIL import Image
import numpy as np

app = Flask(__name__)

# -------------------------------------------------------------
# 1. Model Load Setup
# Note: Agar aapke model file ka naam alag hai (jaise model.h5 ya plant_model.h5),
# toh niche 'model.h5' ko apne file name se change kar lein.
# -------------------------------------------------------------
MODEL_PATH = 'model.h5'

try:
    model = tf.keras.models.load_model(MODEL_PATH)
    print("Model successfully loaded!")
except Exception as e:
    model = None
    print(f"Model load notice: {e}")


# -------------------------------------------------------------
# 2. Homepage Route (Website UI)
# -------------------------------------------------------------
@app.route('/', methods=['GET'])
def home():
    html_code = '''
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Krishi AI - Disease Detection</title>
        <style>
            body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                background-color: #f4f7f6;
                margin: 0;
                padding: 40px 20px;
                display: flex;
                justify-content: center;
                align-items: center;
                min-height: 80vh;
            }
            .card {
                background: #ffffff;
                padding: 40px;
                border-radius: 12px;
                box-shadow: 0 8px 20px rgba(0,0,0,0.1);
                max-width: 450px;
                width: 100%;
                text-align: center;
            }
            h1 { color: #2c3e50; margin-bottom: 10px; font-size: 26px; }
            p { color: #7f8c8d; font-size: 14px; margin-bottom: 25px; }
            input[type="file"] {
                margin: 20px 0;
                padding: 10px;
                border: 2px dashed #27ae60;
                border-radius: 6px;
                width: 100%;
                box-sizing: border-box;
                background: #f9fbf9;
            }
            button {
                background: #27ae60;
                color: white;
                border: none;
                padding: 12px 24px;
                font-size: 16px;
                font-weight: bold;
                border-radius: 6px;
                cursor: pointer;
                width: 100%;
                transition: background 0.3s ease;
            }
            button:hover { background: #219150; }
        </style>
    </head>
    <body>
        <div class="card">
            <h1>🌱 Krishi AI</h1>
            <p>Plant Leaf Disease Detection System</p>
            <form action="/predict" method="post" enctype="multipart/form-data">
                <input type="file" name="file" accept="image/*" required><br>
                <button type="submit">Upload & Detect Disease</button>
            </form>
        </div>
    </body>
    </html>
    '''
    return render_template_string(html_code)


# -------------------------------------------------------------
# 3. Prediction Endpoint (/predict)
# -------------------------------------------------------------
@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({'error': 'No file uploaded'}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    try:
        img = Image.open(file.stream).convert('RGB')
        img = img.resize((224, 224))
        img_array = np.array(img) / 255.0
        img_array = np.expand_dims(img_array, axis=0)

        if model is not None:
            predictions = model.predict(img_array)
            predicted_class_idx = int(np.argmax(predictions[0]))
            confidence = round(float(np.max(predictions[0])) * 100, 2)
            
            return jsonify({
                'status': 'success',
                'class_index': predicted_class_idx,
                'confidence': f"{confidence}%"
            })
        else:
            return jsonify({
                'status': 'success',
                'message': 'Backend live hai! (Model loading configured)'
            })

    except Exception as e:
        return jsonify({'error': str(e)}), 500


if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)