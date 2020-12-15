import React, { Component } from "react";
import Dates from "./Dates";

const initialize = {
  year: "2021",
  startWeekday: "Friday",
  january: 31,
  february: 28,
  march: 31,
  april: 30,
  may: 31,
  june: 30,
  july: 31,
  august: 31,
  september: 30,
  october: 31,
  november: 30,
  december: 31,
};

class Calendar extends Component {
  state = {
    currentYear: initialize,
    viewMonth: "January",
  };
  render() {
    const { currentYear, viewMonth } = this.state;

    if (viewMonth === "January")
      return (
        <React.Fragment>
          <Dates days={currentYear.january} />
        </React.Fragment>
      );
  }
}

export default Calendar;
