import React from 'react';
import Member from './../member/member';

const MemberTeaser = (props) =>{

  const handleClick = () => {
    if (props.onClick) props.onClick(props.id);
  }

  let preview = <div></div>;
  if (props.open) {
    preview =  <Member member={props.member} />
  }

  return (
    <div>
      <div>
        {preview}
      </div>
      <div onClick={handleClick}>
        teaser for: {props.member.username}
      </div>
    </div>
  )
}

export default MemberTeaser;
