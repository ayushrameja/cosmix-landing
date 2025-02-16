import React from "react";
import "../styles/coming-soon.scss";
import BellIcon from "../assets/bell.svg";
import BackgroundImage from "../components/BackgroundImage";

const ComingSoon: React.FC = () => {
  return (
    <div className="coming-soon">
      <BackgroundImage />
      <div className="content">
        <h1>Cosmix</h1>
        <p>
          A modular, configurable background library for creative, cosmic
          visuals.
        </p>
        <div className="subscribe-form">
          <input type="email" placeholder="Subscribe for updates!" />
          <button>
            <img src={BellIcon} alt="Bell Icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
