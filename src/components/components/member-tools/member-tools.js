import React from 'react';

// local modules
import Layout2Col from './../../layouts/layout-2col/layout-2col';
import {ChannelList} from './../communication-channels/communication-channels';
import {ContributingToolSet} from './../contributing-tools/contributing-tools';

export default (props) => {
  return (
    <Layout2Col>
      <div> <ChannelList channels={props.channels}/> </div>
      <div> <ContributingToolSet tools={props.tools}/> </div>
    </Layout2Col>
  )
}
