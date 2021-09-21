import { useState, useRef, useContext } from "react";
import "./login.scss";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="" />
        </div>

        <div className="container">
          <h1>Unlimited films</h1>
          <h2>Watch anywhere</h2>
          <span>More info on our site</span>
        </div>

        <div className="input">
          <input type="email" placeholder="email address" ref={emailRef} />
        </div>
        <div className="input">
          <h1>Sign In</h1>
          <input type="email" placeholder="Email or phone number" onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          <button className="loginButton" onClick={handleLogin}>
            Sign In
          </button>
          <span className="new">
            New to Netflix? <strong>Sign up here</strong>{" "}
          </span>
        </div>
      </div>
    </div>
  );
}
