import React, { useState } from 'react';
import './LoginPopup.css';
import menu from '../../assets/cross-icon.png';

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState('Login');

  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className="login-popup-title"> 
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={menu} alt="Close" />
        </div>
        <div className="login-popup-inputs">
          {currState === "Sign Up" && (
            <>
              <input type="text" placeholder='Your Names' required />
              <input type="text" placeholder='Your Phone Number' required />
              <input type="text" placeholder='Your Skills' required />
              <select required>
                <option >Availability</option>
                <option value="25 hours">25 hours</option>
                <option value="30 hours">30 hours</option>
                <option value="45 hours">45 hours</option>
                <option value="over 60 hours">Over 60 hours</option>
              </select>
              <input type="text" placeholder='Your Interests' required />
              <input type="text" placeholder='Your Location' required />
            </>
          )}
          <input type="email" placeholder='Your Email' required />
          <input type="password" placeholder='Your Password' required />
        </div>
        <button>{currState === "Sign Up" ? "Create account" : "Login"}</button>
        <div className='login-popup-condition'>
          <input type="checkbox" required />
          <p>
            By clicking the button, you are agreeing to our <span>Terms and Services</span>
          </p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account? <span onClick={() => setCurrState("Login")}>Login</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
