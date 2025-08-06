import { fetchGames } from "./shared-game-functions.mjs";

const deck = document.getElementById("deck");

function displayAllGameTournaments(genres) {
    // Create a display card for each genre
    genres.forEach((genre) => {
        const card = document.createElement("div");
        card.classList.add("card", genre.short);
        const genreName = document.createElement("h2");
        genreName.textContent = genre.name;
        card.appendChild(genreName);

        // Display each game in the genre on the card
        genre.games.forEach((game) => {
            const display = document.createElement("div");
            display.classList.add("game");
            display.innerHTML = `
                <img src="images/${game.short}.webp"
                    alt="${game.name} by ${game.publisher}" loading="lazy">
                <h3>${game.name}</h3>
                <p class="pub">${game.publisher}</p>
                <h4>Upcoming Tournaments:</h4>`;
            
            // Display each upcoming tournament date
            const tourneys = document.createElement("div");
            tourneys.classList.add("tourneys");
            game.dates.forEach((tDateStr) => {
                const tDateObj = new Date(tDateStr);
                const tDateLocStr = tDateObj.toLocaleDateString("en-US",
                    { weekday: "short", year: "numeric", month: "short", day: "numeric" });
                const tourney = document.createElement("p");
                tourney.textContent = tDateLocStr;
                tourneys.appendChild(tourney);
            });

            // Add the game display to the genre card
            display.appendChild(tourneys);
            card.appendChild(display);
        });

        // Add the genre card to the main display
        deck.appendChild(card);
    });
}

fetchGames(displayAllGameTournaments);