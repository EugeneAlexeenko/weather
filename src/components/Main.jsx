import React from 'react';
import { Link } from 'react-router-dom';
import WeatherPreview from './WeatherPreview';

export default function WeatherDetail(props) {
  console.log(props);
  //const list = props.cities.map()
  return (
    <div className="weather-detail">
      <Link to="/">to main page</Link>
      <h2>Main</h2>
      <WeatherPreview />
      <WeatherPreview />
    </div>
  );
}