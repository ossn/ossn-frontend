import React from "react";
import { graphql } from "gatsby";
import MediaQuery from "react-responsive";
import ExternalLinkBox from "./../external-link-box/external-link-box";
import Layout3Col from "./../../layouts/layout-3col/layout-3col";
import LayoutScroll from "./../../layouts/layout-scroll/layout-scroll";

/**
 * List of contributing tools.
 * Contains the fragment for the contributing tools.
 * Appears at /contribute and /leaders-corner.
 *
 * @param props
 */

export const ContributingToolSet = props => {
  const tools = props.tools.edges.map((toolNode, i) => {
    const tool = toolNode.node;
    return (
      <div key={i}>
        <ExternalLinkBox resource={tool} />
      </div>
    );
  });

  return (
    <div>
      <h2>Tools for contributing code to open source projects</h2>
      <MediaQuery maxWidth={767}>
        <LayoutScroll>{tools}</LayoutScroll>
      </MediaQuery>

      <MediaQuery minWidth={768}>
        <Layout3Col horizontalGutters verticalGutters>
          {tools}
        </Layout3Col>
      </MediaQuery>
    </div>
  );
};

export const query = graphql`
  fragment MemberTools on ToolsForContributingJson {
    title
    link
    description
    attachment {
      publicURL
    }
  }
`;
