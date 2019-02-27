import "./event.scss";

import React from "react";
import { shortDate } from "./../../../utils/dates";

import { Calendar as CalendarIcon } from "react-feather";

// Wrapper for events.
const Event = props => {
  const now = Math.round(new Date().getTime() / 1000);
  const { startDate, endDate } = props.event;
  const closingDate = Math.max(startDate, endDate);
  const startDateElement = startDate && (
    <span className="event__date-start">{shortDate(startDate)}</span>
  );
  const endDateElement = endDate && endDate !== startDate && (
    <span className="event__date-end">{shortDate(endDate)}</span>
  );
  return (
    <div className={`event ${closingDate < now ? "is-past-event" : ""}`}>
      <div className="event__icon">
        <CalendarIcon size={20} />
      </div>
      <div className="event__text">
        <div className="event__main">
          <span className="event__date">
            {startDateElement}
            {endDateElement}
          </span>
          <span className="event__value">{props.event.title}</span>
        </div>
        <span className="event__secondary">{props.event.sortDescription}</span>
      </div>
    </div>
  );
};
export default Event;
