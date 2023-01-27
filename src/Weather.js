import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Enter a city" onChange={updateSearch} />
      <input type="submit" value="Search" />
    </form>
  );
  let [city, setCity] = useState("");
  let [data, setData] = useState(false);
  let [temperature, setTemperature] = useState();
  let [description, setDescription] = useState();
  let [humidity, setHumidity] = useState();
  let [wind, setWind] = useState();
  let [icon, setIcon] = useState();

  function showTemperature(response) {
    setData(true);
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1b9675d56ed735268cf9edd8bf77521f&units=metric`;
    axios.get(url).then(showTemperature);
  }

  function updateSearch(event) {
    setCity(event.target.value);
  }

  if (data) {
    return (
      <div>
        <div>{form}</div>
        <br />
        <h2> {city} </h2>
        <ul>
          {" "}
          <li>Temperature is {Math.round(temperature)}°C</li>
          <li>Description is {description} </li>
          <li>Humidity is {Math.round(humidity)}%</li>
          <li>Wind is {Math.round(wind)}km/h</li>
          <li>
            <img src={icon} alt={description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
