/*
 A wrapper component for the club full page.
 Is used for club page generator.
 */

import React, { memo } from "react";
import Club from "../../components/components/club-full/club-full";
import BasicLayout from "../../components/layouts/layout-base/layout-base";

/*
 A wrapper component for the clubs full page.
 Is used for clubs page generator.
 */

const ClubsFullPage = ({ pageContext: { club = { club: {} } }, location }) => {
  const { subtitle, title, ...rest } = club;

  return (
    <BasicLayout>
      <Club
        club={{
          name: title,
          shortDescription: subtitle,
          ...rest
        }}
        location={location}
      />
    </BasicLayout>
  );
};

export default memo(ClubsFullPage);
