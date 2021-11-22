import React, { useState, useEffect } from "react";
import styles from "./Timer.module.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import StartButton from "./StartButton";

let interval;

const Timer = ({ maxValue }) => {
  const [count, setCount] = useState(1);
  const [triggerCounter, setTriggerCounter] = useState(false);

  useEffect(() => {
    if (triggerCounter) {
      interval = setInterval(() => {
        if (count < maxValue) {
          setCount((prevValue) => prevValue + 1);
          document.querySelector("#timer").play();
        }
      }, 1000);
    }
    return () => {
      clearInterval(interval);
      document.querySelector("#timer").pause();
    };
  }, [triggerCounter]);

  useEffect(() => {
    if (count === maxValue) {
      clearInterval(interval);
      document.querySelector("#beep").play();
      document.querySelector("#timer").pause();
      setTriggerCounter(false);
    }
  }, [count]);
  useEffect(() => {
    setCount(0);
    setTriggerCounter(false);
  }, [maxValue]);

  const triggerCounterHandler = (countStart) => {
    setTriggerCounter(countStart);
  };
  return (
    <div className={styles.container}>
      <audio controls id="beep" style={{ display: "none" }}>
        <source src="../assets/beep.wav" type="audio/wav" />
      </audio>
      <audio controls id="timer" style={{ display: "none" }}>
        <source src="../assets/timer.wav" type="audio/wav" />
      </audio>
      <div className={styles.timerContainer}>
        <CircularProgressbar
          value={count}
          maxValue={maxValue}
          text={`${Math.trunc(count / 60)} : ${count % 60}`}
          strokeWidth={3}
          background
          backgroundPadding={7}
          styles={buildStyles({
            backgroundColor: "#1e2140",
            textColor: "#FF7276",
            pathColor: "#FF7276",
            trailColor: "transparent",
          })}
        />
      </div>
      <StartButton
        counterHandler={triggerCounter}
        onClickHandler={triggerCounterHandler}
      />
      {/* <button onClick={() => triggerCounterHandler(true)}>Start</button>
      <button onClick={() => triggerCounterHandler(false)}>Pause</button> */}
    </div>
  );
};

export default Timer;
