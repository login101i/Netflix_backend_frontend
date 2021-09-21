import "./watch.scss";
import BackspaceIcon from "@material-ui/icons/Backspace";

const Watch = () => {

  const trailer = "https://www.w3schools.com/html/mov_bbb.mp4";

  

  return (
    <div className="watch">
      <div className="back">
        <BackspaceIcon />
        <span>Back</span>
      </div>
      <video className="video" autoPlay={true} progress controls  muted={true} src={trailer}></video>
    </div>
  );
};

export default Watch;
