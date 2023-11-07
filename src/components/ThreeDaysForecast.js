import React from 'react';
import ForecastDay from './ForecastDay';
import '../styles/sevenDayForecast.css';

const ThreeDaysForecast = ({ sevenDayTemp, today }) => {
  // Filter the forecast data for the next three days
  const nextThreeDays = sevenDayTemp.slice(1, 4); // Skip the first day (today)

  return (
    <div className="seven-day-forecast-container">
      {nextThreeDays.map((forecast, index) => (
        <ForecastDay key={index} forecast={forecast} />
      ))}
    </div>
  );
};

export default ThreeDaysForecast;