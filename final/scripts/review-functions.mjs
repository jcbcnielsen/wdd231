import { firstName, lastName, email, gameSel, dateSel, teamCheck, teamName, teamMembers } from "./signup-form.mjs";
import { gamesArray } from "./form-functions.mjs";

// Declare remaining form objects
const phone = document.getElementById("phone");
const reviewDial = document.getElementById("review");

function checkAllValidity() {
    // Check if all the generally required inputs are valid
    if (firstName.checkValidity() == true &&
        lastName.checkValidity() == true &&
        email.checkValidity() == true &&
        gameSel.checkValidity() == true &&
        dateSel.checkValidity() == true) {

        // If all generally required inputs are valid, check if the user is on a team
        if (teamCheck.checked == true) {

            // If the user is on a team, check if the team inputs are valid
            if (teamName.checkValidity() == true &&
                teamMembers.checkValidity() == true) {

                // If all generally required and team inputs are valid, return true
                return true;
            } else {
                // If the user is on a team and either of the team inputs are invalid, return false
                return false;
            }
        } else {
            // If the generally required inputs are valid and the user is not on a team, return true
            return true;
        }
    } else {
        // If any of the gererally required inputs are invalid, return false
        return false;
    }
}

export function displayReview() {
    if (checkAllValidity() == true) {
        // If all required fields are valid, display form information in the modal
        // Display the user's name and email
        reviewDial.innerHTML = `
            <h2>Review Your Sign-Up Info</h2>
            <p>First Name: ${firstName.value}</p>
            <p>Last Name: ${lastName.value}</p>
            <p>Email: ${email.value}</p>`;
        
        // If the user included a phone number, display that
        if (phone.value != "") {
            reviewDial.innerHTML += `<p>Phone: ${phone.value}</p>`;
        }

        // Display the game the user wishes to play
        gamesArray.forEach((game) => {
            if (gameSel.value == game.short) {
                reviewDial.innerHTML += `<p>Game to Play: ${game.name}</p>`;
            }
        });

        // Display the date the user wishes to play on
        const dateObj = new Date(dateSel.value);
        const dateStr = dateObj.toLocaleDateString("en-US",
            { weekday: "short", year: "numeric", month: "short", day: "numeric" });
        reviewDial.innerHTML += `<p>Date to Play: ${dateStr}</p>`;
        
        // Check if the user is playing on a team
        if (teamCheck.checked == true) {
            // If the user is playing on a team, display the team information
            reviewDial.innerHTML += `
                <p>Team Name: ${teamName.value}</p>
                <p>Team Members ${teamMembers.value}</p>`;
        } else {
            // If the user is not playing on a team, display that
            reviewDial.innerHTML += `<p>-- Playing Solo --</p>`;
        }

        // Display the final prompt and buttons, then show the modal
        reviewDial.innerHTML += `
            <h3>Does this look correct?</h3>
            <div class="buttonHolder">
            <button id="submitButton" type="submit">Yes, Sign Me Up!</button>
            <button id="closeModal" type="button">No, Bring Me Back</button>
            </div>`;
        reviewDial.showModal();

        // Add the close button's functionality
        closeModal.addEventListener("click", () => {
            reviewDial.close();
        });
    } else {
        // If any required fields are not valid, request the user complete the form
        reviewDial.innerHTML = `
            <h3>Please fill out all the required fields in the sign-up form.</h3>
            <button id="closeModal" type="button">OK</button>`;
        reviewDial.showModal();

        // Add the close button's functionality
        closeModal.addEventListener("click", () => {
            reviewDial.close();
        });
    }
}