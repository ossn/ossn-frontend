import React from 'react';
import {graphql} from 'gatsby';

export const ContributingTool = (props) => {
  return  (
    <div>
      <img src="#" alt="channel" />
      <span> {props.tool.title} </span>
    </div>
  )
}

export const ContributingToolSet = (props) => {

  const tools = props.tools.edges.map((toolNode, i) => {
    const tool = toolNode.node;
    return <ContributingTool tool={tool} key={i} />;
  });

  return (
    <div>
      <h2> Tools for contributing code to open source projects </h2>
      <div>
        {tools}
      </div>
    </div>
  )
}

export const query = graphql`
  fragment MemberTools on ToolsForContributingJson {
    title
    url
    icon
  }
`;
