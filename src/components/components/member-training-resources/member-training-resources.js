/*
  Contains graphQL query for training resources.
  Contains TrainingResource and TrainingResourceList components.
  Appears at /contribute and /leaders-corber.
*/

import React from "react";
import { graphql } from "gatsby";
import MediaQuery from "react-responsive";

// Local modules.
import LayoutContained from "./../../layouts/layout-contained/layout-contained";
import Layout2Col from "./../../layouts/layout-2col/layout-2col";
import ShadowBox from "./../shadow-box/shadow-box";
import LayoutScroll from "./../../layouts/layout-scroll/layout-scroll";

// styles
import "./member-training-resources.scss";

// A single training resource.
const TrainingResource = props => {
  const title = props.resource.title;
  const url = props.resource.link;
  const icon = props.resource.attachment.publicURL;
  const classes = `${props.className || ""} member-training-resources`;
  const description = props.resource.description;

  return (
    <div className={classes}>
      <a href={url} className="member-training-resources__wrapper-link">
        <ShadowBox className="member-training-resources__content">
          <div className="member-training-resources__image-wrapper">
            <img
              src={icon}
              alt={title}
              className="member-training-resources__image"
            />
          </div>
          <div className="member-training-resources__text">
            <h3 className="member-training-resources__title"> {title} </h3>
            <p className="member-training-resources__description">
              {description}
            </p>
          </div>
        </ShadowBox>
      </a>
    </div>
  );
};

// A wrapper for all training resources.
export default props => {
  const resources = props.resources.edges.map((resourceNode, i) => {
    const resource = resourceNode.node;
    return <TrainingResource resource={resource} key={i} />;
  });

  return (
    <LayoutContained>
      <h2 className="member-training-resources__list-title">
        Training & various resources
      </h2>
      <div className="member-training-resources__list">
        <MediaQuery maxWidth={767}>
          <LayoutScroll stretchItems>{resources}</LayoutScroll>
        </MediaQuery>

        <MediaQuery minWidth={768}>
          <Layout2Col horizontalGutters verticalGutters>
            {resources}
          </Layout2Col>
        </MediaQuery>
      </div>
    </LayoutContained>
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
