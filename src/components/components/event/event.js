import "./event.scss";

import React from "react";
import { shortDate } from "./../../../utils/dates";

import { Calendar as CalendarIcon } from "react-feather";

/**
 * Handles club event component.
 * Differentiates between active and past event.
 *
 * @param props
 */
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

  const location =
    props.event.location && props.event.location.address ? (
      props.event.location.lng && props.event.location.lat ? (
        <span className="event__location">
          <h4>Event Location</h4>
          <a
            className="event__location-text text text--xsmall"
            href={`https://www.openstreetmap.org/directions?from=&to= ${
              props.event.location.lat
            } %2C ${props.event.location.lng} &zoom=12`}
          >
            {" "}
            {props.event.location.address}{" "}
          </a>
        </span>
      ) : (
        <span className="event__location">
          <h4>Event Location:</h4>
          <div className="event__location-text text text--xsmall">
            {props.event.location.address}
          </div>
        </span>
      )
    ) : (
      ""
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
        {location}
      </div>
    </div>
  );
};
export default Event;
