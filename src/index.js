import "./style.css";
import { menu } from "./menuPage.js";
import { home } from "./home.js";
import { about } from "./about.js";

const allImages = require.context("./images", false, /\.(png|jp?g|gif|svg)$/);
const images = {};

allImages.keys().forEach((key) => {
  const fileName = key.split("/").pop();
  images[fileName] = allImages(key);
});

const moduleFunctions = {
  home: home,
  menu: menu,
  about: about,
};

const btns = document.querySelectorAll("nav button");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {

    let existingContent = document.querySelector("#content");
    if (existingContent) {
      existingContent.remove(); // Remove the existing content
    }

    // Create new content based on the button text
    let newContent = document.createElement("div");
    newContent.id = "content";
    document.body.appendChild(newContent);

    let buttonText = btn.textContent.toLocaleLowerCase();
    let moduleFunction = moduleFunctions[buttonText];
    moduleFunction();
  });
});
