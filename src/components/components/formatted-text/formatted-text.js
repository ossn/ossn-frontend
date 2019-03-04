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
export const FormattedText = props => {
  const prefix = props.prefix || "";
  const value = props.value;
  const icon = props.icon ? <props.icon size={20} /> : "";
  const secondary = props.secondary || "";
  const breakAll = props.breakAll;
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
};

/**
 * Shortcut wrapper for github links.
 *
 * @param props
 */
export const Github = props => {
  return <FormattedText value={props.value} icon={GithubIcon} breakAll />;
};

/**
 * Shortcut wrapper for links.
 *
 * @param props
 */
export const Link = props => {
  return <FormattedText value={props.value} icon={LinkIcon} breakAll />;
};

/**
 * Shortcut wrapper for plain text.
 *
 * @param props
 */
export const Text = props => {
  return <FormattedText prefix="" value={props.value} />;
};

/**
 * Shortcut wrapper for Map.
 *
 * @param props
 */
export const Map = props => {
  return <FormattedText value={props.value} icon={MapIcon} />;
};

/**
 * Shortcut wrapper for email.
 *
 * @param props
 */
export const Email = props => {
  return <FormattedText prefix="" value={props.value} icon={AtSign} breakAll />;
};
