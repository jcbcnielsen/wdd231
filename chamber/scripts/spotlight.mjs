export const membersURL = "https://jcbcnielsen.github.io/wdd231/chamber/data/members.json";

export async function fetchMembers(url, display) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displaySpotlight(data.members, display);
        } else {
            throw Error(await response.text());
        }
    } catch(error) {
        console.log(error);
    }
}

export function getRandomMembers(members) {
    let i1 = members.length;
    let i2 = i1;
    let i3 = i1;
    i1 = Math.floor(Math.random() * members.length);
    do {
        i2 = Math.floor(Math.random() * members.length);
    } while (i2 == i1);
    do {
        i3 = Math.floor(Math.random() * members.length);
    } while (i3 == i1 || i3 == i2);
    return [members[i1], members[i2], members[i3]];
}

export function displaySpotlight(members, container) {
    const chosenMembers = getRandomMembers(members.filter((member) => member.level > 1));
    chosenMembers.forEach((member) => {
        let textLevel = "";
        if (member.level == 2) {
            textLevel = "Silver";
        } else if (member.level == 3) {
            textLevel = "Gold";
        }
        container.innerHTML += `<div class="member">
                                    <h2>${member.name}</h2>
                                    <img src="${member.image}} alt="${member.name} logo" loading="lazy">
                                    <div class="memberDetails">
                                        <p>Address: ${member.address}</p>
                                        <p>Phone: ${member.phone}</p>
                                        <p>Website: <a href="${member.url}">${member.url}</a></p>
                                        <p>Membership Level: ${textLevel}</p>
                                    </div>
                                </div>`;
    });
}