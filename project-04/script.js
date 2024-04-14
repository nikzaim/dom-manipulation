const getButtons = document.getElementById("grouped-button");
const groupedButton = getButtons.children;

function handleMethod(methods) {
  switch (methods) {
    case "btn-plus":
      symbol = "+";
      break;
    case "btn-minus":
      symbol = "-";
      break;
    case "btn-multiplication":
      symbol = "x";
      break;
    case "btn-divide":
      symbol = "/";
      break;
    default:
      symbol = "+";
  }
}

for (i = 0; i < groupedButton.length; i++) {
  groupedButton[i].addEventListener("click", (e) => {
    e.preventDefault();
    getButtons.parentNode.getElementsByClassName("active")[0].classList.remove("active");
    e.target.classList.add("active");

    let methods = e.target.getAttribute("id");
    handleMethod(methods);

    const p = document.querySelector(".methods");
    p.textContent = symbol;

    const currentMethods = document.querySelector(".active").getAttribute("id");
    console.log(currentMethods);

    const form = document.querySelector("#form");
    const input1 = document.querySelector("#input1");
    const input2 = document.querySelector("#input2");
    const result = document.querySelector(".result");

    function handleCalculation(input1, input2) {
      switch (currentMethods) {
        case "btn-plus":
          total = Number(input1.value) + Number(input2.value);
          break;
        case "btn-minus":
          total = Number(input1.value) - Number(input2.value);
          break;
        case "btn-multiplication":
          total = Number(input1.value) * Number(input2.value);
          break;
        case "btn-divide":
          total = Number(input1.value) / Number(input2.value);
          break;
        default:
          total = "";
      }
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      handleCalculation(input1, input2);
      result.textContent = total;
    });
  });
}
