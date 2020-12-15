import React from "react";
import ReactDOM from "react-dom";
import "./css/calendar.css";
import "./css/dates.css";
import "./css/events.css";
import "./css/index.css";
import Calendar from "./Calendar";

ReactDOM.render(
  <React.StrictMode>
    <Calendar />
  </React.StrictMode>,
  document.getElementById("root")
);
