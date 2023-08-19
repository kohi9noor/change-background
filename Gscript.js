
const colors = [
    "#1C8D73",
    "#89919a",
    "#EDBF69",
    "#FF6263",
    "#207398",
    "#242B2E",
    "#FF6666",
    "#6A1B4D",
    "#BA68C8",
    "#26C6DA",
    "#26A69A",
  ];

let change = document.querySelector("button");
let container = document.querySelector(".main");

change.addEventListener("click", (e) =>{
    container.style.backgroundColor = `${colors[Math.floor(Math.random() * colors.length)]}`;
});