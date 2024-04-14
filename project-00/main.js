// document.title = "nik";
// const body = document.body;
// body.append("innerH");

// const h1 = document.createElement("h1");
// h1.textContent = "<marquee>HHEHEHEE</marquee>";

// const p = document.createElement("p");
// p.innerHTML = "<marquee>za</marquee>";

// const b = document.createElement("b");
// b.innerText = "<marquee>bold</marquee>";

// body.append(h1);
// body.append(p);
// body.append(b);
const body = document.body;
const btn1 = document.getElementById("btn1");
const btn2 = document.querySelector(".btn2");

var defaultColor = "black";
btn1.style.backgroundColor = defaultColor;
btn1.style.padding = "10px 100px";

function gantiWarna() {
  if (defaultColor === "black") {
    defaultColor = "red";
    btn1.style.backgroundColor = defaultColor;
  } else if (defaultColor === "red") {
    defaultColor = "black";
    btn1.style.backgroundColor = defaultColor;
  }
}

function appendText() {
  const newText = document.createElement("p");
  newText.textContent = "Zaim";
  body.append(newText);
}

function changeColor() {
  var selectText = document.querySelectorAll("p");

  for (i = 0; i < selectText.length; i++) {
    selectText[i].style.color = "pink";
  }
}
