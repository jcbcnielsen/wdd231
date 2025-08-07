import { fetchGames, arrayifyGames } from "./shared-game-functions.mjs"

const formInfo = document.getElementById("formInfo");
const params = new URLSearchParams(window.location.search);

function displayFormResponse(genres) {
    const gamesArray = arrayifyGames(genres);

    if (params.has("fname") == true) {
        // Display first name, last name, and email
        formInfo.innerHTML += `
            <p>Your sign-up has been submitted. Your sign-up info:</p>
            <p>First Name: ${params.get("fname")}</p>
            <p>Last Name: ${params.get("lname")}</p>
            <p>Email: ${params.get("email")}</p>`;
        
        // Display phone number if it was provided
        if (params.get("phone") != "") {
            formInfo.innerHTML += `<p>Phone Number: ${params.get("phone")}</p>`;
        }

        // Display the game selected
        gamesArray.forEach((game) => {
            if (params.get("gameSel") == game.short) {
                formInfo.innerHTML += `<p>Game to Play: ${game.name}</p>`;
            }
        });

        // Display the date selected
        const dateObject = new Date(params.get("dateSel"));
        const dateString = dateObject.toLocaleDateString("en-US",
            { weekday: "short", year: "numeric", month: "short", day: "numeric" });
        formInfo.innerHTML += `<p>Date to Play: ${dateString}</p>`;

        // Display team name and members if the user is playing on a team
        if (params.has("tname") == true) {
            formInfo.innerHTML += `
                <p>Team Name: ${params.get("tname")}</p>
                <p>Team Members: ${params.get("tmembers")}</p>`;
        }

        // Display next step info
        formInfo.innerHTML += `<p>Thank you for signing up! We'll send you an email with the tournament details and the
            information you entered for reference!</p>`;
    } else {
        formInfo.innerHTML += `<p>Sorry, no response was submitted. Please try again.</p>`;
    }
}

fetchGames([displayFormResponse]);