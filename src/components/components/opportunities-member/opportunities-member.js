import React from 'react';

// local modules
import MemberUpdates from './../member-updates/member-updates';
import MemberTools from './../member-tools/member-tools';
import MemberTrainingResources from './../member-training-resources/member-training-resources';

export default (props) => {
  
  return (
    <div>
      <MemberUpdates announcements={props.announcements} jobs={props.jobs} />
      <MemberTools channels={props.channels} tools={props.tools} />
      <MemberTrainingResources resources={props.resources}/>
    </div>
  );
}
