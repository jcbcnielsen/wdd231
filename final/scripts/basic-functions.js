// ----------------------------------------------------------------
// Swap light and dark mode palettes
const colorSheet = document.getElementById("colorMode");
const colorButton = document.getElementById("colorButton");
const ytIcon = document.getElementById("ytIcon");
const xIcon = document.getElementById("xIcon");
const fbIcon = document.getElementById("fbIcon");

colorButton.addEventListener("click", () => {
    if (colorSheet.getAttribute("href") == "styles/darkmode.css") {
        colorSheet.setAttribute("href", "styles/lightmode.css");
        colorButton.setAttribute("title", "Dark Mode");
        ytIcon.setAttribute("src", "images/yt-dark.svg");
        xIcon.setAttribute("src", "images/x-dark.svg");
        fbIcon.setAttribute("src", "images/fb-dark.svg");
    } else {
        colorSheet.setAttribute("href", "styles/darkmode.css");
        colorButton.setAttribute("title", "Light Mode");
        ytIcon.setAttribute("src", "images/yt-light.svg");
        xIcon.setAttribute("src", "images/x-light.svg");
        fbIcon.setAttribute("src", "images/fb-light.svg");
    }
});

colorSheet.setAttribute("href", "styles/darkmode.css");
ytIcon.setAttribute("src", "images/yt-light.svg");
xIcon.setAttribute("src", "images/x-light.svg");
fbIcon.setAttribute("src", "images/fb-light.svg");

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