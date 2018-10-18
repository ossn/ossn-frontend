import React from 'react';
import {graphql} from 'gatsby';

// local modules
import ShadowBox from './../shadow-box/shadow-box';

// styles
import './../teaser-box/teaser-box';

export const ContributingTool = (props) => {
  const title = props.tool.title;
  const url = props.tool.url;
  const icon = props.tool.icon;

  return  (
    <div className="teaser-box teaser-box--short">
      <a href={url} className="teaser-box__wrapper-link">
        <div noPaddings className="teaser-box__image-wrapper">
          <img src={icon} alt={title} className="teaser-box__image" />
        </div>
        <div className="teaser-box__text">
          <span className="teaser-box__title"> {title} </span>
          <span className="teaser-box__url"> {url} </span>
        </div>
    </a>
  </div>
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
      <div className="teaser-box__list">
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
