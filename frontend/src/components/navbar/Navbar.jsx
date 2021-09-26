import React from "react";

import { useState } from "react";

import "./navbar.scss";
import { Link } from "react-router-dom";


// import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
// import SearchIcon from "@mui/icons-material/Search";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset > 20 ? true : false);
    return () => (window.onscroll = null);
  };

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
     
          <Link to="/" className="link">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="" />
          </Link>
          <Link to="/" className="link">
            <span className="navbarmainLinks">Home Page</span>
          </Link>
          <Link to="/series" className="link">
            <span className="navbarmainLinks">Series</span>
          </Link>
          <Link to="/movies" className="link">
            <span className="navbarmainLinks">Movies</span>
          </Link>
          <Link to="/new" className="link">
            <span className="navbarmainLinks">New and Popular</span>
          </Link>

          <Link to="/favourites" className="link">
            <span>My list</span>
          </Link>
        </div>
        <div className="right">
          {/* <PersonIcon className="icon" /> */}
          <SearchIcon className="icon" />
          <span></span>
          <CircleNotificationsIcon className="icon" />
          <img src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
          <div className="profile">
            <ExpandMoreIcon className="icon" />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
