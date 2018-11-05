/*
  A wrapper for announcements and job listing section.
  Appears at /contribute and /leaders-corner.
*/
import React from 'react';

// Local modules.
import LayoutContained from './../../layouts/layout-contained/layout-contained';
import Layout2Col from './../../layouts/layout-2col/layout-2col';
import Announcements from './../announcements/announcements';
import JobListing from './../job-listing/job-listing';

export default props => {
  return (
    <LayoutContained>
      <Layout2Col horizontalGutters verticalGutters>
        <div>
          {' '}
          <Announcements
            announcements={props.announcements || []}
            dummyData={props.dummyData}
          />{' '}
        </div>
        <div>
          {' '}
          <JobListing
            jobs={props.jobs || []}
            dummyData={props.dummyData}
          />{' '}
        </div>
      </Layout2Col>
    </LayoutContained>
  );
};
