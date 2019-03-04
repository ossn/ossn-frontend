import React from "react";

import LayoutContained from "./../../layouts/layout-contained/layout-contained";
import Layout2Col from "./../../layouts/layout-2col/layout-2col";
import { ChannelList } from "./../communication-channels/communication-channels";
import { ContributingToolSet } from "./../contributing-tools/contributing-tools";

/**
 * A wrapper for channels and tools for contributing list.
 * Appears at /contribute and /leaders-corner.
 *
 * Props contain channels and tools.
 *
 * @param props
 */

export default props => {
  return (
    <LayoutContained>
      <Layout2Col horizontalGutters verticalGutters>
        <div>
          <ChannelList channels={props.channels} />
        </div>
        <div>
          <ContributingToolSet tools={props.tools} />
        </div>
      </Layout2Col>
    </LayoutContained>
  );
};
