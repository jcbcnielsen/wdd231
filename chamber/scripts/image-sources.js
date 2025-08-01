const main = document.querySelector("main");

async function fetchImages() {
    try {
        const response = await fetch("data/interest.json");
        if (response.ok) {
            const data = await response.json();
            displayImages(data.points);
        } else {
            throw(Error(await response.text()));
        }
    } catch (error) {
        console.log(error);
    }
}

function displayImages(points) {
    points.forEach((point) => {
        const card = document.createElement("div");
        card.innerHTML = `
            <br>
            <figure>
                <img src="${point.image}" alt="${point.name}">
                <figcaption><a href="${point.source}">Link to image source</a></figcaption>
            </figure>
            <br>`;
        main.appendChild(card);
    });
}

fetchImages();