import React from 'react';
import { graphql } from "gatsby";

// Local modules.
import BasicLayout from '../components/layouts/layout-base/layout-base';
import LayoutContained from './../components/layouts/layout-contained/layout-contained';
import OrganizationList from './../components/components/organizations-list/organizations-list';
import BecomeMember from './../components/components/home-become-member/home-become-member';
import ImageBox from './../components/components/image-box/image-box';
import BlockquoteBox from './../components/components/blockquote-box/blockquote-box';

const IndexPage = (props) => {
  return (
    <BasicLayout>

      {/* New section */}
      <LayoutContained>
        <h1> What's happening </h1>
        <div>
          <div >
            <div>
              <div>
                <ImageBox titleLargeTop="Read" titleSmall="our updated" titleLargeBottom="blog!" image="./../components/components/image-box/image-box/images/panel-typewriter.jpg"/>               <ImageBox titleLargeTop="MozFest is over :-(" titleSmall="But you can re-live it with our photos!"/>
                <ImageBox titleLargeTop="Fixme" titleSmall="New kid on the block!"/>
                <ImageBox titleSmall="See the all-new" titleLargeBottom="Opportunities!"/>
                <ImageBox titleLargeTop="Listen" titleSmall="to our" titleLargeBottom="podcast!"/>
                <BlockquoteBox blockquote="In open source, we feel strongly that to really do something well, you have to get a lot of people involved." author="Linus Torvalds" />
              </div>
            </div>
          </div>
        </div>
      </LayoutContained>

      {/* why join the OSSN? */}
      <LayoutContained>
        <BecomeMember />
      </LayoutContained>

      {/* Organizations */}
      <LayoutContained>
        <OrganizationList  organizations={props.data.allOrganizationsJson.edges}/>
      </LayoutContained>

    </BasicLayout>
  )
};

export default IndexPage;

export const query = graphql`
  {
    allOrganizationsJson {
      edges {
        org: node {
        ...organization
  	    }
      }
    }
  }
`;
