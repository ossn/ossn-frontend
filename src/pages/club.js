// external modules
import React from 'react';
import { Helmet } from 'react-helmet';

import BasicLayout from '../components/layouts/layout-base/layout-base';
import GatsbyConfig from './../../gatsby-config';
import Club from './../components/components/club-full/club-full';

// TODO: Remove and fid title another way.
class Clubs extends React.PureComponent {
  render() {
    const singleClub = {
      title: 'Single Club',
      subtitle: 'this is a more wordy title for the cub '
    };

    return (
      <BasicLayout>
        <Helmet>
          <title>
            {['Clubs', '|', GatsbyConfig.siteMetadata.title].join(' ')}
          </title>
        </Helmet>

        <Club club={singleClub} />
      </BasicLayout>
    );
  }
}

export default Clubs;
