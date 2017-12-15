import React from 'react';
import PropTypes from 'prop-types';
import './DetailHumidity.css';

const DetailHumidity = ({city}) => {
  return (
    <div className="detail-humidity__container">
      <i className="detail-humidity__icon"></i>
      <p className="detail-humidity__text">
        Humidity: {city.data.main.humidity} %
      </p>
      <p className="detail-humidity__text">
        Pressure: {city.data.main.pressure} hPa
      </p>
    </div>
  )
};

DetailHumidity.propTypes = {
  city: PropTypes.object.isRequired
};

export default DetailHumidity;
