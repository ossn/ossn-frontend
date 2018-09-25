// external modules
import React from 'react';
import { Helmet } from 'react-helmet';

// local
import BasicLayout from '../components/layouts/layout-base/layout-base';
import Club from './../components/components/club-full/club-full';

// Import page title from gatsby config. TODO Remove and fid title another way.
import GatsbyConfig from './../../gatsby-config';


class Clubs extends React.Component {


  render() {
    const singleClub = {
      title: 'Single Club',
      subtitle: 'this is a more wordy title for the cub '
    }

    
    return (
      <BasicLayout>
        <Helmet>
          <title>{['Clubs', '|', GatsbyConfig.siteMetadata.title].join(" ")}</title>
        </Helmet>

        <Club club={singleClub} />

      </BasicLayout>
    );
  }
}

export default Clubs;
