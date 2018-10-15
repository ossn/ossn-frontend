import React from 'react';

export const Channel = (props) => {
  return  (
    <div>
      <img src="#" alt="channel" />
      <span> {props.channel.title} </span>
    </div>
  )
}


export const ChannelList = (props) => {

  const channels = props.channels.map((channel, i) => {
    return <Channel channel={channel} />;
  });

  return (
    <div>
      {channels}
    </div>
  )
}


// TODO: implement graphql query
