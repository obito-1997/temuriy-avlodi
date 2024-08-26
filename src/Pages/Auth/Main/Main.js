import React from "react";
import '../../../Assets/css/auth.css';
import { useNavigate } from "react-router-dom";


const Main = () => {
  const navigate =  useNavigate();
  const hanldeLoginButton = () => {
    navigate('/login')
  }
  const hanldeSignupButton = () => {
    navigate('/signup')
  }
  return (
    <div>
      <div className="container">
        <div className="button-container">
          <button className="signup-button" onClick={hanldeSignupButton}>I don't have an account</button>
          <button className="login-button" onClick={hanldeLoginButton}>LOG IN</button>
        </div>
      </div>
    </div>
  );

};

export default Main;