import "./organization-teaser.scss";

import React from "react";

/**
 * A single organization teaser.
 * Appears at front page.
 *
 * @param props
 */

const OrganizationTeaser = props => {
  if (!props.organization) {
    return <div> No organization found </div>;
  }

  const title = props.organization.title;
  const url = props.organization.link;
  const icon = props.organization.attachment.publicURL;

  return (
    <a
      href={url}
      className={`organization-teaser ${props.className}`}
      title={title}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={icon} alt={title} />
    </a>
  );
};

export default OrganizationTeaser;
