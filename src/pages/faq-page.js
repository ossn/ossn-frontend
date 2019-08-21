import "../components/pages-styles/faq-page.scss";

import React, { memo } from "react";
import { Helmet } from "react-helmet";

import BasicLayout from "../components/layouts/layout-base/layout-base";
import GatsbyConfig from "./../../gatsby-config";
import FaqGroup from "./../components/components/faq-group/faq-group";
import Layout2Cols from "./../components/layouts/layout-2col/layout-2col";
import LayoutContained from "./../components/layouts/layout-contained/layout-contained";
import Shape from "./../components/components/shape/shape";
import FaqItem from "./../components/components/faq-item/faq-item";
import { PlainHeader } from "./../components/components/plain-header/plain-header";

/**
 * Faq page.
 */
const Questions = props => {
  return (
    <BasicLayout location={props.location}>
      <Helmet>
        <title>{`FAQ | ${GatsbyConfig.siteMetadata.title}`}</title>
      </Helmet>

      <LayoutContained>
        <PlainHeader
          title="FAQ"
          subtitle="The most Frequently Asked Questions on OSSN. And their answers!"
        />

        <Layout2Cols horizontalGutters>
          {/*First column*/}
          <div>
            <FaqGroup id="faq-group-1" header="Joining OSSN">
              <FaqItem
                header="When is my club officially recognized as a part of the Open Source Student Network?  "
                id="faq-2-item-1"
              >
                In order to have your club be formally recognized at least one
                club leader must fill the Club&#39;s registration form{" "}
                <a href="http://eepurl.com/glb1Nj">here.</a> Then, in the next
                24 hours, you will receive a confirmation that your club is
                registered and a Club profile will automatically be created on
                the website. It&#39;s time to invite your Club&#39;s members to
                join the network and the Club!
              </FaqItem>
              <FaqItem
                header="What if I don’t have an existing club, and want to start a new Open Source Student Club?"
                id="faq-1-item-1"
              >
                If you don’t have an established club but would like to start an
                open source club you are welcome to apply. Fill out the
                registration form and indicate that you’re starting a new club.
                We’ll send you materials and tips for launching a successful
                club.
              </FaqItem>
            </FaqGroup>
          </div>
          {/*Second column*/}
          <div>
            <FaqGroup id="faq-group-2" header="Your Club and OSSN">
              <FaqItem
                header="What type of activities should my club do? "
                id="faq-2-item-2"
              >
                The goal of the program is to support your club to learn about
                and contribute to open source projects. You can run any of the{" "}
                <a href="/contribute">
                  activities listed in the relevant page on the website{" "}
                </a>
                or other activities related to open source. If you have an idea
                for an activity which will advance the mission you can propose
                it on our Slack instance.
              </FaqItem>
              <FaqItem
                header="Where can I request swag or budget for my club? "
                id="faq-2-item-3"
              >
                Budget and swag are not yet available through the Open Source
                Student Network program. However we recommend checking your
                University&#39;s website or student union to find out about
                whether funding is available through your school.
              </FaqItem>
              <FaqItem
                header="Do we have to change our name or call ourselves a “Mozilla” Club to be part of the network? "
                id="faq-2-item-4"
              >
                You do not have to have “Mozilla” in your club name to
                participate. In fact, we encourage you to keep your name focused
                on the purpose of your club. However we do require that clubs
                registered with the open source student network have a focus on
                learning about, contributing to, or creating open source
                projects.
              </FaqItem>
              <FaqItem
                header="Can there be multiple clubs registered with Mozilla on the same campus? "
                id="faq-2-item-5"
              >
                Yes, multiple technical clubs from the same campus can register
                with Mozilla. For example, on one campus the Women in Computing
                Club, and an Open Source CS Club, may both be part of the
                network.
              </FaqItem>
              <FaqItem
                header="Some clubs would rather exist only virtually, is this possible? "
                id="faq-2-item-6"
              >
                No. Part of the definition of a club is that they meet regularly
                in person, while some activities will definitely be virtual, in
                order to be recognized as a part of the network they need to be
                primarily based on a real life campus.
              </FaqItem>
              <FaqItem
                header="What if I’m not a university student but would like to register or join a club? "
                id="faq-2-item-7"
              >
                If you are passionate about open source and are interested in
                finding more ways to contribute we encourage you to use all of
                the resources freely available on the site to get started
                contributing locally. However only Clubs or Societies based on a
                University or Post-Secondary campus will be officially
                recognized by the program.
              </FaqItem>
              <FaqItem
                header="What if I’m not based in the US but would like to register my club? "
                id="faq-2-item-8"
              >
                This program is currently focused exclusively on the US to test
                a more focused regional approach to empowering and connecting
                clubs with a discrete focus on making technical contributions to
                open source projects. In the meantime we’re continuing to
                support the work of our non-US student clubs through the{" "}
                <a href="https://campus.mozilla.community/">
                  Campus Clubs program
                </a>
                . To learn about the global campus program visit -
                campus.mozilla.community.
              </FaqItem>
            </FaqGroup>
          </div>
        </Layout2Cols>

        <div className="faq__footer">
          <h2 className="faq__footer-title"> Have more questions? </h2>
          <p className="faq__footer-text title title--x-small">
            Cool! Reach out to us on{" "}
            <a href="https://mossn.slack.com/">Slack</a> or{" "}
            <a href="https://twitter.com/ossn_club">Twitter</a>
            <Shape waveLarge sunnyYellow className="faq__footer-shape" />
          </p>
        </div>
      </LayoutContained>
    </BasicLayout>
  );
};

export default memo(Questions);
