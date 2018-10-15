import React from 'react';

// local modules
import Layout2Col from './../../layouts/layout-2col/layout-2col';
import Announcements from './../announcements/announcements';
import JobListing from './../job-listing/job-listing';

export default (props) => {
  return(
    <Layout2Col>
      <div> <Announcements /> </div>
      <div> <JobListing /> </div>
    </Layout2Col>
  );
}
