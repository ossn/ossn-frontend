/*
  Contains graphQL query for training resources.
  Contains TrainingResource and TrainingResourceList components.
  Appears at /contribute and /leaders-corber.
*/

import React from 'react';
import {graphql} from 'gatsby';

// Local modules.
import LayoutContained from './../../layouts/layout-contained/layout-contained';
import Layout2Col from './../../layouts/layout-2col/layout-2col';
import ShadowBox from './../shadow-box/shadow-box';

// styles
import './member-training-resources.scss';

// A single training resource.
const TrainingResource = (props) => {
  const title = props.resource.title;
  const url = props.resource.link;
  const icon = props.resource.attachment.publicURL;
  const classes=`${props.className || ''} member-training-resources`;

  return  (
    <div className={classes}>
      <a href={url} className="member-training-resources__wrapper-link">
        <ShadowBox className="member-training-resources__content">
          <div className="member-training-resources__image-wrapper">
            <img src={icon} alt={title} className="member-training-resources__image"/>
          </div>
          <div className="member-training-resources__text">
            <h3 className="member-training-resources__title"> {title} </h3>
            <p className="member-training-resources__description">
              Got 15 minutes and want to learn Git? Git allows groups of people to work on the same documents at the same time, and without stepping on each other's toes.
            </p>
          </div>
        </ShadowBox>
      </a>
    </div>
  );
};

// A wrapper for all training resources.
export default (props) => {

  const resources = props.resources.edges.map((resourceNode, i)=>{
    const resource = resourceNode.node;
    return <TrainingResource resource={resource} key={i} />
  });

  return (
    <div>
      <LayoutContained>
        <h2> Training & various resources </h2>
        <div className="member-training-resources--large__list">
          <Layout2Col horizontalGutters verticalGutters>
            {resources}
          </Layout2Col>
        </div>
      </LayoutContained>
    </div>
  );
};

export const query = graphql`
  fragment TrainingResources on TrainingResourcesJson {
    title
    description
    attachment {
      publicURL
    }
    link
  }
`;
