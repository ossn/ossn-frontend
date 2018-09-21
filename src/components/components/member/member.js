import React from 'react';

class Member extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {

    const name = "------------------------------------";
    const place = this.props.member.name;
    const description = this.props.description;
    const githubLink = this.props.github;
    const personal = "------------------------------------";

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

export default Member;
