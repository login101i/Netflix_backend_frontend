import React from "react";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./listItem.scss";


import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
// import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

import axios from "axios";

const ListItem = ({ item, index, accessToken }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});
  // console.log("poniżej movie");

  const trailer = "https://www.w3schools.com/html/mov_bbb.mp4";

  // const index = 1;

  useEffect(() => {
    const getMovie = async () => {
      try {
        const getId = await axios.get("/admin/movie/" + item, {
          headers: {
            tokenes: accessToken,
          },
        });
        setMovie(getId.data.movie);
        console.log(getId.data.movie);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, [item]);

  return (
    <>
      <Link to={{ pathname: "/watch", movie: movie }}>
        <div className="listItem" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} style={{ left: isHovered && index * 325 - 250 + index * 2.5 }}>
          <img src={movie.img} alt="" />
          {isHovered && (
            <>
              <video src={movie.trailer} loop autoPlay={true} muted={true} />

              <div className="itemInfo">
                <div className="icons">
                  <PlayArrowIcon className="icon" />
                  <AddIcon className="icon" />
                  <ThumbDownIcon className="icon" />
                  <ThumbUpIcon className="icon" />
                </div>
                <div className="itemInfoTop">
                  <span>{movie.duration}</span>
                  <div className="limit">{item.limit}</div>
                  <span>{movie.year}</span>
                </div>
                <div className="desc">{movie.desc} .</div>
              </div>
              <div className="genre">{movie.genre}</div>
            </>
          )}
        </div>
      </Link>
    </>
  );
};

export default ListItem;
