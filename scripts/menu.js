const menu = document.querySelector("#menu");
const navi = document.querySelector("nav");

menu.addEventListener("click", function() {
    menu.classList.toggle("open");
    navi.classList.toggle("open");
});