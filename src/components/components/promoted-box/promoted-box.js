import React from 'react';
import Shape from './../shape/shape';

export default props => {
  return (
    <div className="promoted-box">
      <div className="promoted-box__inner">
        <h3 className="promoted-box__title"> Next steps after signing up </h3>
        <ol className="promoted-box__content">
          <li className="promoted-box__item">
            Explore contribution opportunities
          </li>
          <li className="promoted-box__item"> Reach out to us </li>
          <li className="promoted-box__item">
            Explore available interships/jobs
          </li>
          <li className="promoted-box__item">Check the latest announcements</li>
        </ol>
      </div>
      <Shape className="promoted-box__shape" triangle sunnyYellow />
    </div>
  );
};
