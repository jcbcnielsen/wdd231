const deck = document.querySelector("#deck");
const visitText = document.querySelector("#lastVisit");

async function fetchPoI() {
    try {
        const response = await fetch("data/interest.json");
        if (response.ok) {
            const data = await response.json();
            displayPoI(data.points);
        } else {
            throw(Error(await response.text()));
        }
    } catch (error) {
        console.log(error);
    }
}

function displayPoI(points) {
    points.forEach((point) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <h2>${point.name}</h2>
            <figure><img src="${point.image}" alt="${point.name}" loading="lazy"></figure>
            <address>${point.address}</address>
            <p>${point.description}</p>`;
        const learnButton = document.createElement("button");
        learnButton.textContent = "Learn More";
        learnButton.addEventListener("click", () => {
            window.location = point.redirect;
        });
        card.appendChild(learnButton);
        deck.appendChild(card);
    });
}

function displayLastVisit() {
    const currentDate = new Date();
    if (localStorage.getItem("lastVisit") != null) {
        const previousDate = new Date(localStorage.getItem("lastVisit"));
        const currentMS = currentDate.getTime();
        const previousMS = previousDate.getTime();
        const msDiff = currentMS - previousMS;
        const msPerDay = 1000 * 60 * 60 * 24;
        const dayDiff = Math.floor(msDiff / msPerDay);
        if (dayDiff == 0) {
            visitText.textContent = "Back so soon! Awesome!";
        } else if (dayDiff == 1) {
            visitText.textContent = "You last visited 1 day ago.";
        } else {
            visitText.textContent = `You last visited ${dayDiff} days ago.`;
        }
    } else {
        visitText.textContent = "Welcome! Let us know if you have any questions.";
    }
    localStorage.setItem("lastVisit", currentDate.toString());
}

fetchPoI();
displayLastVisit();