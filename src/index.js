import "./style.css";
import { content } from "./menuPage.js";
import { home } from "./home.js";


const allImages = require.context("./images", false, /\.(png|jp?g|gif|svg)$/);

const images = {};

allImages.keys().forEach((key) => {
  const fileName = key.split("/").pop();
  images[fileName] = allImages(key);
});

// document.body.appendChild(content());
home();