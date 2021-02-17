import React, { useState, useEffect } from "react";
import axios from "axios";

const ACCESS_KEY = process.env.REACT_APP_API_KEY;

const Weather = ({ capital }) => {
  const [Temp, setTemp] = useState([]);
  const [icon, setIcon] = useState("");
  const [wind, setWind] = useState("");
  const [windDir, setWindDir] = useState("");

  const params = {
    access_key: ACCESS_KEY,
    query: { capital },
  };

  useEffect(() => {
    axios
      .get("http://api.weatherstack.com/current", { params })
      .then((response) => {
        setTemp(response.data.current.temperature);
        setIcon(response.data.current.weather_icons);
        setWind(response.data.current.wind_speed);
        setWindDir(response.data.current.wind_dir);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h3>Weather in {capital}</h3>
      <p>
        <b>temperature:</b> {Temp} Celcius
      </p>
      <img src={icon} />
      <p>
        <b>wind:</b> {wind} mph direction {windDir}
      </p>
    </div>
  );
};

export default Weather;
