import React, { useState } from "react";
import losnImage from "../assets/logo.jpeg";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

import "../styles/LoginPage.css";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [passwordshow, setPasswordShow] = useState(true);
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");

  const ontoggleshowPassword = () => {
    setPasswordShow(!passwordshow);
  };

  const onchanleFullname = (e) => {
    setFullname(e.target.value);
  };

  const onhandlePassword = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div className="losnlogin-page-container">
      <div className="losnlogin-header-container">
        <img src={losnImage} alt="company logo" className="company-logo" />
        <h1 className="name">Losning Technologies.</h1>
        <Link to="/register">
          <button className="losnlogin-register">Register</button>
        </Link>
      </div>
      <form className="losn-myform">
        <h1 className="login-header">Login</h1>
        <input
          type="name"
          placeholder="Enter your Full name"
          className="losn-user-name"
          value={fullname}
          onChange={onchanleFullname}
        />
        <div className="losn-password-container">
          <input
            type={passwordshow ? "password" : "text"}
            placeholder="Enter your password"
            className="losn-user-password"
            value={password}
            onChange={onhandlePassword}
          />
          {passwordshow ? (
            <IoMdEyeOff className="losn-eye" onClick={ontoggleshowPassword} />
          ) : (
            <IoMdEye className="losn-eye" onClick={ontoggleshowPassword} />
          )}
        </div>
        <button className="losn-user-login">
          <Link to="/" style={{ textDecoration: "none", color: "#0ef" }}>
            Login
          </Link>
        </button>
      </form>
    </div>
  );
};
export default LoginPage;
