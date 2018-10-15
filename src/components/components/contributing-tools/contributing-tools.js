import React from 'react';

export const ContributingTool = (props) => {
  return  (
    <div>
      <img src="#" alt="channel" />
      <span> {props.tool.title} </span>
    </div>
  )
}


export const ContributingToolSet = (props) => {

  const tools = props.tools.map((tool, i) => {
    return <ContributingTool tool={tool} />;
  });

  return (
    <div>
      {tools}
    </div>
  )
}


// TODO: implement graphql query
