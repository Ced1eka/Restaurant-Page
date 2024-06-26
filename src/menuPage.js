export { menu };

function menu() {
  const body = document.querySelector("body");
  body.classList.add("body-menu");
  body.style.backgroundImage ='url("./images/bread.jpg")';

  const content = document.querySelector("#content");
  content.classList.add("content-menu");
  const h1 = document.createElement("h1");

  const ul = document.createElement("ul");
  ul.textContent = "Empire Classic";
  ul.classList.add("league-spartan-l");

  const li1 = document.createElement("li");
  li1.textContent = "goop soup";
  const ulImg1 = document.createElement("img");
  ulImg1.classList.add("ulImg");
  ulImg1.src = "./images/udon.jpg";
  const lip1 = document.createElement("p");
  lip1.textContent = "Only the most freshest of ingredients";

  const li2 = document.createElement("li");
  li2.textContent = "eldar Special";
  const ulImg2 = document.createElement("img");
  ulImg2.classList.add("ulImg");
  ulImg2.src = "./images/salad.jpg";
  const lip2 = document.createElement("p");
  lip2.textContent = "Only the most freshest of ingredients";

  const li3 = document.createElement("li");
  li3.textContent = "Mech juice";
  const ulImg3 = document.createElement("img");
  ulImg3.classList.add("ulImg");
  ulImg3.src = "./images/grape.jpg";
  const lip3 = document.createElement("p");
  lip3.textContent = "Only the most freshest of ingredients";

  const para = document.createElement("h2");
  para.textContent = `"Forget love at first sight, it's love at first bite here!"`;
  para.classList.add("para");
  const customerPara = document.createElement("p");
  customerPara.textContent = "Wholesome foodie sheeple";
  customerPara.classList.add("customer", "league-spartan-m");

  h1.textContent = "Sheepy's Tavern";
  content.appendChild(h1);
  content.appendChild(para);
  content.appendChild(customerPara);

  content.appendChild(ul);
  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);
  li1.appendChild(lip1);
  li2.appendChild(lip2);
  li3.appendChild(lip3);
  li1.appendChild(ulImg1);
  li2.appendChild(ulImg2);
  li3.appendChild(ulImg3);

  return content;
}
