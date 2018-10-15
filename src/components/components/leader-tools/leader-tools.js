import React from 'react';
import {graphql} from 'gatsby';

const ToolItem = (props) => {

  const title = props.tool.title;
  const icon = props.tool.icon;

  return (
    <a href="">
      <div> {icon} </div>
      <div> {title} </div>
    </a>
  )
}

export const ToolSet = (props) => {

  const title = props.title;

  const tools = props.items.map((item, i) => {
    return <ToolItem tool={item} key={i} />
    return <div> Tool </div>
  });

 return (
   <div>
     {title}
     <div>
       {tools}
     </div>
   </div>
 )
}
