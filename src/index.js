import './style.css';
function component() {


      const element = document.createElement("div");

      // Lodash, now imported by this script
      element.innerHTML = "hellow dingus";
      // element.innerHTML = myName("Dingus");

      return element;
    }

    document.body.appendChild(component());
// Define a webpack context for the images directory
const imagesContext = require.context('./images', false, /\.(png|jpe?g|gif|svg)$/);

// Create an object to store imported images
const images = {};

// Iterate over each file in the context
imagesContext.keys().forEach((key) => {
  // Extract the filename from the key
  const fileName = key.split('/').pop();

  // Import the image file and add it to the images object
  images[fileName] = imagesContext(key);
});

// Now you can use the images object to access the imported images
console.log(images); // { 'image1.jpg': Module, 'image2.jpg': Module, ... }
