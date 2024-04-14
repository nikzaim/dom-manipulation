const open = document.getElementById("btn");
const close = document.getElementById("close");
const modal = document.querySelector(".modal");

open.addEventListener("click", (e) => {
  e.preventDefault();
  modal.style.display = "flex";
});
close.addEventListener("click", (e) => {
  e.preventDefault();
  modal.style.display = "none";
});
