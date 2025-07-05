const year = document.querySelector("#currentYear");
const mod = document.querySelector("#lastModified");

const today = new Date();

year.textContent = today.getFullYear();
mod.textContent = `Last Modified: ${document.lastModified}`;