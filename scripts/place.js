document.getElementById("currentyear").textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent = "Last modified: " + document.lastModified;

const tempCelsius = 27;
const windSpeedKmh = 10;

function calculateWindChill(temp, windSpeed) {
    if (temp <= 10 && windSpeed > 4.8) {
        return Math.round(13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16));
    }
    return "N/A";
}

const windChill = calculateWindChill(tempCelsius, windSpeedKmh);
document.getElementById("wind-chill").textContent = windChill === "N/A" ? "N/A" : `${windChill}°C`;