import React, { useState } from "react";
import Timer from "./Components/Timer";
import "./App.css";
import Header from "./Components/Header";

function App() {
  const [activeTab, setActiveTab] = useState("pomodoro");
  const activeTabHandler = (tab) => {
    setActiveTab(tab);
  };
  let timerMaxValue;

  switch (activeTab) {
    case "pomodoro":
      timerMaxValue = 25 * 60; // 25 mintues pomodoro time
      break;
    case "long-break":
      timerMaxValue = 30 * 60; // 30 mintues long break
      break;
    default:
      timerMaxValue = 5 * 60; // 5 mintues short break
      break;
  }

  return (
    <div className="container">
      <Header onClickTabHandler={activeTabHandler} currTab={activeTab} />
      <Timer maxValue={timerMaxValue} />
    </div>
  );
}

export default App;
