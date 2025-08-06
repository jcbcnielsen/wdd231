// ----------------------------------------------------------------
// Swap light and dark mode palettes
const colorSheet = document.getElementById("colorMode");
const colorButton = document.getElementById("colorButton");
const ytIcon = document.getElementById("ytIcon");
const xIcon = document.getElementById("xIcon");
const fbIcon = document.getElementById("fbIcon");

let colorPref = localStorage.getItem("colorPref");

function swapColorMode(currentColor) {
    if (currentColor == "dark") {
        colorSheet.setAttribute("href", "styles/lightmode.css");
        colorButton.setAttribute("title", "Dark Mode");
        ytIcon.setAttribute("src", "images/yt-dark.svg");
        xIcon.setAttribute("src", "images/x-dark.svg");
        fbIcon.setAttribute("src", "images/fb-dark.svg");
        colorPref = "light";
        localStorage.setItem("colorPref", colorPref);
    } else {
        colorSheet.setAttribute("href", "styles/darkmode.css");
        colorButton.setAttribute("title", "Light Mode");
        ytIcon.setAttribute("src", "images/yt-light.svg");
        xIcon.setAttribute("src", "images/x-light.svg");
        fbIcon.setAttribute("src", "images/fb-light.svg");
        colorPref = "dark";
        localStorage.setItem("colorPref", colorPref);
    }
}

colorButton.addEventListener("click", () => {
    swapColorMode(colorPref);
});

if (colorPref == "dark" || colorPref == null) {
    swapColorMode("light");
} else {
    swapColorMode("dark");
}

// ----------------------------------------------------------------
// Open and close ham navigation menu
const menu = document.getElementById("menu");
const navi = document.querySelector("nav");

menu.addEventListener("click", () => {
    menu.classList.toggle("open");
    navi.classList.toggle("open");
});

// ----------------------------------------------------------------
// Set copyright year and last modified date and time in footer
const year = document.getElementById("currentYear");
const mod = document.getElementById("lastModified");
const now = new Date();

year.textContent = now.getFullYear();
mod.textContent += document.lastModified;