import "./organization.scss";

import React from "react";
import { Link } from "react-feather";
import ShadowBox from "./../shadow-box/shadow-box";

/**
 * A single organization.
 * Appears at organizations page.
 *
 * @param props
 */
const Organization = props => {
  if (!props.organization) {
    return <div> organization not found error </div>;
  }

  const title = props.organization.title;
  const url = props.organization.link;
  const icon = props.organization.attachment.publicURL;
  const description = props.organization.description;

  let classes = ["organization"];
  if (props.className) classes.push(props.className);
  let classString = classes.join(" ");

  return (
    <a
      href={url}
      className={classString}
      target="_blank"
      rel="noopener noreferrer"
    >
      <ShadowBox>
        <div className="organization__inner">
          <div className="organization__image-wrapper">
            <img src={icon} className="organization__image" alt={title} />
          </div>

          <Link size={18} className="icon organization__icon" />
          <span className="title title--x-small organization__title">
            {" "}
            {title}
          </span>
          <p className="organization__description">{description}</p>
        </div>
      </ShadowBox>
    </a>
  );
};

export default Organization;
