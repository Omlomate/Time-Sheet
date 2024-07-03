import React, { useState } from "react";
import profi from "../assets/image.png";
import { FaIdCard } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { FaLaptopCode } from "react-icons/fa";
import HomeHeader from "../components/HomeHeader";

import "../styles/Profile.css";
const Profile = () => {
  const [profileUserName, setProfileUserName] = useState("Chandu g");
  return (
    <div className="profile-container-min">
      <div className="profile-container-header-container">
        <HomeHeader />
      </div>
      <div className="profile-container">
        <div className="losining-logo--container"></div>
        <div className="profile-info">
          <img src={profi} alt="profile image" className="profile-img" />
          <div className="profile-info-items-container">
            <h1 className="profile-name">{profileUserName}</h1>
            <div className="profile-iocn-details">
              <FaLaptopCode className="profile-iocns" />
              <h3 className="profile-designation">Frontend Developer</h3>
            </div>
            <div className="profile-iocn-details">
              <FaIdCard className="profile-iocns" />
              <p className="profile-id">123456789</p>
            </div>
            <div className="profile-iocn-details">
              <MdAlternateEmail className="profile-iocns" />
              <p className="profile-id">chandu@gmail.com</p>
            </div>
            <div className="profile-iocn-details">
              <IoCallOutline className="profile-iocns" />
              <p className="profile-id">+91 9876543210</p>
            </div>
            <button className="profile-update-btn">Update Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
