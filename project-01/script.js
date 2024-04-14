let word = document.querySelector("p");

const btn = document.querySelector("#btn");

const words = ["Nik", "Saya", "Rendang", "Pulut", "Ketupat", "Tapai", "Mercun", "Valorant", "Real Madrid"];

btn.addEventListener("click", (e) => {
  e.preventDefault();

  let random = Math.floor(Math.random() * words.length);
  console.log(random);

  word.textContent = words[random];
});
