/*
  Contains the fragment for the contributing tools.
  Returns a list of contributing tools.
  Appears at /contribute and /leaders-corner.
*/
import React from 'react';
import {graphql} from 'gatsby';

// Local modules.
import ExternalLinkBox from './../external-link-box/external-link-box';
import Layout3Col from './../../layouts/layout-3col/layout-3col';

export const ContributingToolSet = (props) => {

  const tools = props.tools.edges.map((toolNode, i) => {
    const tool = toolNode.node;
    return (
        <div key={i}>
          <ExternalLinkBox resource={tool}/>
        </div>
      );
  });

  return (
    <div>
      <h2> Tools for contributing code to open source projects </h2>
      <Layout3Col horizontalGutters verticalGutters>
        {tools}
      </Layout3Col>
    </div>
  )
};

export const query = graphql`
  fragment MemberTools on ToolsForContributingJson {
    title
    link
    attachment {
      publicURL
    }
  }
`;
