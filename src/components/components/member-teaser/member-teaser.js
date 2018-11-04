import React from 'react';
import Member from './../member/member';
import ShadowBox from './../shadow-box/shadow-box';

// utils
import { returnKeyCheck } from './../../../utils/accessibility';

const MemberTeaser = props => {
  const handleClick = () => {
    if (props.onClick) props.onClick(props.id);
  };

  let preview = <div />;
  if (props.open) {
    preview = <Member member={props.member} />;
  }

  return (
    <ShadowBox className={props.className}>
      <div>{preview}</div>
      <div
        onClick={handleClick}
        role="button"
        tabIndex={0}
        onKeyDown={event => {
          returnKeyCheck(event, handleClick);
        }}
      >
        teaser for: {props.member.username}
      </div>
    </ShadowBox>
  );
};
//
// export const MemberTeaserShort = (props) => {
//   return (
//     <div>
//       <img src="#" alt="profile" />
//       <span> {props.title} </span>
//     </div>
//   )
// }

export default MemberTeaser;
