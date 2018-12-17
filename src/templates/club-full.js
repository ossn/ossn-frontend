import React from 'react';
import { Helmet } from 'react-helmet';

import GatsbyConfig from './../../gatsby-config';
import Club from './../components/components/club-full/club-full';
import BasicLayout from '../components/layouts/layout-base/layout-base';

export default class ClubFullPage extends React.Component {
  render() {
    return (
      <BasicLayout>
        <Helmet>
          <title>
            {['Clubs', '|', GatsbyConfig.siteMetadata.title].join(' ')}
          </title>
        </Helmet>

        <Club club={this.props.pageContext.club} />
      </BasicLayout>
    );
  }
}
