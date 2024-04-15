import './style.css';
import { content } from './frontPage.js';

// function component() {


//       const element = document.createElement("div");

//       // Lodash, now imported by this script
//       element.innerHTML = "hellow dingus";
//       // element.innerHTML = myName("Dingus");

//       return element;
//     }

    document.body.appendChild(content());



const allImages = require.context('./images',false,/\.(png|jp?g|gif|svg)$/);

const images = {};

allImages.keys().forEach((key)=>{
  const fileName = key.split('/').pop();
  images[fileName] = allImages(key);
})