import React from "react";

import "../styles/coming-soon.scss";
import BellIcon from "../assets/bell.svg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ComingSoon: React.FC = () => {
  return (
    <div className="coming-soon">
      <Navbar />
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
      <Footer />
    </div>
  );
};

export default ComingSoon;
