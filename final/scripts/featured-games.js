import { fetchGames, arrayifyGames } from "./shared-game-functions.mjs";

const spotlight = document.getElementById("spotlight");

function displayRandomlyFeatured(genres) {
    // Arrange the games into a single array and randomly select three unique games
    const games = arrayifyGames(genres);
    let randFeat = [
        Math.floor(Math.random() * games.length),
        Math.floor(Math.random() * games.length),
        Math.floor(Math.random() * games.length)
    ]
    while (randFeat[0] == randFeat[1]) {
        randFeat[1] = Math.floor(Math.random() * games.length);
    }
    while (randFeat[0] == randFeat[2] || randFeat[1] == randFeat[2]) {
        randFeat[2] = Math.floor(Math.random() * games.length);
    }

    // Construct and display the <div> for each selected game
    randFeat.forEach((i) => {
        let nextTourneyDate = new Date(games[i].dates[0]);
        const nextTourneyString = nextTourneyDate.toLocaleDateString("en-US",
            { weekday: "short", year: "numeric", month: "short", day: "numeric" });
        const game = document.createElement("div");
        game.classList.add("game");
        game.innerHTML = `
            <h3>${games[i].name}</h3>
            <p class="pub">${games[i].publisher}</p>
            <p class="next">Next Tourney: ${nextTourneyString}</p>
            <img src="images/${games[i].short}.webp"
                alt="${games[i].name} by ${games[i].publisher}" loading="lazy">`;
        spotlight.appendChild(game);
    });
}

fetchGames(displayRandomlyFeatured);