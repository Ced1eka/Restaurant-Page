export function home() {
  const body = document.querySelector("body");
  body.classList.add("homebody");

  const content = document.querySelector("#content");
  const div = document.createElement("div");
  div.classList.add("contentHome");

  const h1 = document.createElement("h1");
  h1.textContent =
    "Home to the greatest feasts on this side of the inquisition.";

  const para = document.createElement("p");
  para.textContent =
    `"Tired from hard spacemarine work all day? Come on down and fill yourself with one of our special signature meals that's guaranteed to make even a primach praise the Emperor in delight just from one bite!"`;
  const homeImg = document.createElement("img");
  homeImg.classList.add("homeImage");
  homeImg.src = "./images/pizza.jpg";

  content.appendChild(div);
  div.appendChild(h1);
  div.appendChild(para);
  div.appendChild(homeImg);
}
