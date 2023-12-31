import React from 'react';
import { FaMapMarkerAlt, FaArrowUp } from 'react-icons/fa';
import '../styles/header.css';

const Header = (props) => {
  return (
    <div className="header-container">
      <div className="logo-name-button-container">
        <div className="logo-name-container">
          <h1 className="logo">
            <FaMapMarkerAlt />
          </h1>
          <h1 className="name">WeatherBuddy</h1>
        </div>
        <div>
          <button
            className="button-add-location"
            onClick={props.toggleAddComponent}
          >
            {/* If AddLocation component is visible(true) change button text to 'Close', otherwise(false) show 'Add Location'  */}
            {props.showAddComponent ? <FaArrowUp /> : 'Add Location'}
          </button>
        </div>
      </div>
      <p className="description">
        Get the weather from <span>anywhere</span> in the world by clicking on
        the map.
      </p>
    </div>
  );
};

export default Header;
