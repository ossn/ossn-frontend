import React from 'react';

class Member extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {

    const name = "Alice McKenzie";
    const place = "Planet Earth";
    const description = "this is a description";
    const githubLink = "This is a github link";
    const personal = "this is personal";

    return (
      <div>
        <div>
          <img src="" alt="profile" />
        </div>
        <div> {name} </div>
        <div> {place} </div>
        <div> {description} </div>

        <div> {githubLink} </div>
        <div> {personal} </div>

      </div>
    );
  }
}
