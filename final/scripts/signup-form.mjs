import { fetchGames } from "./shared-game-functions.mjs";
import { gamesArray, displayGamesSelect, addDatesAndTeamCheck, teamCheckChange } from "./form-functions.mjs";
import { displayReview } from "./review-functions.mjs";

// Declare form objects
export const firstName = document.getElementById("fname");
export const lastName = document.getElementById("lname");
export const email = document.getElementById("email");
export const gameSel = document.getElementById("gameSel");
export const dateSel = document.getElementById("dateSel");
export const teamCheck = document.getElementById("team");
export const teamName = document.getElementById("tname");
export const teamMembers = document.getElementById("tmembers");
const signUpButton = document.getElementById("signupButton");
const params = new URLSearchParams(window.location.search);

// Declare upcoming tournament display container
const upcoming = document.getElementById("upcoming");

function displayUpcomingTourneys(genres) {
    // Find the three closest game tournaments
    let closestDates = ["2100-12-29", "2100-12-30", "2100-12-31"];
    let closestGames = [0, 0, 0];
    gamesArray.forEach((game) => {
        if (game.dates[0] < closestDates[0]) {
            closestDates[0] = game.dates[0];
            closestGames[0] = game;
        } else if (game.dates[0] < closestDates[1]) {
            closestDates[1] = game.dates[0];
            closestGames[1] = game;
        } else if (game.dates[0] < closestDates[2]) {
            closestDates[2] = game.dates[0];
            closestGames[2] = game;
        }
    });

    // Display the game information found above
    closestGames.forEach((game) => {
        const tourneyDate = new Date(game.dates[0]);
        const tourneyString = tourneyDate.toLocaleDateString("en-US",
            { weekday: "short", year: "numeric", month: "short", day: "numeric" });
        upcoming.innerHTML += `
            <div class="game">
            <img src="images/${game.short}.webp" alt="${game.name} by ${game.publisher}" loading="lazy">
            <h3>${game.name}</h3>
            <p>${game.publisher}</p>
            <p>Next Tourney: ${tourneyString}</p>
            </div>`;
    });
}

fetchGames([displayGamesSelect, displayUpcomingTourneys]);
gameSel.addEventListener("change", () => {
    addDatesAndTeamCheck();
});
teamCheck.addEventListener("click", () => {
    teamCheckChange();
});
signUpButton.addEventListener("click", () => {
    displayReview()
});
if (params.has("fname") == true) {
    firstName.value = params.get("fname");
    lastName.value = params.get("lname");
    email.value = params.get("email");
    signUpButton.textContent = `Finish Signing Me Up!`;
}