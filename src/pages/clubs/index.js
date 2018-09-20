import React from 'react';

class Club extends React.Component {

  constructor(props) {
    super(props);
    const path = this.props.location.pathname.split('/');
    const club = path[path.length - 1];
    this.state = {
      club: club
    }
  }

  render() {
    return (
      <div> this is a club </div>
    )
  }
}

export default Club;
