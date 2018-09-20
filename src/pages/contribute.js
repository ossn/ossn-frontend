// external modules
import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';

// local modules
import store from './../store';
import BasicLayout from './../components/layouts/base/base';
import ModalBox from './../components/components/next-steps/next-steps';

// Import page title from gatsby config. TODO Remove and fid title another way.
import GatsbyConfig from './../../gatsby-config';

//utils
import {mapUserToProps} from  './../utils/redux-utils';

class  Opportunities extends React.Component {
  constructor() {
    super();
    this.state = {
      modalBox: true
    }
  }

  modalDismiss = ()=> {
    this.setState({modalBox: false});
  }


  render() {
    const snapshot = {...this.state};
    return (
      <BasicLayout>
        <Helmet>
          <title>{['Opportunities', '|', GatsbyConfig.siteMetadata.title].join(" ")}</title>
        </Helmet>

        Opportunities

        {snapshot.modalBox
          ? <ModalBox dismiss={this.modalDismiss} />
          : ''
        }

      </BasicLayout>
    );
  }
};

export default Opportunities;
