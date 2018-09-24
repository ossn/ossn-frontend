// external modules
import React from 'react';
import { Helmet } from 'react-helmet';

// local modules
import BasicLayout from '../components/layouts/layout-base/layout-base';
import Member from './../components/components/member/member';


// Import page title from gatsby config. TODO Remove and fid title another way.
import GatsbyConfig from './../../gatsby-config';

const Members = () => {

  const mem = {
    username: 'user01',
    firstName: 'User',
    lastName: '01',
    location: 'Planet Earth',
    github: 'https://github.com',
    personalPage: 'https://duckduckgo.com',
    clubLeader: true
  };

  return (
    <BasicLayout>
      <Helmet>
        <title>{['Members', '|', GatsbyConfig.siteMetadata.title].join(" ")}</title>
      </Helmet>

      <Member member={mem} editable />
    </BasicLayout>
  );
};

export default Members;
