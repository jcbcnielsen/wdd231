const memberDataSource = "https://jcbcnielsen.github.io/wdd231/chamber/data/members.json";
const display = document.querySelector("#companies");
const view = document.querySelector("#view");
let response = null;
let data = null;
let companies = null;

function displayCompanyCards(companies) {
    display.innerHTML = "";
    display.classList.remove("list");
    display.classList.add("deck");
    view.textContent = "List View";
    companies.forEach((company) => {
        display.innerHTML +=  `<div class="card">
                                <img src="${company.image}" alt="${company.name}" loading="lazy">
                                <p>${company.address}</p>
                                <p>${company.phone}</p>
                                <a href="${company.url}">${company.url}</a>
                            </div>`;
    });
}

function displayCompanyList(companies) {
    display.innerHTML = "";
    display.classList.remove("deck");
    display.classList.add("list");
    view.textContent = "Card View";
    companies.forEach((company) => {
        display.innerHTML +=  `<div class="item">
                                <p>${company.name}</p>
                                <p>${company.address}</p>
                                <p>${company.phone}</p>
                                <a href="${company.url}">${company.url}</a>
                            </div>`;
    });
}

view.addEventListener("click", function() {
    if (display.classList.contains("deck")) {
        displayCompanyList(companies);
    }
    else {
        displayCompanyCards(companies);
    }
});

async function getCompanyData() {
    response = await fetch(memberDataSource);
    data = await response.json();
    companies = data.members;
    displayCompanyCards(companies);
}

getCompanyData();