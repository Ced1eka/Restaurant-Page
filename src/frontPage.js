export { content };

function content() {
  const content = document.querySelector("#content");
  const h1 = document.createElement("h1");

  const li = document.createElement("li");
  li.textContent = "Empire Classic";

  const ul1 = document.createElement("ul");
  ul1.textContent = "goop soup";

  const ul2 = document.createElement("ul");
  ul2.textContent = "eldar Special";
  const spec = document.createElement("img");
  spec.src = "./images/salad.jpg";

  const ul3 = document.createElement("ul");
  ul3.textContent = "Mech juice";
  const sauce = document.createElement("img");


  h1.textContent = "Sheepy's Tavern";
  content.appendChild(h1);
  content.appendChild(li);
  li.appendChild(ul1);
  li.appendChild(ul2);
  li.appendChild(ul3);
  ul2.appendChild(spec);
  ul3.appendChild(sauce);


  return content;
}
