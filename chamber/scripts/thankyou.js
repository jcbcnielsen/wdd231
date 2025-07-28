const details = new URLSearchParams(window.location.search);
const output = document.querySelector("#formDetails");

output.innerHTML += `
    <p><strong>Name:</strong> ${details.get("fname")} ${details.get("lname")}
    <p><strong>Email:</strong> ${details.get("email")}</p>
    <p><strong>Phone Number:</strong> ${details.get("phone")}</p>
    <p><strong>Organization:</strong> ${details.get("orgname")}</p>
    <p><strong>Form loaded at:</strong> ${new Date(Number(details.get("timestamp"))).toString()}</p>
`;