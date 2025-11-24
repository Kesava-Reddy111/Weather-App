import React, { useState } from "react";

function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    const res = await fetch(`http://localhost:8000/weather/${city}`);
    const data = await res.json();
    setWeather(data);
  };

  return (
    <div style={{ textAlign:"center", marginTop:"50px" }}>
      <h2>Weather App</h2>
      <input value={city} onChange={e=>setCity(e.target.value)} placeholder="Enter city"/>
      <button onClick={getWeather}>Search</button>
      {weather && !weather.error && (
        <div>
          <h3>{weather.city}</h3>
          <p>Temperature: {weather.temperature}°C</p>
          <p>Humidity: {weather.humidity}%</p>
          <p>Wind: {weather.wind} m/s</p>
          <p>{weather.description}</p>
        </div>
      )}
      {weather?.error && <p>City not found</p>}
    </div>
  );
}
export default Weather;
