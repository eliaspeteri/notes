import React, { Component } from "react";
import { IoIosMenu } from "react-icons/io";

export default class DropdownMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: true,
      months: [...this.props.monthsNamed],
    };
  }

  //action = enter/leave
  handleHovering = (action) => {
    if (action === "enter") {
      this.setState({ show: true });
    } else {
      this.setState({ show: true });
    }
  };

  render() {
    const reformatIndex = [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
    ];

    console.log("rendered DropdownMenu");

    return (
      <div
        id="dropdown"
        onMouseEnter={(e) => this.handleHovering("enter", e)}
        onMouseLeave={(e) => this.handleHovering("leave", e)}
      >
        <IoIosMenu size={35} color={"#646464"} />
        {this.state.show ? (
          <div className="dropdown-content" title="Months">
            <p onClick={() => this.props.selectFromDropDown("today")}>Today</p>
            {this.state.months.map((item, i) => (
              <p
                key={i}
                onClick={() => this.props.selectFromDropDown(reformatIndex[i])}
              >
                {item}
              </p>
            ))}
          </div>
        ) : null}
      </div>
    );
  }
}
