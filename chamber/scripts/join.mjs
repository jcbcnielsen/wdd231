const timestamp = document.querySelector("#timestamp");
const mDets = document.querySelector("#mDetails");
const npbut = document.querySelector("#npmbutton");
const blbut = document.querySelector("#blmbutton");
const slbut = document.querySelector("#slmbutton");
const glbut = document.querySelector("#glmbutton");

import { memberLevels } from "./member-levels.mjs";

function displayDetails(level) {
    mDets.innerHTML = "";
    mDets.innerHTML = `
        <button id="closeModal">X</button>
        <h3>${level.name}</h3>
        <p>${level.description}</p>
        <p>Price: $${level.cost}.00 / year</p>
        <p>Benefits offered: ${level.benefits}</p>`;
    mDets.showModal();

    closeModal.addEventListener("click", () => {
        mDets.close();
    });
}

timestamp.value = Date.now();

npbut.addEventListener("click", () => displayDetails(memberLevels.nonprofit));
blbut.addEventListener("click", () => displayDetails(memberLevels.bronze));
slbut.addEventListener("click", () => displayDetails(memberLevels.silver));
glbut.addEventListener("click", () => displayDetails(memberLevels.gold));