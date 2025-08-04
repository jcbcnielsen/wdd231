const url = "./data/games.json"

export async function fetchGames(displayFuntion) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayFuntion(data.genres);
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