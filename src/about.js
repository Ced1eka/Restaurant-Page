export function about() {
  const body = document.querySelector("body");
  body.classList.add("body-about");

  const content = document.querySelector("#content");
  content.classList.add("content-about");
  const h1 = document.createElement("h1");
  h1.textContent = "About this site";
  h1.classList.add("league-spartan-xl");
  const para = document.createElement("p");
  para.classList.add("league-spartan-m", "para-about");
  para.textContent =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas ultricies mi eget mauris. Malesuada bibendum arcu vitae elementum curabitur vitae.";

  content.appendChild(h1);
  content.appendChild(para);

  return content;
}
