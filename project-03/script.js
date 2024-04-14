const accordion = document.getElementsByClassName("content-container");
console.log(accordion);

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    console.log(this.classList.toggle("active"));
  });
}
