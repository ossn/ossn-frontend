import React from 'react';
import {graphql} from 'gatsby';

// local modules
import Layout2Col from './../../layouts/layout-2col/layout-2col';
import ShadowBox from './../shadow-box/shadow-box';


const TrainingResource = (props) => {
  return (
    <ShadowBox className={props.className}>
      {props.resource.title}
    </ShadowBox>
  )
}



export default (props) => {

  const resources = props.resources.edges.map((resourceNode, i)=>{
    const resource = resourceNode.node;
    return <TrainingResource resource={resource} key={i} />
  });

  return (
    <div>
      <h2> Training & various resources </h2>
      <Layout2Col>
        {resources}
      </Layout2Col>
    </div>
  );
}

export const query = graphql`
  fragment TrainingResources on TrainingResourcesJson {
    title
    description
    image
    url
  }
`;
