import { gameSel, dateSel, teamCheck, teamName, teamMembers } from "./signup-form.mjs";
import { arrayifyGames } from "./shared-game-functions.mjs";

export let gamesArray;

export function displayGamesSelect(genres) {

    // Create an optgroup for each game genre
    genres.forEach((genre) => {
        const gameGroup = document.createElement("optgroup");
        gameGroup.setAttribute("label", genre.name);

        // Populate the genre optgroup with each game
        genre.games.forEach((game) => {
            const gameOpt = document.createElement("option");
            gameOpt.setAttribute("value", game.short);
            gameOpt.setAttribute("label", game.name);
            gameOpt.textContent = game.name;
            gameGroup.appendChild(gameOpt);
        });
        gameSel.appendChild(gameGroup);
    });

    // Save the games data as an array for later use
    gamesArray = arrayifyGames(genres);
}

export function addDatesAndTeamCheck() {
    // Get the information needed about the selected game
    let gameDates;
    let teamGame;
    gamesArray.forEach((game) => {
        if (gameSel.value == game.short) {
            gameDates = game.dates;
            teamGame = game.team;
        }
    });

    // Fill in the date select with the dates for the game
    dateSel.innerHTML = `<option value="select" selected disabled>-- select --</option>`;
    gameDates.forEach((tourney) => {
        const tourneyDate = new Date(tourney);
        const tourneyString = tourneyDate.toLocaleDateString("en-US",
            { weekday: "short", year: "numeric", month: "short", day: "numeric" });
        const dateOpt = document.createElement("option");
        dateOpt.setAttribute("value", tourney);
        dateOpt.setAttribute("label", tourneyString);
        dateOpt.textContent = tourneyString;
        dateSel.appendChild(dateOpt);
    });
    dateSel.removeAttribute("disabled");

    // Set the appropriate states for the team version checkmark
    if (teamGame == "true") {
        teamCheck.checked = true;
        teamCheck.setAttribute("disabled", "");
    } else if (teamGame == "false") {
        teamCheck.checked = false;
        teamCheck.setAttribute("disabled", "");
    } else {
        teamCheck.removeAttribute("disabled");
    }
    teamCheckChange();
}

export function teamCheckChange() {
    if (teamCheck.checked == true) {
        // Activate and require the team inputs if the user is playing on a team
        teamName.removeAttribute("disabled");
        teamName.setAttribute("required", "");
        teamMembers.removeAttribute("disabled");
        teamMembers.setAttribute("required", "");
    } else {
        // Disable and remove the requirement for the team inputs if the user is not on a team
        teamName.value = "";
        teamName.removeAttribute("required");
        teamName.setAttribute("disabled", "");
        teamMembers.value = "";
        teamMembers.removeAttribute("required");
        teamMembers.setAttribute("disabled", "");
    }
}