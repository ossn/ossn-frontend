import React from 'react'
import {Provider} from 'react-redux';
import BasicLayout from './../components/layouts/base/base';

const IndexPage = () => (
  <div>
    <Provider>
      <center>
        <BasicLayout>
          Welcome to a gatsby project!
        </BasicLayout>
      </center>
    </Provider>
  </div>
)

export default IndexPage
