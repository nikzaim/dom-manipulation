let text = document.getElementById("text");
const todoForm = document.getElementById("todoForm");
const ul = document.querySelector("ul");
todoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const todo = text.value;

  const li = document.createElement("li");
  li.textContent = todo;
  ul.append(li);

  li.setAttribute("class", "list-itemsz");
  li.setAttribute("id", "list-itemsz");
  text.value = "";
});

console.log(todoForm.classList.contains("x"));

ul.children[1].style.fontSize = "32px";
ul.firstElementChild.style.color = "cyan";

document.querySelector(".nikzaim").addEventListener("click", (e) => {
  console.log(e.target.getAttribute("id"));

  const target = e.target;

  if (target.matches("lsi")) {
    target.style.fontSize = "2rem";
  }
});
