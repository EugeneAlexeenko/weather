import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="weather-detail">
      <Link to="/">to main page</Link>
      <h2>Page is not found</h2>
    </div>
  );
}