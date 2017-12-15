import React from 'react';
import DateInfo from './DateInfo';
import './LocationInfo.css';

const LocationInfo = ({city}) => {
  return (
    <div className="location-info">

      <div className="location-info__city-container">
        <h2 className="location-info__city">
          {city.name}
        </h2>
        <h3 className="location-info__country">
          {city.country}
        </h3>
      </div>

      <DateInfo />

    </div>
  );
};

export default LocationInfo;

