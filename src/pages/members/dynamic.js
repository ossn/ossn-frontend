import React, { memo } from "react";

import Member from "../../components/components/member/member";
import BasicLayout from "../../components/layouts/layout-base/layout-base";

/**
 * A wrapper component for the member full page.
 * Is used for clubs page generator.
 *
 * @param {Object} member
 * @param location
 */
const MembersFullPage = ({
  pageContext: { member = { member: [] } },
  location
}) => (
  <BasicLayout>
    <Member member={member} location={location} />
  </BasicLayout>
);

export default memo(MembersFullPage);
