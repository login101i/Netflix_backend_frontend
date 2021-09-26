import React from "react";

import { useRef, useState } from "react";

import "./list.scss";
import ListItem from "../listItem/ListItem";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
const List = ({ list, accessToken }) => {
  const listRef = useRef();
  const [slideNumber, setSlideNumber] = useState(0);
  const [isMoved, setIsMoved] = useState(0);
  const [clickLimit, setClickLimit] = useState(window.innerWidth / 230);

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 10 - clickLimit) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };

  console.log(list.content)

  return (
    <div className="Lcontainer">
      <div className="containerTitle">{list.title}</div>

      <div className="wrapper">
        <ChevronLeftIcon className="sliderIcon left" onClick={() => handleClick("left")} style={{ display: isMoved ? "block" : "none" }} />
        <div className="listContainer" ref={listRef}>
          {list.content.map((item, index) => (
            <ListItem item={item} index={index} key={index} accessToken={accessToken} />
          ))}
        </div>

        <ChevronRightIcon className="sliderIcon right" onClick={() => handleClick("right")} />
      </div>
    </div>
  );
};

export default List;
