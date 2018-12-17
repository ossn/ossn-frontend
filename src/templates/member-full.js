/*
A wrapper component for the club full page.
Is used for member page generator.
*/
import React from 'react';
import { Helmet } from 'react-helmet';

import GatsbyConfig from './../../gatsby-config';
import Member from './../components/components/member/member';
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

        <Member member={this.props.pageContext.member} />
      </BasicLayout>
    );
  }
}
