let currentIndex = 0; 
let responses = {}; 
const images = [];
function generateFilenames(totalImages) {
    for (let i = 1; i <= totalImages; i++) {
        const filename = `image_${String(i).padStart(5, '0')}_output.jpg.jpg`;
        images.push(filename);
    }
}

const totalImages = 523; 
generateFilenames(totalImages);
const imageDisplay = document.getElementById('image-display');
function loadImage() {
    if (currentIndex < images.length) {
        const imagePath = `images/${images[currentIndex]}`;
        imageDisplay.src = imagePath;
        imageDisplay.alt = images[currentIndex];      
    } else {
        completeSurvey();
    }
}
function recordResponse(response) {
    if (currentIndex < images.length) {
        const imageName = images[currentIndex];
        responses[imageName] = response; 
        currentIndex++; 
        loadImage();
    } else {
        completeSurvey();
    }
}
function completeSurvey() {
    alert('Survey complete! Thank you for your responses.');
    console.log('Survey Responses:', responses); 
    document.getElementById('container').innerHTML = '<h1>Thank you for completing the survey!</h1>';
}
loadImage();
