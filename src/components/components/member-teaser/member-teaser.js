import React from 'react';
import Member from './../member/member';
import ShadowBox from './../shadow-box/shadow-box';

const MemberTeaser = (props) =>{

  const handleClick = () => {
    if (props.onClick) props.onClick(props.id);
  }

  let preview = <div></div>;
  if (props.open) {
    preview =  <Member member={props.member} />
  }

  return (
    <ShadowBox className={props.className}>
      <div>
        {preview}
      </div>
      <div onClick={handleClick}>
        teaser for: {props.member.username}
      </div>
    </ShadowBox>
  )
}

export default MemberTeaser;
