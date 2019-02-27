import "./event.scss";

import React from "react";
import { shortDate } from "./../../../utils/dates";

import { Calendar as CalendarIcon } from "react-feather";

// shortcut wrapper for events.
export default class Event extends React.PureComponent {
  render() {
    console.log(this.props);
    // const prefix = this.props.prefix || '';
    // const value = this.props.value;
    // const icon = this.props.icon ? <this.props.icon size={20} /> : '';
    // const secondary = this.props.secondary || '';
    // const breakAll = this.props.breakAll;
    let classes = ["event"];
    // if (breakAll) classes.push('formated-text--word-break');

    return (
      <div className={classes.join(" ")}>
        <div className="event__icon">
          <CalendarIcon size={20} />
        </div>
        <div className="event__text">
          <div className="event__main">
            <span className="event__date">
              <span className="event__date-start">
                {shortDate(this.props.event.startDate)}
              </span>
              <span className="event__date-end">
                {shortDate(this.props.event.endDate)}
              </span>
            </span>
            <span className="event__value">{this.props.event.title}</span>
          </div>
          <span className="event__secondary">
            {" "}
            {this.props.event.sortDescription}
          </span>
        </div>
      </div>
    );
  }

  // <FormatedText value={value} secondary={secondary} icon={CalendarIcon} />
}
