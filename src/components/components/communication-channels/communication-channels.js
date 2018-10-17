/*
 Lists the communication channels.
 Is responsible to handle transformation from the gatsby-jsom to usable data
 */

import React from 'react';
import {graphql} from 'gatsby';

export const Channel = (props) => {
  const title = props.channel.title;
  const url = props.channel.url;
  const icon = props.channel.icon;

  return  (
    <a href={url}>
      <img src={icon} alt={title} />
      <span> {title} </span>
    </a>
  );
};

export const ChannelList = (props) => {
  const channels = props.channels.edges.map((channelNode, i) => {
    const channel = channelNode.node;
    return <Channel channel={channel} key={i} />;
  });

  return (
    <div>
      <h2> Communication channels </h2>
      <div>
        {channels}
      </div>
    </div>
  )
};

export const query = graphql`
  fragment CommunicationChannel on CommunicationChannelsJson {
    title
    url
    icon
  }
`;
