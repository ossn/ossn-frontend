import React from 'react';
import {graphql} from 'gatsby';
import { ExternalResourceList } from './../external-resource-teaser/external-resource-teaser';


export default class Announcements extends React.Component {

  render() {
    console.log(this.props.announcements);

    return (
      <div>
        <ExternalResourceList items={this.props.announcements} />
      </div>
    )
  }
}

export const query = graphql`
  fragment announcements on AnnouncementsJson {
    id
    shortdescription
    url
    updatedAt
    image
  }
`;
