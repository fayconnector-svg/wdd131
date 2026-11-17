// 1. Dynamic Footer Dates
const currentYearSpan = document.querySelector("#currentyear");
const lastModifiedParagraph = document.querySelector("#lastModified");

const today = new Date();
currentYearSpan.textContent = today.getFullYear();
lastModifiedParagraph.textContent = `Last Modification: ${document.lastModified}`;

// 2. Wind Chill Calculation
// Static values matching HTML content
const temperature = 30; // °C
const windSpeed = 10;   // km/h

// Function to calculate wind chill (Metric Formula)
// Returns wind chill in one line of code
const calculateWindChill = (temp, speed) => 
    (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(1);

// Conditions for metric units: temperature <= 10 °C and wind speed > 4.8 km/h
const windChillElement = document.querySelector("#windchill");

if (temperature <= 10 && windSpeed > 4.8) {
    windChillElement.textContent = `${calculateWindChill(temperature, windSpeed)} °C`;
} else {
    windChillElement.textContent = "N/A";
}