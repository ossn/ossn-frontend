/*
  Contains organization teaser.
*/

import React from 'react';

const OrganizationTeaser = (props) => {
  if (!props.organization) {
    return <div> No organization found </div>;
  }

  const title = props.organization.title;
  const url = props.organization.link;
  const icon = props.organization.attachment.publicURL;

  return (
    <a href={url} className={props.className || ''}>
      <img src={icon} alt={title} />
    </a>
  );
};

export default OrganizationTeaser;
