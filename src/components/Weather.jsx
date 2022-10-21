import React, { useState } from "react";
import axios from "axios";

// css
import "./Weather.css";

const Weather = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  // api url

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=3f9b1d4b55e6eea8b1928636697cafbd`;

  const searchLocation = (e) => {
    if (e.key === "Enter") {
      axios.get(url).then((res) => {
        setData(res.data);
        console.log(res.data);
      });
      setLocation("");
    }
  };

  return (
    <div className="app">
      <div className="search">
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="enter location"
          className="text-black input"
          onKeyPress={searchLocation}
        />
      </div>

      <div className="container mx-auto">
        <div className="top">
          <div className="location">
            <p className="text-2xl">{data.name}</p>
          </div>

          <div className="temperature">
            {data.main ? (
              <h1 className="text-8xl">{data.main.temp.toFixed()}°F</h1>
            ) : null}
          </div>

          <div className="desc">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name !== undefined && (
          <div className="bottom">
            <div className="feels">
            {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°F</p> : null}
              <p>feels like</p>
            </div>

            <div className="humidity">
            {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
              <p>humidity</p>
            </div>

            <div className="wind">
            {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
              <p>wind speed</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
