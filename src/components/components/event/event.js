import "./event.scss";

import React from "react";
import { shortDate } from "./../../../utils/dates";

import { Calendar as CalendarIcon } from "react-feather";

// Wrapper for events.
export default class Event extends React.PureComponent {
  render() {
    let classes = ["event"];
    const now = Math.round(new Date().getTime() / 1000);
    const closingDate = Math.max(
      this.props.event.startDate,
      this.props.event.endDate
    );
    closingDate < now && classes.push("is-past-event");
    const startDate = this.props.event.startDate && (
      <span className="event__date-start">
        {shortDate(this.props.event.startDate)}
      </span>
    );
    const endDate = this.props.event.endDate &&
      this.props.event.endDate !== this.props.event.startDate && (
        <span className="event__date-end">
          {shortDate(this.props.event.endDate)}
        </span>
      );
    return (
      <div className={classes.join(" ")}>
        <div className="event__icon">
          <CalendarIcon size={20} />
        </div>
        <div className="event__text">
          <div className="event__main">
            <span className="event__date">
              {startDate}
              {endDate}
            </span>
            <span className="event__value">{this.props.event.title}</span>
          </div>
          <span className="event__secondary">
            {this.props.event.sortDescription}
          </span>
        </div>
      </div>
    );
  }
}
