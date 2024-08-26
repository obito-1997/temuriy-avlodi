import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../../Components/Auth/Input";
import '../../../Assets/css/auth.css';
import bookimg from "../../../Assets/img/bookimg1.png";
import markimg from "../../../Assets/img/mark.png";


const Signup = () => {
  const navigate = useNavigate();
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [inputValue3, setInputValue3] = useState('');
  const [inputValue4, setInputValue4] = useState('');

  const handleChange1 = (event) => {
    setInputValue1(event.target.value);
  };
  const handleChange2 = (event) => {
    setInputValue2(event.target.value);
  };
  const handleChange3 = (event) => {
    setInputValue3(event.target.value);
  };
  const handleChange4 = (event) => {
    setInputValue4(event.target.value);
  };

  const handleSubmit = (e) => {
    console.log('Form data:', formData);
  };

  const hanldeSignupButton = () => {
    navigate('/login')
  }
  const hanldeToLoginButton = () => {
    navigate('/')
  }

  return (
    <div className="signup-page">
      <div className="signup-leftside">
        <div style={{ display: "flex", justifyItems: "center", alignItems: "center" }}>
          <img src={bookimg} alt="markimg" style={{ width: "180px" }}></img>
          <div className="signup-leftside-title">You can learn Everything.</div>
        </div>
        <div style={{ paddingTop: "15px" }}>
          <div className="check-item">
            <div className="check-icon">✔</div>
            <div className="check-title">E-commerce- Uzum market
            </div>
          </div>
        </div>
        <div>
          <div className="check-item">
            <div className="check-icon">✔</div>
            <div className="check-title"> Affiliate marketing</div>
          </div>
        </div>
        <div>
          <div className="check-item">
            <div className="check-icon">✔</div>
            <div className="check-title"> Trading crypto</div>
          </div>
        </div>
        <div>
          <div className="check-item">
            <div className="check-icon">✔</div>
            <div className="check-title">Freelancing</div>
          </div>
        </div>
        <div>
          <div className="check-item">
            <div className="check-icon">✔</div>
            <div className="check-title">Artificial Intelligence</div>
          </div>
        </div>
        <div>
          <div className="check-item">
            <div className="check-icon">✔</div>
            <div className="check-title">No coding programming</div>
          </div>
        </div>
        <div>
          <div className="check-item">
            <div className="check-icon">✔</div>
            <div className="check-title">Fitness</div>
          </div>
        </div>
      </div>
      <div className="signup-rightside">
        <div className="signup-rightside-container">
          <div style={{ display: "flex", justifyItems: "center", alignItems: "center" }}>
            <img src={markimg} alt="markimg" style={{ width: "180px" }}></img>
            <div className="signup-rightside-title">Join The Temury Avlodi</div>
          </div>
          <div className="check-item-1">
            <div className="check-icon-1">✔</div>
            <div className="check-title-1">Insert your personal informations
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <Input
              id="email"
              name="email"
              placeholder="examle@gmail.com"
              value={inputValue1}
              onChange={handleChange1}
            />
            <Input
              id="firstName"
              name="First Name"
              placeholder="First Name"
              value={inputValue2}
              onChange={handleChange2}
            />
            <Input
              id="lastName"
              name="Last Name"
              placeholder="Last Name"
              value={inputValue3}
              onChange={handleChange3}
            />
            <Input
              id="password"
              name="Password"
              placeholder="Password"
              value={inputValue4}
              onChange={handleChange4}
            />
            <div className="signup-buttons">
              <button type="submit" className="signup-button" onClick={hanldeSignupButton}>Sign Up</button>
              <button className="signup-button" onClick={hanldeToLoginButton}>To Main</button>
            </div>
          </form>
        </div>
      </div>

    </div>

  );

};

export default Signup;