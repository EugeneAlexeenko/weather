import React from 'react';
import './DetailWind.css';

const DetailWind = ({city}) => {

  const degToCompass = (num) => {
    const value = Math.floor((num / 22.5) + 0.5);
    const arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
    return arr[(value % 16)];
  };

  const windSpeed = Math.round(city.data.wind.speed);
  const windDirection = degToCompass(city.data.wind.deg);

  return (
    <div>
      <div className="wind__container">
        <div className="wind__speed">
          {windSpeed}
          <span
            className="wind__speed-dimension"
          >
            m/s
          </span>
        </div>
        <i className="wind__icon"></i>
      </div>

      <p className="wind__direction">
      Direction: {windDirection}
      </p>
    </div>
  )
};

export default DetailWind;
