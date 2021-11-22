import React from "react";
import styles from "./Header.module.css";

const Header = ({ onClickTabHandler, currTab }) => {
  return (
    <ul className={styles.container}>
      <li>
        <button
          onClick={() => {
            onClickTabHandler("pomodoro");
          }}
          className={currTab === "pomodoro" ? `${styles.active}` : ""}
        >
          Pomodoro
        </button>
      </li>
      <li>
        <button
          onClick={() => {
            onClickTabHandler("short-break");
          }}
          className={currTab === "short-break" ? `${styles.active}` : ""}
        >
          Short Break
        </button>
      </li>
      <li>
        <button
          onClick={() => {
            onClickTabHandler("long-break");
          }}
          className={currTab === "long-break" ? `${styles.active}` : ""}
        >
          Long Break
        </button>
      </li>
    </ul>
  );
};

export default Header;
