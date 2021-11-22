import React from "react";
import PauseSvg from "../assets/pause.svg";
import PlaySvg from "../assets/play.svg";

const StartButton = (props) => {
  return (
    <div>
      {props.counterHandler === true ? (
        <img
          src={PauseSvg}
          style={{ width: "50px" }}
          onClick={() => props.onClickHandler(false)}
          alt="pause"
        />
      ) : (
        <img
          src={PlaySvg}
          style={{ width: "50px" }}
          onClick={() => props.onClickHandler(true)}
          alt="pause"
        />
      )}
    </div>
  );
};

export default StartButton;
