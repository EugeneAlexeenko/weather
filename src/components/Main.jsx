import React from 'react';
import { Link } from 'react-router-dom';

export default function WeatherDetail() {
  return (
    <div className="weather-detail">
      <Link to="/">to main page</Link>
      <h2>Main</h2>
    </div>
  );
}