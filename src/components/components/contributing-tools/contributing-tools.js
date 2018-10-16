import React from 'react';
import {graphql} from 'gatsby';

// local modules
import ShadowBox from './../shadow-box/shadow-box';

export const ContributingTool = (props) => {
  const title = props.tool.title;
  const url = props.tool.url;
  const icon = props.tool.icon;

  return  (
    <ShadowBox>
      <a href={url}>
        <img src={icon} alt={title} />
        <span> {title} </span>
      </a>
    </ShadowBox>
  );
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
