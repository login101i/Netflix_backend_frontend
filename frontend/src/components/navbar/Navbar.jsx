import { useState } from "react";

import "./navbar.scss";

// import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

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
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="" />
          <span> Home Page</span>
          <span> Home Page</span>
          <span> Home Page</span>
          <span> Home Page</span>
          <span> Home Page</span>
        </div>
        <div className="right">
          {/* <PersonIcon className="icon" /> */}
          <SearchIcon className="icon" />
          <span>LOL</span>
          <NotificationsIcon className="icon" />
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
