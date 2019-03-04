import "./club-info.scss";

import React from "react";
import MediaQuery from "react-responsive";

import { Email, Github, Link, Map } from "./../formatted-text/formatted-text";
import ShadowBox from "./../shadow-box/shadow-box";
import Shape from "./../shape/shape";
import Event from "../event/event";

/**
 * Contains the `ClubInfo`  and `ClubInfoItem` components.
 */

/**
 * ClubInfoItem component.
 * Wraps all the elements that appear on the right sidebar on club default
 * display.
 *
 * Possible props:
 *  {boolean} major: if it exists variant class is added creating a large item.
 *  {boolean} map: if it exists variant class is added creating a map item.
 *  {String} link: it indicates we are dealing with an external link and
 *  contains the url that it points to.
 *  {String} email: it indicated we deal with an email and contains the email.
 *
 * @param props
 *
 */
export class ClubInfoItem extends React.PureComponent {
  render() {
    let classes = ["club-info__item"];
    if (this.props.major) classes.push("club-info__item--major");
    if (this.props.map) classes.push("club-info__item--map");

    let content;
    if (this.props.link) {
      content = (
        <a
          href={this.props.link}
          target="_blank"
          rel="noopener noreferrer"
          className={classes.join(" ")}
        >
          {this.props.children}
        </a>
      );
    } else if (this.props.email) {
      content = (
        <a href={this.props.email} className={classes.join(" ")}>
          {this.props.children}
        </a>
      );
    } else {
      content = <div className={classes.join(" ")}>{this.props.children}</div>;
    }

    return <>{content}</>;
  }
}

/**
 * LocationInfo wrapper.
 * Constructs the address element. If all props are provided it creates a link
 * to openstreetmaps with the directions box open.
 *
 * @param {String} location
 * @param {String} lng
 * @param {String} lat
 */
const LocationInfo = ({ location, lng, lat }) => {
  if (lng && lat) {
    const link =
      "https://www.openstreetmap.org/directions?from=&to=" +
      lat +
      "%2C" +
      lng +
      "&zoom=8";

    return (
      <li className="club-info__item-wrapper club-info__item-wrapper--major club-info__item-wrapper--map">
        <ClubInfoItem major map link={link}>
          <Map value={location} />
        </ClubInfoItem>
      </li>
    );
  }
  return (
    <li className="club-info__item-wrapper club-info__item-wrapper--major club-info__item-wrapper--map">
      <ClubInfoItem major map>
        <Map value={location} />
      </ClubInfoItem>
    </li>
  );
};

/**
 * GithubInfo wrapper.
 * Constructs github url element.
 *
 * @param {String} github The github account url
 */
const GithubInfo = ({ github }) => (
  <li className="club-info__item-wrapper club-info__item-wrapper--major club-info__item-wrapper--graph">
    <ClubInfoItem link={github} major>
      <Github value={github} />
    </ClubInfoItem>
  </li>
);

/**
 * WebpageInfo wrapper.
 * Constructs club url element.
 *
 * @param {String} clubUrl The club website url
 */
const WebpageInfo = ({ clubUrl }) => (
  <li className="club-info__item-wrapper">
    <ClubInfoItem link={clubUrl}>
      <Link value={clubUrl} />
    </ClubInfoItem>
  </li>
);

/**
 * EmailInfo wrapper.
 * Constructs email element.
 *
 * @param {String} email The club email
 */
const EmailInfo = ({ email }) => (
  <li className="club-info__item-wrapper">
    <ClubInfoItem email={`mailto:${email}`}>
      <Email value={email} />
    </ClubInfoItem>
  </li>
);

/**
 * EventInfo wrapper.
 * Wraps event component.
 *
 * @param {String} event A club event
 */
const EventInfo = ({ event }) => (
  <li className="club-info__item-wrapper">
    <ClubInfoItem>
      <Event event={event} />
    </ClubInfoItem>
  </li>
);

/**
 * Box containing information about a club..
 * Wraps event component.
 *
 * Possible props:
 *  {String} address
 *  {String} lng
 *  {String} clubUrl
 *  {String} email
 *  {String} githubUrl
 *  {Array} events
 *
 * @param {String} props
 */
export default class ClubInfo extends React.PureComponent {
  getEvents() {
    const now = Math.round(new Date().getTime() / 1000);

    /**
     * Orders Event list.
     */
    const eventList =
      this.props.club.events &&
      this.props.club.events
        .sort((a, b) => {
          if (a.startDate && b.startDate) {
            const aClosingDate = Math.max(a.startDate, a.endDate);
            const bClosingDate = Math.max(b.startDate, b.endDate);
            if (aClosingDate > now && bClosingDate < now) {
              return -1;
            } else if (aClosingDate < now && bClosingDate > now) {
              return 1;
            }

            if (a.startDate > b.startDate) {
              return -1;
            } else {
              return 1;
            }
          } else if (a.startDate) {
            return -1;
          } else {
            return 1;
          }
        })
        .map((event, i) => {
          return <EventInfo event={event} key={event.id} />;
        });
    return eventList;
  }

  render() {
    const { lng, lat, githubUrl, clubUrl, email, address } = this.props.club;
    return (
      <ShadowBox zeroPadding className="club-info__wrapper">
        <ul className="club-info">
          {address && <LocationInfo location={address} lng={lng} lat={lat} />}
          {githubUrl && <GithubInfo github={githubUrl} />}
          {clubUrl && <WebpageInfo clubUrl={clubUrl} />}
          {email && <EmailInfo email={email} />}
          {this.getEvents()}
        </ul>
        <Shape square seafoamBlue className="club-info__shape-square" />
        <MediaQuery minWidth={992}>
          <Shape circle sunnyYellow className="club-info__shape-circle" />
        </MediaQuery>
      </ShadowBox>
    );
  }
}
