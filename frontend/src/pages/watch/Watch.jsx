import React from "react";
import {Link, useLocation} from 'react-router-dom'

import "./watch.scss";
import BackspaceIcon from "@mui/icons-material/Backspace";

const Watch = () => {
  const trailer = "https://www.w3schools.com/html/mov_bbb.mp4";
  const location=useLocation()
  const movie=location.movie
  console.log(movie)

  return (
    <div className="watch">
      <Link to='/'>
      <div className="back">
        <BackspaceIcon />
        <span>Back</span>
      </div>
      </Link>
      <video className="video" autoPlay={true} progress controls muted={true} src={movie.trailer}></video>
    </div>
  );
};

export default Watch;
