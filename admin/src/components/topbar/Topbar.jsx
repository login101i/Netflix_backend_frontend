import React from "react";
import "./topbar.css";

import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import SettingsIcon from "@material-ui/icons/Settings";
import LanguageIcon from "@material-ui/icons/Language";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topleft">
          <span className="logo">Your Admin</span>
        </div>
        <div className="topRight">
          <LanguageIcon className="icon" />
          <SettingsIcon className="icon" />
          <div className="topbarIconContainer">
            <NotificationsNoneIcon className="icon" />
            <span className="topIconBadge">2</span>
          </div>
          <img src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="avatar" />
        </div>
      </div>
    </div>
  );
}
