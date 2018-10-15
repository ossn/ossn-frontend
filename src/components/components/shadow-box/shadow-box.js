import React from 'react';
import './shadow-box.scss'

export default (props) => {

  const classes = `${props.className ? props.className : ''} shadow-box`;

  return (
    <div className={classes}>
      {props.children}
    </div>
  )
}




//
//
// // utils
// import { verboseDate } from './../../../utils/dates';
//
// const ShadowBox = (props) => {
//   const content = props.data.map((element, i) => {
//
//     const title = element.title ? element.title : '';
//     const subtitle = element.subtitle ? element.subtitle : '';
//     const date = element.date ? verboseDate(element.date) : '';
//     const url = element.url ? element.url : '';
//     const text = element.text ? element.text : '';
//     // const linkText = element.linkText ? element.linkText : '';
//
//     const classes = `${props.className} shadow-box`;
//     return (
//       <div className={classes} key={i}>
//         {title}     <br />
//         {subtitle}  <br />
//         {text}      <br />
//         {url}       <br />
//         {date}      <br />
//       </div>
//     )
//   });
//
//   return (
//     <>
//     { content }
//     </>
//   )
// };
//
// export default ShadowBox;
