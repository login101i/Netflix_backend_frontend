import { useState } from "react";
import "./listItem.scss";

import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import AddIcon from "@material-ui/icons/Add";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";

const ListItem = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});

  const trailer = "https://www.w3schools.com/html/mov_bbb.mp4";

  const index = 1;

  return (
    <>
      <div className="listItem" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} style={{ left: isHovered && index * 325 - 250 + index * 2.5 }}>
        <img src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
        {isHovered && (
          <>
            <video src={trailer} loop autoPlay={true} muted={true} />

            <div className="itemInfo">
              <div className="icons">
                <PlayArrowIcon className="icon" />
                <AddIcon className="icon" />
                <ThumbDownIcon className="icon" />
                <ThumbUpIcon className="icon" />
              </div>
              <div className="itemInfoTop">
                <span>90min</span>
                <div className="limit">12</div>
                <span>12122</span>
              </div>
              <div className="desc">desc sdfsdfsdfsdfsdfsdf.</div>
            </div>
            <div className="genre">genre</div>
          </>
        )}
      </div>
    </>
  );
};

export default ListItem;
