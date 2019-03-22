import React, { memo } from "react";
import { Helmet } from "react-helmet";

import BasicLayout from "../components/layouts/layout-base/layout-base";
import GatsbyConfig from "./../../gatsby-config";
import LayoutContained from "./../components/layouts/layout-contained/layout-contained";
import { PlainHeader } from "./../components/components/plain-header/plain-header";

/**
 * Community Manager page.
 */
const CommunityManager = props => {
  return (
    <BasicLayout location={props.location}>
      <Helmet>
        <title>{`Job: Seasonal Community Manager | 
        ${GatsbyConfig.siteMetadata.title}`}</title>
      </Helmet>

      <LayoutContained>
        <PlainHeader
          title="Seasonal Part Time Community Manager"
          subtitle="Location: US remote, Mountain View, Portland, San Francisco"
        />
        <p className="highlighted-text highlighted-text--small">
          Do you want to work in an agile environment of like minded people who
          care about the web and empowering students towards innovation? The
          (OSSN) Open Source Student Network is looking for a junior community
          manager to support its expansion efforts in the United States.
        </p>
        <p className="highlighted-text highlighted-text--small">
          In OSSN we have built and provide continuous support to a network of
          university and college clubs eager to learn about, contribute and to
          create Open Source Projects.
        </p>
        <p className="highlighted-text highlighted-text--small">
          In this role you’ll be responsible for growing the network, onboard
          new members, feel them welcomed, run regular community calls and
          support clubs while they engage new members.
        </p>
        <p className="highlighted-text highlighted-text--small">
          As the community manager of this program, your responsibilities are
          to:
        </p>
        <ul>
          <li>
            Serve as a front-facing representative of Mozilla and the network,
            and strive to make the first impression of our organization and
            program an exceptional one
          </li>
          <li>
            Onboard new clubs into the network by making them feel welcomed,
            safe and included
          </li>
          <li>
            Build and manage close relationships with the Clubs leadership and
            faculty members
          </li>
          <li> Create a regular newsletter with relevant engaging content</li>
          <li>
            Respond to inquiries and provide assistance to current and aspiring
            members
          </li>
          <li>
            Organize and run regular community calls where clubs connect and
            collaborate over topics of common interest
          </li>
          <li>
            Document all the necessary information for onboarding clubs and
            students
          </li>
          <li>
            Present the Open Source Student network in various events like guest
            talks in universities, conferences, and internal stakeholders
          </li>
          <li>
            Collect data, metrics and document the performance of the network
          </li>
        </ul>
        <p className="highlighted-text highlighted-text--small">
          We are looking for a candidate who has the following skills:
        </p>
        <ul>
          <li>BS in CS, CE or 1+ years relevant work experience</li>
          <li>You love working with University students</li>
          <li>You have strong organizational and presentation skills</li>
          <li>You have experience in community and/or student organizing</li>
          <li>
            You have extremely strong written and verbal communication skills
          </li>
          <li>
            Comfortable working with diverse global communities across time
            zones, cultures, and geographies
          </li>
        </ul>
        <p className="highlighted-text highlighted-text--small">
          We are an equal opportunity employer and value diversity. We do not
          discriminate on the basis of race, religion, color, national origin,
          gender, sexual orientation, age, marital status, veteran status, or
          disability status.
        </p>
        <p className="highlighted-text highlighted-text--small">
          Apply by sending your CV to aduckham AT mozilla DOT com with subject:
          OSSN Community manager
        </p>
      </LayoutContained>
    </BasicLayout>
  );
};

export default memo(CommunityManager);
