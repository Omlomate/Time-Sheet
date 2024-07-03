import React, { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import logo from "../assets/logo.jpeg";
import name from "../assets/company_logo.jpeg";

import "../styles/RegisterPage.css";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const [passwordShow, setPasswordShow] = useState(true);
  const [confirmPasswordShow, setConfirmPasswordShow] = useState(true);
  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerEmployeeID, setRegisterEmployeeID] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerConfirmPassword, setRegisterConfimPassword] = useState("");

  const toggleShowPassword = () => {
    setPasswordShow(!passwordShow);
  };

  const toggleShowConfirmPassword = () => {
    setConfirmPasswordShow(!confirmPasswordShow);
  };

  const heandleName = (e) => {
    setRegisterName(e.target.value);
  };

  const heandleEmail = (e) => {
    setRegisterEmail(e.target.value);
  };
  const heandleEmployeeId = (e) => {
    setRegisterEmployeeID(e.target.value);
  };
  const heandlePassword = (e) => {
    setRegisterPassword(e.target.value);
  };
  const heandleConfimPass = (e) => {
    setRegisterConfimPassword(e.target.value);
  };

  return (
    <div className="register-form">
      <div className="header--container">
        <img src={logo} alt="logo" className="logo" />
        <h1 className="name">Losning Technologies.</h1>
        <Link to="/login">
          <button className="login-btn">Login</button>
        </Link>
      </div>

      <form className="form">
        <h1 className="register-heading">Register</h1>

        <input
          type="name"
          placeholder="Enter your full name"
          className="input-field"
          value={registerName}
          onChange={heandleName}
        />

        <input
          type="email"
          placeholder="Enter your email"
          className="input-field"
          value={registerEmail}
          onChange={heandleEmail}
        />
        <input
          type="text"
          placeholder="Enter your Employee Id"
          className="input-field"
          value={registerEmployeeID}
          onChange={heandleEmployeeId}
        />
        <div className="password-show">
          <input
            type={passwordShow ? "password" : "text"}
            placeholder="Enter your password"
            className="input-field-pass"
            value={registerPassword}
            onChange={heandlePassword}
          />
          {passwordShow ? (
            <IoMdEyeOff className="eye-icon" onClick={toggleShowPassword} />
          ) : (
            <IoMdEye className="eye-icon" onClick={toggleShowPassword} />
          )}
        </div>
        <div className="password-show">
          <input
            type={confirmPasswordShow ? "password" : "text"}
            placeholder="Enter your confirm password"
            className="input-field-pass"
            value={registerConfirmPassword}
            onChange={heandleConfimPass}
          />
          {confirmPasswordShow ? (
            <IoMdEyeOff
              className="eye-icon"
              onClick={toggleShowConfirmPassword}
            />
          ) : (
            <IoMdEye className="eye-icon" onClick={toggleShowConfirmPassword} />
          )}
        </div>
        <button type="submit" className="signup-btn">
          Register
        </button>
      </form>
    </div>
  );
};
export default RegisterPage;
