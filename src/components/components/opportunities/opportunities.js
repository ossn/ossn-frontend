// external modules
import React from 'react';
import { connect } from 'react-redux';

// local modules
import OpportunitiesMemeber from './../opportunities-member/opportunities-member';
import OpportunitiesGuest  from './../opportunities-guest/opportunities-guest';

// utils
import {mapUserToProps} from './../../../utils/redux-utils';


class Opportunties  extends React.Component {


  render() {
    const view = this.props.user.loggedIn
      ? <OpportunitiesMemeber />
      : <OpportunitiesGuest />;

    return (
      <div>
        {view}
      </div>
    )
  }
}

 export default connect(mapUserToProps)(Opportunties);
