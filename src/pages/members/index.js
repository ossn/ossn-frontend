import React from 'react';

class Member extends React.Component {
  constructor(props) {
    super(props);
    const path = this.props.location.pathname.split('/');
    const username = path[path.length - 1];
    console.log(username);
    this.state = {
      username: username
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

export default Member;
