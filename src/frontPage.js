export { content };

function content() {
  const content = document.querySelector("#content");
  const h1 = document.createElement("h1");

  const li = document.createElement("li");
  li.textContent = "Empire Classic";
  li.classList.add("league-spartan-l")

  const ul1 = document.createElement("ul");
  ul1.textContent = "goop soup";

  const ul2 = document.createElement("ul");
  ul2.textContent = "eldar Special";
  const spec = document.createElement("img");
  spec.src = "./images/salad.jpg";

  const ul3 = document.createElement("ul");
  ul3.textContent = "Mech juice";
  const sauce = document.createElement("img");
  sauce.src = "./images/grape.jpg"

  const para = document.createElement("h2");
  para.textContent = `"Forget love at first sight, it's love at first bite here!"`;
  para.classList.add("para");
  const customerPara = document.createElement("p");
  customerPara.textContent = 'Wholesome foodie sheeple';
  customerPara.classList.add('customer', "league-spartan-m");

  h1.textContent = "Sheepy's Tavern";
  content.appendChild(h1);
  content.appendChild(para);
  content.appendChild(customerPara);

  content.appendChild(li);
  li.appendChild(ul1);
  li.appendChild(ul2);
  li.appendChild(ul3);
  ul2.appendChild(spec);
  ul3.appendChild(sauce);


  return content;
}
