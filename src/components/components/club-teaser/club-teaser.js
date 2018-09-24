import React from 'react';

export default (props) => {
  return (
    <div>  Club teaser
      <div>
        <img src={props.club.image} alt="club" />
      </div>
      <div>
        <div> <h3> {props.club.title} </h3> </div>
        <div> {props.club.subtitle} </div>
        <div>
          <a href="#"> Club Page </a>
        </div>
      </div>
    </div>
  );
}
