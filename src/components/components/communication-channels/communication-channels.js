/*
Lists the communication channels.
Is responsible to handle transformation from the gatsby-jsom to usable data
*/

import React from 'react';
import {graphql} from 'gatsby';

export const Channel = (props) => {
  return  (
    <div>
      <img src="#" alt="channel" />
      <span> {props.channel.title} </span>
    </div>
  )
}


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
}

export const query = graphql`
  fragment CommunicationChannel on CommunicationChannelsJson {
    title
    url
    icon
  }
`;
