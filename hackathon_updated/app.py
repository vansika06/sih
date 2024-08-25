from flask import Flask, request, jsonify, render_template
import numpy as np
import pickle



with open('model.pkl', 'rb') as file:
    model = pickle.load(file)

app = Flask(__name__)



@app.route('/')
def index():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json


     
    # Extract the image data and dimensions from the request
    image_data = np.array(data['image'], dtype=np.uint8)
    width = data['width']
    height = data['height']

    # Reshape the image data to the required format (Height, Width, Channels)
    image_data = image_data.reshape((height, width, 4))  # Assuming RGBA image

    # If the model expects a different number of channels (e.g., RGB), drop the alpha channel
    image_data = image_data[:, :, :3]

    # Preprocess the image data if necessary (e.g., normalization)
    image_data = image_data / 255.0  # Example normalization

    # Add a batch dimension (if required by your model)
    image_data = np.expand_dims(image_data, axis=0)

    # Make a prediction
    prediction = model.predict(image_data)

    # Return the prediction result as JSON
    return jsonify({
        'probability': float(prediction[0][0]),  # Assuming binary classification
        'class': int(prediction[0][0] > 0.5)  # Assuming 0.5 as the threshold
    })

if __name__ == '__main__':
    app.run(debug=True)
