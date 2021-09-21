import React from "react";
import { useState, useRef } from "react";
import "./register.scss";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };

  const handleFinish = (e) => {
    e.preventDefault();
    setPassword(passwordRef.current.value);
    setUsername(usernameRef.current.value);
  };
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="" />
          <button className="loginButton">Sign In</button>
        </div>

        <div className="container">
          <h1>Unlimited films</h1>
          <h2>Watch anywhere</h2>
          <span>More info on our site</span>
        </div>

        {!email ? (
          <div className="input">
            <input type="email" placeholder="email address" ref={emailRef} />
            <button className="registerButton" onClick={() => handleStart()}>
              Register now
            </button>
          </div>
        ) : (
          <div className="input">
            <input type="username" placeholder="username" ref={usernameRef} />
            <input type="password" placeholder="password" ref={passwordRef} />
            <button className="registerButton" onClick={() => handleFinish()}>
              Go for it!
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;
