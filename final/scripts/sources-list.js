import { fetchGames, arrayifyGames } from "./shared-game-functions.mjs";

const deck = document.getElementById("deck");

function displayGameSources(genres) {
    // Arrange the games into a single array and display each of them
    const gamesArray = arrayifyGames(genres);
    gamesArray.forEach((game) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <img src="images/${game.cover}"
                alt="${game.name} by ${game.publisher}" loading="lazy">
            <h2>${game.name}</h2>
            <p>Copyright: ${game.publisher}</p>
            <a href="${game.source}">Image source</a>`;
        deck.appendChild(card);
    });
}

fetchGames(displayGameSources);