export const weatherURL =
    "https://api.openweathermap.org/data/2.5/weather?lat=37.54&lon=-77.44&units=imperial&appid=6c1856f4aae67f1860fe69cb759068d7";
export const forecastURL =
    "https://api.openweathermap.org/data/2.5/forecast?lat=37.54&lon=-77.44&units=imperial&appid=6c1856f4aae67f1860fe69cb759068d7";

export async function fetchWeather(url, display) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayWeather(data, display);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

export function displayWeather(data, container) {
    const icon = document.createElement("img");
    icon.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    icon.setAttribute("alt", data.weather[0].description);
    icon.setAttribute("loading", "lazy");
    container.appendChild(icon);
    container.innerHTML += `<div class="weatherDetails">
                                <p>${data.main.temp} \u00b0F</p>
                                <p>${data.weather[0].description}</p>
                                <p>Humidity: ${data.main.humidity}%</p>
                            </div>`;
}

export async function fetchForecast(url, display) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayForecast(data, display);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

export function displayForecast(data, container) {
    console.table(data);
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const tomorrow = new Date(data.list[8].dt_txt);
    const dayAfter = new Date(data.list[16].dt_txt);
    container.innerHTML += `<p>Today: ${data.list[0].main.temp} \u00b0F</p>
                            <p>${dayNames[tomorrow.getDay()]}: ${data.list[8].main.temp} \u00b0F</p>
                            <p>${dayNames[dayAfter.getDay()]}: ${data.list[16].main.temp} \u00b0F</p>`;
}