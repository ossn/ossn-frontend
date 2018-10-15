import React from 'react';

// local modules
import Layout2Col from './../../layouts/layout-2col/layout-2col';
import ShadowBox from './../shadow-box/shadow-box';


const TrainingResource = (props) => {
  return (
    <ShadowBox>
      This is a training resource
    </ShadowBox>
  )
}



export default (props) => {
  return (
    <Layout2Col>
      <div>
        This is the training resources section.
      </div>
    </Layout2Col>
  );
}


// TODO: export training resources query
