import React from 'react';
import './DetailSunrise.css';

const DetailSunrise = ({city}) => {

  const formatTime = (s) => {
    const date = new Date(s * 1000);
    const options = {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    };
    return date.toLocaleTimeString('en-US', options);
  };

  const sunrise = formatTime(city.data.sys.sunrise);
  const sunset = formatTime(city.data.sys.sunset);

  return (
    <div className="detail-sunrise__container">
      <i className="detail-sunrise__icon"></i>
      <p className="detail-sunrise__text">
        Sunrise: {sunrise}
      </p>
      <p className="detail-sunrise__text">
        Sunset: {sunset}
      </p>
    </div>
  )
};

export default DetailSunrise;
