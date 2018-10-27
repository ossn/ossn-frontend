/*
 Lists the communication channels.
 Is responsible to handle transformation from the gatsby-jsom to usable data
 Appears at /contribute and /leaders-corner
 */

import React from 'react';
import {graphql} from 'gatsby';

// styles
import './communication-channels.scss';
import './communication-channel-list.scss';

export const Channel = (props) => {
  const title = props.channel.title;
  const url = props.channel.link;
  const icon = props.channel.imageUrl;

  return  (
    <a href={url} className="communication-channel">
      <img src={icon} alt={title} className="communication-channel__image"/>
      <span className="communication-channel__title">
        {title}
      </span>
    </a>
  );
};

export const ChannelList = (props) => {
  const channels = props.channels.edges.map((channelNode, i) => {
    const channel = channelNode.node;
    return <Channel channel={channel} key={i} />;
  });

  return (
    <div className="communication-channel-list">
      <h2 className="communication-channel-list__title title title--x-small"> Communication channels </h2>
      <div className="communication-channel-list__list-wrapper">
        {channels}
      </div>
    </div>
  )
};

export const query = graphql`
  fragment CommunicationChannel on CommunicationChannelsJson {
    title
    link
    imageUrl
  }
`;
