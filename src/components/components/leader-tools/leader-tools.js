// TODO: remove the linter disable once the image url is fixed.
/* eslint-disable */
import React from 'react';

// Local modules.
import Layout2Col from './../../layouts/layout-2col/layout-2col';
import ShadowBox from './../shadow-box/shadow-box';

const LeaderTool = (props) => {

  const title = props.tool.title;
  const icon = props.tool.icon;
  const url = props.tool.url;

  return (
    <ShadowBox>
      <a href="">
        <div> {icon} </div>
        <div> {title} </div>
      </a>
    </ShadowBox>
  );
};

export const LeaderToolList = (props) => {

  const title = props.title;

  const tools = props.tools.map((tool, i) => {
    return <LeaderTool tool={tool} key={i} />
  });

  return (
    <div>
      {title}
      <div>
        {tools}
      </div>
    </div>
  )
};

export const AllLeaderTools = (props) => {
  const variousTools = props.variousTools;
  const prManagement = props.prManagement;
  const codeOfConduct = props.codeOfConduct;
  const usefulResources = props.usefulResources;

  return (
    <Layout2Col>
      <div>
        <LeaderToolList title="Project Management Tools" tools={prManagement} />
        <LeaderToolList title="Code of conduct" tools={codeOfConduct} />
        <LeaderToolList title="Various tools" tools={variousTools} />
      </div>
      <div>
        <LeaderToolList title="Useful resources running a club"
                        tools={usefulResources} />
      </div>
    </Layout2Col>
  )
};
