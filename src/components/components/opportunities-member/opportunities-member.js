/*
  Wraps the contribute page as shown to a user with the member role and add
  some content at the upper section.

  props:
   skipTitle, if present, the component does not add extra data.
   announcements, the list of the announcements objects.
   jobs, the list of the job objects.
   resources, the list of the resources objects.

*/
import React from 'react';

// Local modules.
import MemberUpdates from './../member-updates/member-updates';
import MemberTools from './../member-tools/member-tools';
import MemberTrainingResources from './../member-training-resources/member-training-resources';
import LayoutContained from './../../layouts/layout-contained/layout-contained';

// styles
import './opportunities-member.scss';

// A simple wrapper for the upper section i.e. the title, description and propmoted box.
// UpperSection is the place holder for
const UpperSection = props => {
  return (
    <LayoutContained>
      <h1 className="title title--m-small opportunities-member__title">
        Opportunities
      </h1>

      <div className="opportunities-member__info">
        <p className="opportunities-member__text highlighted-text highlighted-text--intense">
          We bring you the best opportunities to contribute code. Practice your
          skills by taking part in compelling Open Source projects that match
          your interests!
        </p>
        <div className="promoted-box">
          <h3 className="promoted-box__title"> Next steps after signing up </h3>
          <ol className="promoted-box__content">
            <li className="promoted-box__item">
              {' '}
              Explore contribution opportunities{' '}
            </li>
            <li className="promoted-box__item"> Reach out to us </li>
            <li className="promoted-box__item">
              {' '}
              Explore available interships/jobs{' '}
            </li>
            <li className="promoted-box__item">
              {' '}
              Check the latest announcements{' '}
            </li>
          </ol>
        </div>
      </div>
    </LayoutContained>
  );
};

export default props => {
  // placeholder for the UpperSection compoenent.
  const upperSection = props.skipTitle ? '' : <UpperSection />;

  return (
    <div className="opportunities-member">
      {upperSection}
      <MemberUpdates announcements={props.announcements} jobs={props.jobs} />
      <MemberTools channels={props.channels} tools={props.tools} />
      <MemberTrainingResources resources={props.resources} />
    </div>
  );
};
