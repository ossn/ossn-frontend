import React from 'react';

// Local modules.
import LayoutContained from './../../layouts/layout-contained/layout-contained';
import Layout2Col from './../../layouts/layout-2col/layout-2col';
import {ChannelList} from './../communication-channels/communication-channels';
import {ContributingToolSet} from './../contributing-tools/contributing-tools';

export default (props) => {
  return (
    <LayoutContained>
      <Layout2Col horizontalGutters verticalGutters>
        <div> <ChannelList channels={props.channels}/> </div>
        <div> <ContributingToolSet tools={props.tools}/> </div>
      </Layout2Col>
    </LayoutContained>
  )
}
