// External modules.
import { graphql } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

// Local modules.
import BasicLayout from '../components/layouts/layout-base/layout-base';
import GatsbyConfig from './../../gatsby-config';
import Layout2ColsUnequal from './../components/layouts/layout-2col-unequal/layout-2col-unequal';
import Layout3Col from './../components/layouts/layout-3col/layout-3col';
import LayoutContained from './../components/layouts/layout-contained/layout-contained';
import JoinCta from './../components/components/join-cta/join-cta';
import Shape from './../components/components//shape/shape';
import Banner from './../components/components/banner/banner';

// TODO: Remove and fid title another way.
const About = props => {
  const bannerContent = (
    <div className="title title--large">
      <span> student </span>
      <span> network </span>
      <span> open source </span>
      <span> ossn </span>
    </div>
  );

  return (
    <BasicLayout>
      <Helmet>
        <title>
          {['About', '|', GatsbyConfig.siteMetadata.title].join(' ')}
        </title>
      </Helmet>
      <LayoutContained className="about-us">
        <Banner
          image={props.data.aboutBanner.childImageSharp.fluid}
          text={bannerContent}
          forPage="about"
        />
        <Layout2ColsUnequal secondNarrow horizontalGutters verticalGutters>
          <div>
            <p className="highlighted-text">
              We believe Open Source is the engine that powers innovation.
              That’s why we’re building and supporting a Network of university
              and college Clubs eager to learn about, contribute to and create
              Open Source projects.
            </p>
            <p className="highlighted-text highlighted-text--small">
              Focused on campuses in the US and Canada, our program brings
              students together with mentors, organizations and professionals
              who are actively engaged in advancing Open Source.
            </p>
            <h2 className="title title--x-small">
              What do we want to achieve?
            </h2>
            <p className="text">
              At Mozilla, our mission is to promote openness, innovation and
              opportunity on the Internet. Through our Open Source Student
              Network (OSSN) we aim to encourage students and Clubs to fuel the
              Open Source movement.
            </p>
            <div className="text">
              Our goal is to empower you to:
              <ul>
                <li>
                  Build a safe and inclusive community where you can connect,
                  collaborate and share
                </li>
                <li>
                  Contribute code to meaningful Open Source projects from around
                  the world while advancing your skills
                </li>
                <li>
                  Set up Open Source projects that solve local problems and at
                  the same time foster the global ecosystem
                </li>
                <li>
                  Advocate for software that is open and accessible to all
                </li>
              </ul>
            </div>
          </div>
          <div>
            <JoinCta imageJoinCta={props.data.imageJoinCta} />
          </div>
        </Layout2ColsUnequal>
        <Shape seafoamBlue waveLarge divider />
        <div>
          <div>
            <h2 className="title title--x-small"> What do we do? </h2>
            <p className="text">
              We’ve designed a Network that makes it easy for students to learn
              about and contribute to Open Source on their campuses. We provide
              you with the right activities and assistance, but also with
              motivating challenges:
            </p>
            <Layout3Col horizontalGutters verticalGutters className="text">
              <div>
                We provide your club with many resources that will help you
                develop new skills.
              </div>
              <div>
                We offer ongoing support to members in the form of online 1:1
                discussions, network calls and newsletters.
              </div>
              <div>
                We present you with opportunities that match your interests, let
                you contribute code and therefore improve your expertise.
              </div>
            </Layout3Col>
          </div>
        </div>
        <Shape seafoamBlue waveLarge divider />

        <Layout2ColsUnequal secondNarrow horizontalGutters verticalGutters>
          <div>
            <h2 className="title title--x-small"> Who helps us? </h2>
            <p className="text">
              Open Source is all about community, so we work closely with major
              groups and organizations already in this space like POSSE, GitHub,
              The GNOME Project and Red Hat. Go to our Collaborators page to
              discover who is sharing our mission and to find out how other
              contributors can get involved. We’re always looking for new
              organizations and individuals to drive our Network forward.
            </p>
          </div>
          <div>
            <img src="#" alt="I believe in the open internet" />
          </div>
        </Layout2ColsUnequal>
      </LayoutContained>
    </BasicLayout>
  );
};

export default About;

export const query = graphql`
  {
    aboutBanner: file(relativePath: { eq: "homepage-header_3x.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          base64
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
          originalImg
          originalName
        }
      }
    }

    imageJoinCta: file(
      relativePath: { eq: "join-cta/join-the-network-tall.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 728) {
          base64
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
          originalImg
          originalName
        }
      }
    }
  }
`;
