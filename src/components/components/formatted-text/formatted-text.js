import "./formatted-text.scss";

import React from "react";
import {
  GitHub as GithubIcon,
  Link as LinkIcon,
  Map as MapIcon,
  AtSign
} from "react-feather";

/**
 * Contains formatted text component.
 * is used for club info items except events.
 *
 * @param props
 */
export default class FormattedText extends React.PureComponent {
  render() {
    const prefix = this.props.prefix || "";
    const value = this.props.value;
    const icon = this.props.icon ? <this.props.icon size={20} /> : "";
    const secondary = this.props.secondary || "";
    const breakAll = this.props.breakAll;
    let classes = ["formatted-text"];
    if (breakAll) classes.push("formatted-text--word-break");

    return (
      <div className={classes.join(" ")}>
        <div className="formatted-text__icon">{icon}</div>
        <div className="formatted-text__text">
          <div className="formatted-text__main">
            <span className="formatted-text__prefix">{prefix}</span>
            <span className="formatted-text__value">{value}</span>
          </div>
          <span className="formatted-text__secondary"> {secondary}</span>
        </div>
      </div>
    );
  }
}

/**
 * Shortcut wrapper for github links.
 *
 * @param props
 */
export class Github extends React.PureComponent {
  render() {
    const value = this.props.value;
    return <FormattedText value={value} icon={GithubIcon} breakAll />;
  }
}

/**
 * Shortcut wrapper for links.
 *
 * @param props
 */
export class Link extends React.PureComponent {
  render() {
    const value = this.props.value;

    return <FormattedText value={value} icon={LinkIcon} breakAll />;
  }
}

/**
 * Shortcut wrapper for plain text.
 *
 * @param props
 */
export class Text extends React.PureComponent {
  render() {
    const value = this.props.value;
    return <FormattedText prefix="" value={value} />;
  }
}

/**
 * Shortcut wrapper for Map.
 *
 * @param props
 */
export class Map extends React.PureComponent {
  render() {
    const value = this.props.value;
    return <FormattedText prefix="" value={value} icon={MapIcon} />;
  }
}

/**
 * Shortcut wrapper for email.
 *
 * @param props
 */
export class Email extends React.PureComponent {
  render() {
    const value = this.props.value;
    return <FormattedText prefix="" value={value} icon={AtSign} breakAll />;
  }
}
