import React, { useState } from "react";
import Dashboard from "../Dashboard/Dashboard";

const Forecast = () => {
  let [weatherData, setWeatherData] = useState({});
  let [location, setLocation] = useState("");
  const uriEncodedLocation = encodeURIComponent(location);

  //Fetches weather data by city name
  function getForecast(e) {
    e.preventDefault();
    const unit = "imperial";
    fetch(
      `https://rapidapi.p.rapidapi.com/weather?q=${uriEncodedLocation}&units=${unit}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
          "x-rapidapi-key":
            "ddb9a1bba4msh4585740f983abe3p1abb80jsn9af0fb2cd7e6",
        },
      }
    )
      .then((response) => response.json())
      .then((response) => {
          setWeatherData(response);
      })

  }

  return (
    <div class="container">
      <form onSubmit={getForecast}>
        <input
          type="text"
          placeholder="Enter City"
          maxLength="50"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button type="submit">Get Forecast</button>
          {weatherData.cod === 200 ? <Dashboard  weatherData={weatherData} /> :  null}
          {weatherData.cod === "404" ? <output name="result" htmlFor="a b">Invalid Input!</output> : null}

      </form>

    </div>
  );
};
export default Forecast;
