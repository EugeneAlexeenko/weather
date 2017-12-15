import React from 'react';
import './DateInfo.css';

export default function DateInfo() {

  function getDate(){
    const dateNow = new Date();
    const timeOptions = {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    };
    const dayOptions = {
      weekday: 'long'
    };
    const dateOptions = {
      month: 'short',
      day: 'numeric'
    };

    return {
      day: dateNow.toLocaleDateString('en-US', dayOptions).toUpperCase(),
      date: dateNow.toLocaleDateString('en-US', dateOptions).toUpperCase(),
      time: dateNow.toLocaleTimeString('en-US', timeOptions).toLowerCase()
    }
  }

  return (
    <div className="date-info__container">
      <div className="date-info__item">
        {getDate().day}
      </div>
      <div className="date-info__item">
        {getDate().date}
      </div>
      <div className="date-info__item">
        {getDate().time}
      </div>
    </div>
  );
}


