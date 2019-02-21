/**
 *  Page for member opportunities under '/contribute' url.
 *  gets the opportunities component and fetches the data for
 *  job listing
 *  announcements
 *  tools for contributing
 *  communication channels
 **/
// import style
import "./../components/components/promoted-box/promoted-box.scss";

import { graphql } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";

import BasicLayout from "../components/layouts/layout-base/layout-base";
import GatsbyConfig from "./../../gatsby-config";
import ContributeContent from "./../components/components/contribute/contribute";

class Contribute extends React.PureComponent {
  render() {
    return (
      <BasicLayout>
        <Helmet>
          <title>
            {["Opportunities", "|", GatsbyConfig.siteMetadata.title].join(" ")}
          </title>
        </Helmet>

        <ContributeContent data={this.props.data} />
      </BasicLayout>
    );
  }
}

export default Contribute;

export const query = graphql`
  {
    ossnApi {
      ...JobBoardListing
      ...announcements
    }

    allCommunicationChannelsJson {
      edges {
        node {
          ...CommunicationChannel
        }
      }
    }

    allToolsForContributingJson {
      edges {
        node {
          ...MemberTools
        }
      }
    }

    allTrainingResourcesJson {
      edges {
        node {
          ...TrainingResources
        }
      }
    }
  }
`;
