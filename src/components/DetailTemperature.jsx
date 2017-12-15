import React from 'react';
import PropTypes from 'prop-types';
import './DetailTemperature.css';

const DetailTemperature = ({city}) => {

  const weatherIcon = (city.data.weather[0].icon) ?
    city.data.weather[0].icon :
    `default-weather`;

  const weatherIconUrl = process.env.PUBLIC_URL +
    `/img/icons_weather/icon_${weatherIcon}.svg`;

  const weatherDescription = (city.data.weather[0].description) ?
    city.data.weather[0].description :
    ``;

  const temperature = Math.round(city.data.main.temp);
  return (
    <div className="detail-temperature__container">
      <div className="detail-temperature__number">
        {temperature}
      </div>
      <div className="detail-temperature__extra">
        <i
          className="detail-temperature__icon"
          style={{backgroundImage: `url(${weatherIconUrl})`}}
        >
        </i>
        <p className="detail-temperature__description">
          {weatherDescription}
        </p>
      </div>
    </div>
  )
};

DetailTemperature.propTypes = {
  city: PropTypes.object.isRequired
};

export default DetailTemperature;

