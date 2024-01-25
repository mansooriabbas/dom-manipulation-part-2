const logo = document.querySelector(".logo-text");
const header = document.querySelector("header");
const recipeName = document.querySelector("#recipe-name");
const timerIcon = document.querySelector("span");
const correctTime = document.querySelector(".time");
const correctImage = document.querySelector("img");
const ingredientsColor = document.querySelector(".ingredients-container");
const ingredientsListBottom = document.querySelector(
  ".ingredients-list-bottom"
);
const ingredientsListBottomP = document.querySelector(
  ".ingredients-list-bottom p"
);
const ingredients = document.querySelector(".to-paste")

const listItem1 = document.createElement("li");
const listItem2 = document.createElement("li");
ingredientsListBottomP.remove();

listItem1.innerText = "15st digistivetex";
listItem2.innerText = "Lite smör";
ingredientsListBottom.append(listItem1, listItem2);
logo.style.color = "#384241";
header.style.justifyContent = "flex-start";
header.style.borderBottom = "1px solid lightgray";
recipeName.innerText = "Frozen Cheescake";
timerIcon.className = "material-icons";
correctTime.innerText = "60+ min";
correctImage.src = "./assets/frozen-cheesecake-slice.jpg";
ingredientsColor.style.backgroundColor = "#f9f9f9";
