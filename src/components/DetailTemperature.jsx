import React from 'react';
import './DetailTemperature.css';

const DetailTemperature = ({city}) => {

  const weatherIcon = (city.data.weather[0].icon) ?
    city.data.weather[0].icon :
    `default-weather.svg`;

  const weatherIconUrl = process.env.PUBLIC_URL +
    `/img/icons_weather/icon_${weatherIcon}.svg`;

  const weatherDescription = (city.data.weather[0].description) ?
    city.data.weather[0].description :
    ``;

  const temperature = Math.round(city.data.main.temp);
  return (
    <div className="temperature__container">
      <div className="temperature__number">
        {temperature}
      </div>
      <div className="temperature__extra">
        <i
          className="temperature__icon"
          style={{backgroundImage: `url(${weatherIconUrl})`}}
        >
        </i>
        <p className="temperature__description">
          {weatherDescription}
        </p>
      </div>
    </div>
  )
};

export default DetailTemperature;

