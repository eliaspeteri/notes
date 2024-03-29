import React, { Component, useEffect, useState } from "react";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";
import {
    getDay,
    format,
    addMonths,
    subMonths,
    addYears,
    subYears,
} from "date-fns";
import Dates from "./Dates";
class Calendar extends Component {
    state = {
        today: new Date(),
        viewDate: new Date(),
    };
    handleClick = (move) => {
        if (move === "next") {
            console.log("clicked next");
            if (format(this.state.viewDate, "MM") === "12") {
                console.log("Previous month was December");
                this.setState({ viewDate: addYears(this.state.viewDate, 1) });
            }
            this.setState({
                viewDate: addMonths(this.state.viewDate, 1),
            });
        } else if (move === "previous") {
            console.log("clicked previous");
            if (format(this.state.viewDate, "MM") === "01") {
                console.log("Previous month was January");
                this.setState({ viewDate: subYears(this.state.viewDate, 1) });
            }
            this.setState({
                viewDate: subMonths(this.state.viewDate, 1),
            });
        } else if (move === "today") {
            console.log("clicked today");
            this.setState({ viewDate: this.state.today });
        }
    };

    parseWeekday = () => {
        const today = new Date();
        switch (getDay(today)) {
            case 0:
                return "Sunday";
            case 1:
                return "Monday";
            case 2:
                return "Tuesday";
            case 3:
                return "Wednesday";
            case 4:
                return "Thursday";
            case 5:
                return "Friday";
            case 6:
                return "Saturday";
            default:
                return "Unknown weekday";
        }
    };

    render() {
        const { viewDate } = this.state;
        console.log("rendered Calendar");

        return (
            <div id="calendar-container">
                <header>
                    <div id="clock">
                        {this.parseWeekday()}&nbsp;
                        <b>
                            <Clock />
                        </b>
                    </div>
                </header>
                <header>
                    <button
                        id="previous-month"
                        onClick={() => {
                            this.handleClick("previous");
                        }}
                    >
                        <IoArrowBackOutline size={20} color={"#646464"} />
                    </button>

                    <button
                        id="today-month"
                        onClick={() => this.handleClick("today")}
                    >
                        {" "}
                        <b id="month">
                            {`${format(viewDate, "MMMM")} ${format(
                                viewDate,
                                "yyyy"
                            )}`}{" "}
                        </b>
                    </button>

                    <button
                        id="next-month"
                        onClick={() => {
                            this.handleClick("next");
                        }}
                    >
                        <IoArrowForwardOutline size={20} color={"#646464"} />
                    </button>
                </header>
                <Dates date={viewDate} />
            </div>
        );
    }
}
export default Calendar;

const Clock = () => {
    const [time, setTime] = useState(format(new Date(), "p"));
    useEffect(() => {
        setInterval(() => setTime(format(new Date(), "p"), 60000));
    }, []);
    return time;
};
