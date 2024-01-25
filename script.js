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
const ingredients = document.querySelector(".ingredients-list-paste");

const shadow = document.querySelector(".shadow");
shadow.style.boxShadow = "0 0 0 0";

const newList = Array.from(ingredients.children);
newList[2].innerText = "3tsk vaniljsocker";

const newIngredient = document.createElement("li");
newIngredient.innerText = "400g naturell philadelphiaost";

ingredients.append(newIngredient);

const instructions = document.querySelector(".instructions-list");

newArr = [...instructions.children];
newArr[1].innerText =
  "Separera ägggulor och äggvitor. Äggvitorna lägger du i en stor bunke, äggulorna i en liten bunke.";
newArr[8].innerText = "Ställ in i frysen över natten.";

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
