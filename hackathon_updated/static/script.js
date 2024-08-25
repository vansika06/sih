document.addEventListener("DOMContentLoaded", function () {
    const captureBtn = document.getElementById('captureBtn');
    const video = document.getElementById('video');
    const resultContainer = document.getElementById('result');

    // Access the camera and stream it to the video element
    navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
            video.srcObject = stream;
        })
        .catch((err) => {
            console.error("Error accessing the camera: ", err);
        });

    captureBtn.addEventListener('click', () => {
        captureAndPredict();
    });

    function captureAndPredict() {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');

        canvas.width = 224;
        canvas.height = 224;

        const img = new Image();
            img.src = './images.jpeg'
        context.drawImage(img, 0, 0, canvas.width, canvas.height);

       

        // Get the image data from the canvas as a pixel array
        const imageData = context.getImageData(0, 0, canvas.width, canvas.height).data;

        // Convert the Uint8ClampedArray to a regular array
        const imageArray = Array.from(imageData);

        // Send the image data to the Flask server
        fetch('/predict', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ image: imageArray, width: canvas.width, height: canvas.height })
        })
        .then(response => response.json())
        .then(data => {
            resultContainer.innerHTML = `Probability: ${data.probability}<br>Class: ${data.class}`;
        })
        .catch(error => console.error('Error:', error));
    }
});
