// ----------------------------------------------------------------
// Declarations and functions for shared game functionality
const url = "./data/games.json"

export async function fetchGames(displayFuntions) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayFuntions.forEach((displayFunction) => {
                displayFunction(data.genres);
            });
        } else {
            throw(Error(await response.text()));
        }
    } catch (error) {
        console.log(error);
    }
}

export function arrayifyGames(genres) {
    let gamesArray = [];
    genres.forEach((genre) => {
        genre.games.forEach((game) => {
            gamesArray = gamesArray.concat(game);
        });
    });
    return gamesArray;
}

// ----------------------------------------------------------------
// Declarations and functions for basic page functionality

// Swap between dark mode and light mode
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

// Ham navigation menu
const menu = document.getElementById("menu");
const navi = document.querySelector("nav");

// Set the copyright year and last modified date
const year = document.getElementById("currentYear");
const mod = document.getElementById("lastModified");
const now = new Date();

// Function to run the basic setup
export function setupBasicFunctions() {
    colorButton.addEventListener("click", () => {
        swapColorMode(colorPref);
    });

    if (colorPref == "dark" || colorPref == null) {
        swapColorMode("light");
    } else {
        swapColorMode("dark");
    }

    menu.addEventListener("click", () => {
        menu.classList.toggle("open");
        navi.classList.toggle("open");
    });

    year.textContent = now.getFullYear();
    mod.textContent += document.lastModified;
}