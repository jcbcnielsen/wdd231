import { fetchGames } from "./shared-game-functions.mjs";
import { displayGamesSelect, addDatesAndTeamCheck, teamCheckChange } from "./form-functions.mjs";
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

fetchGames(displayGamesSelect);
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