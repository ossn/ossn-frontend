import React from 'react';

// Styles
import './../../base-styles/base/normalize.scss'
import './layout-2col.scss'


const Layout2Col = (props) => {

  const baseClass = 'layout-2col';

  const children = React.Children.map(props.children, (child) => {
    const className = `${child.props.className} ${baseClass}__col`;
    const props = { ...child.props, className: className };
    const newChild = React.cloneElement(child, props);
    return newChild;
  });

  let classes = [baseClass ];
  if (props.horizontalGutters) classes.push(`${baseClass}--with-horizontal-gutters`);
  if (props.verticalGutters) classes.push(`${baseClass}--with-vertical-gutters`);
  const classString = classes.join(" ")

  return (
    <div className={classString}>
      {children}
     </div>
  )
}



// class Layout2Cols extends React.Component {
//
//   constructor(props) {
//     super(props);
//     this.baseClass = 'layout-2col';
//     this.items = React.Children.map(this.props.children, (child) => {
//       const className = `${child.props.className} ${this.baseClass}__col`;
//       const props = { ...child.props, className: className };
//       const newChild = React.cloneElement(child, props);
//       return newChild;
//     });
//   }
//
//   render() {
//     let classes = [this.baseClass ];
//     if (this.props.horizontalGutters) classes.push(`${this.baseClass}--with-horizontal-gutters`);
//     if (this.props.verticalGutters) classes.push(`${this.baseClass}--with-vertical-gutters`);
//     const classString = classes.join(" ")
//
//     return(
//     <div className={classString}>
//          {this.items}
//       </div>
//     );
//   }
// }

export default Layout2Col;
