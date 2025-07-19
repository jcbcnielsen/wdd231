import { weatherURL, fetchWeather, displayWeather, forecastURL, fetchForecast, displayForecast } from "./weather.mjs";
import { membersURL, fetchMembers, getRandomMembers, displaySpotlight } from "./spotlight.mjs";

const weather = document.querySelector("#weather");
const forecast = document.querySelector("#forecast");
const spotlight = document.querySelector("#spotlight");

fetchWeather(weatherURL, weather);
fetchForecast(forecastURL, forecast);
fetchMembers(membersURL, spotlight);