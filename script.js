const logo = document.querySelector(".logo-text")
const header = document.querySelector("header")
const recipeName = document.querySelector("#recipe-name")
const timerIcon = document.querySelector("span")
const correctTime = document.querySelector(".time")

logo.style.color = "#384241"
header.style.justifyContent = "flex-start"
header.style.borderBottom = "1px solid lightgray"
recipeName.innerText = "Frozen Cheescake"
timerIcon.className = "material-icons"
correctTime.innerText = "60+ min"