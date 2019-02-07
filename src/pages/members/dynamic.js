import React, { memo } from 'react';

import Member from '../../components/components/member/member';
import BasicLayout from '../../components/layouts/layout-base/layout-base';

/*
A wrapper component for the members full page.
Is used for member page generator.
*/
const MembersFullPage = ({
  pageContext: { member = { clubs: [] } },
  location
}) => (
  <BasicLayout>
    <Member member={member} location={location} />
  </BasicLayout>
);

export default memo(MembersFullPage);
