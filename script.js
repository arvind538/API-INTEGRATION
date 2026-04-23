async function getWeather() {
    const city = document.getElementById("city").value;

    const apiKey = "fb454ecfd58c4cd8858103351261704";

    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    try {
        document.getElementById("result").innerHTML = "Loading...";

        const response = await fetch(url);
        const data = await response.json();

        console.log(data); // 👈 IMPORTANT

        if (data.error) {
            document.getElementById("result").innerHTML = "❌ City not found";
            return;
        }

        document.getElementById("result").innerHTML = `
            <h2>${data.location.name}</h2>
            <p>🌡️ Temp: ${data.current.temp_c} °C</p>
            <p>☁️ Weather: ${data.current.condition.text}</p>
            <p>💧 Humidity: ${data.current.humidity}%</p>
        `;
    } catch (error) {
        console.log(error); // 👈 IMPORTANT
        document.getElementById("result").innerHTML = "⚠️ Error fetching data";
    }
}