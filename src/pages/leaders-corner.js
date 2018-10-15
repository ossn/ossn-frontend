// external modules
import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

// local modules
import BasicLayout from './../components/layouts/layout-base/layout-base';
import Layout2Col from  './../components/layouts/layout-2col/layout-2col';
import Opportunities from './../components/components/opportunities/opportunities';
import Announcements from './../components/components/announcements/announcements';
import {ToolSet} from './../components/components/leader-tools/leader-tools';
// Import page title from gatsby config. TODO Remove and fid title another way.
import GatsbyConfig from './../../gatsby-config';

class Contribute extends React.Component {

  render() {
    const jobs = this.props.data.ossnApi.jobs;
    const announcements = this.props.data.ossnApi.announcements;
    const projectManegement = this.props.data.allLeadersToolsJson.edges[0].node.Project_Management_tools;
    const codeOfConduct = this.props.data.allLeadersToolsJson.edges[0].node.Code_of_Conduct_examples;
    const usefulResources = this.props.data.allLeadersToolsJson.edges[0].node.Useful_resources_running_a_club;
    const variousTools = this.props.data.allLeadersToolsJson.edges[0].node.Various_tools;


    return (
      <BasicLayout>
        <Helmet>
          <title>{['Opportunities', '|', GatsbyConfig.siteMetadata.title].join(" ")}</title>
        </Helmet>

         {/* {Tools wrapper } */}
        <div>
          <h1> Leader's Corner </h1>
          <Layout2Col>
            {/* Left column */}
            <div>
              <ToolSet title="Project Management tools" items={projectManegement} />
              <ToolSet title="Code of Conduct examples" items={codeOfConduct} />
              <ToolSet title="Various Tools" items={variousTools} />
            </div>
            {/* Right column */}
            <div>
              <ToolSet title="Useful Resources" items={usefulResources} />
            </div>
          </Layout2Col>
        </div>

        <div>
          <Layout2Col>
            <Announcements  announcements={announcements} />
            <Opportunities jobs={jobs} />
          </Layout2Col>
        </div>

        <div>
          <Layout2Col>
              <div> Communication channels </div>
              <div> Tools for contributing </div>
          </Layout2Col>
        </div>

        <div>
          <Layout2Col>
            <div> tool </div>
            <div> tool </div>
            <div> tool </div>
            <div> tool </div>
            <div> tool </div>
            <div> tool </div>
          </Layout2Col>
        </div>
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

  allToolsForContributingJson {
    edges {
      node {
        id
  		  title
      }
    }
  }

  allLeadersToolsJson {
    edges {
      node {
        Project_Management_tools {
          title
          url
          icon
        }
        Code_of_Conduct_examples {
          title
          url
          icon
        }
        Various_tools {
          title
          url
          icon
        }
        Useful_resources_running_a_club {
          title
          url
          icon
        }
      }
    }
  }
}
`;
