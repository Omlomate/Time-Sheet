import React, { useState } from "react";
import Losninglogo from "../assets/logo.jpeg";
import { CgProfile } from "react-icons/cg";

import "../styles/HomeHeader.css";
import { Link } from "react-router-dom";

const HomeHeader = () => {
  const [profiledownVisible, setProfileVisible] = useState(false);

  return (
    <div className="lson-header">
      <div className="lson-logo-name-container">
        <Link to="/">
          <img src={Losninglogo} alt="logo" className="image" />
        </Link>

        <h1 className="losn-heading">Losning technologies.</h1>
        <div className="profile-pic-container">
          <CgProfile
            className="profile-pic"
            onClick={() => setProfileVisible(!profiledownVisible)}
          />
          <span className="hover-text">Profile Menu</span>
        </div>
      </div>
      <div className="losn-drop-down-bar">
        {profiledownVisible && (
          <div className="losn-dropdown">
            <Link to="/timesheet" className="profile-but">
              <button className="names">Time sheet</button>
            </Link>
            <button className="losn-name">Pay slip</button>
            <Link to="/profile" className="profile-but">
              <button className="names">Profile</button>
            </Link>
            <button className="losn-name">Logout</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeHeader;
