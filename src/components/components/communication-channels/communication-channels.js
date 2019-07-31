import "./communication-channels.scss";

import React from "react";
import { graphql } from "gatsby";

/**
 * Lists of the communication channels.
 * Is responsible to handle transformation from the gatsby-json to usable data.
 * Appears at /contribute and /leaders-corner.
 * Contains the graphql query.
 */

/**
 * Single communication channel.
 *
 * @param props
 */
export const Channel = props => {
  const title = props.channel.title;
  const url = props.channel.link;
  const icon = props.channel.attachment.publicURL;

  return (
    <a href={url} className="communication-channels">
      <span className="communication-channels__image-wrapper">
        <img src={icon} alt={title} className="communication-channels__image" />
      </span>
      <span className="communication-channels__title">{title}</span>
    </a>
  );
};

/**
 * Communication chanel list.
 *
 * @param props
 */
export const ChannelList = props => {
  const channels = props.channels.edges.map((channelNode, i) => {
    const channel = channelNode.node;
    return <Channel channel={channel} key={i} />;
  });

  return (
    <div className="communication-channels__list">
      <h2
        className="communication-channels__list-title title title--x-small"
        id="communication"
      >
        Communication channels
      </h2>
      <div
        className="communication-channels__list-wrapper"
        aria-labelledby="communication"
      >
        {channels}
      </div>
    </div>
  );
};

export const query = graphql`
  fragment CommunicationChannel on CommunicationChannelsJson {
    title
    link
    attachment {
      publicURL
    }
  }
`;
