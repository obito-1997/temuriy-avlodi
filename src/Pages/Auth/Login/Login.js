import React, { useState } from "react";
import Input from "../../../Components/Auth/Input";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const hanldeLoginButton = () => {
    navigate('/login')
  }
  const hanldeToLoginButton = () => {
    navigate('/')
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    // You can replace this with an actual authentication request
    console.log('Logging in with:', { email, password });
    setError('');

    // For demonstration, let's assume login is successful
    alert('Login successful!');
  };

  return (
    <div className="login-page">
      <div style={{height:"100vh", display: "flex"}}>
        <div className="login-container">
          <div className="login-title">Log In</div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <Input
                size="300"
                id="email"
                name="email"
                placeholder="examle@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <Input
                size="300"
                id="password"
                name="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <p className="error">{error}</p>}
            <div className="signup-buttons">
              <button type="submit" className="signup-button" onClick={hanldeLoginButton}>Log In</button>
              <button className="signup-button" onClick={hanldeToLoginButton}>Back </button>
            </div>
          </form>
        </div>
      </div>

    </div>

  );
};

export default Login;

