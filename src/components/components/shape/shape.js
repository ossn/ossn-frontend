/*
 Shape.
 */
import React, { memo } from 'react';

// styles
import './shape.scss';

const Shape = props => {
  let baseClass = ['shape'];

  let shapeSvg = '';
  let classes = [baseClass];
  // Css shapes.
  if (props.triangle) classes.push(`${baseClass}--triangle`);
  if (props.triangle2) classes.push(`${baseClass}--triangle-2`);
  if (props.circle) classes.push(`${baseClass}--circle`);
  if (props.square) classes.push(`${baseClass}--square`);
  // Svg shapes.
  if (props.waveLarge) {
    classes.push(`${baseClass}--wave-large`);
    shapeSvg = (
      <svg
        className="shape__svg"
        xmlns="http://www.w3.org/2000/svg"
        width="58"
        height="20"
        viewBox="0 0 58 20"
      >
        <polyline
          className="shape__svg-inner"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="3"
          points="0.7 13.4 7.8 6.4 14.9 13.5 22 6.4 29 13.5 36.1 6.5 43.1 13.6 50.2 6.5 57.3 13.6 "
        />
      </svg>
    );
  }
  if (props.wave) {
    classes.push(`${baseClass}--wave`);
    shapeSvg = (
      <svg
        className="shape__svg"
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        width="22"
        height="22"
        viewBox="0 0 22 22"
        enableBackground="new 0 0 22 22"
        xmlSpace="preserve"
      >
        <polyline
          className="shape__svg-inner"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="4"
          points="2 22 2 12 12 12 12 2 22 2 "
        />
      </svg>
    );
  }
  if (props.waves) {
    classes.push(`${baseClass}--waves`);
    shapeSvg = (
      <svg
        className="shape__svg"
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        width="139"
        height="87"
        viewBox="0 0 139 87"
        enableBackground="new 0 0 139 87"
        xmlSpace="preserve"
      >
        <path
          className="shape__svg-inner"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="10"
          strokeOpacity="0.3"
          d="M4 15.2c2.7-2.7 5.5-5.3 8.2-7.2C15 6.1 17.7 5 20.5 5s5.5 1.1 8.2 3c2.7 1.9 5.5 4.6 8.2 7.2 2.7 2.7 5.5 5.3 8.2 7.2 2.7 1.9 5.5 3 8.2 3s5.5-1.1 8.2-3c2.7-1.9 5.5-4.6 8.2-7.2 2.7-2.7 5.5-5.3 8.2-7.2C80.8 6.1 83.5 5 86.3 5s5.5 1.1 8.2 3c2.7 1.9 5.5 4.6 8.2 7.2 2.7 2.7 5.5 5.3 8.2 7.2 2.7 1.9 5.5 3 8.2 3s5.5-1.1 8.2-3c2.7-1.9 5.5-4.6 8.2-7.2M4 45.2c2.7-2.7 5.5-5.3 8.2-7.2C15 36.1 17.7 35 20.5 35s5.5 1.1 8.2 3c2.7 1.9 5.5 4.6 8.2 7.2 2.7 2.7 5.5 5.3 8.2 7.2 2.7 1.9 5.5 3 8.2 3s5.5-1.1 8.2-3c2.7-1.9 5.5-4.6 8.2-7.2 2.7-2.7 5.5-5.3 8.2-7.2C80.8 36.1 83.5 35 86.3 35s5.5 1.1 8.2 3c2.7 1.9 5.5 4.6 8.2 7.2 2.7 2.7 5.5 5.3 8.2 7.2 2.7 1.9 5.5 3 8.2 3s5.5-1.1 8.2-3c2.7-1.9 5.5-4.6 8.2-7.2M4 72.2c2.7-2.7 5.5-5.3 8.2-7.2C15 63.1 17.7 62 20.5 62s5.5 1.1 8.2 3c2.7 1.9 5.5 4.6 8.2 7.2 2.7 2.7 5.5 5.3 8.2 7.2 2.7 1.9 5.5 3 8.2 3s5.5-1.1 8.2-3c2.7-1.9 5.5-4.6 8.2-7.2 2.7-2.7 5.5-5.3 8.2-7.2C80.8 63.1 83.5 62 86.3 62s5.5 1.1 8.2 3c2.7 1.9 5.5 4.6 8.2 7.2 2.7 2.7 5.5 5.3 8.2 7.2 2.7 1.9 5.5 3 8.2 3s5.5-1.1 8.2-3c2.7-1.9 5.5-4.6 8.2-7.2"
        />
      </svg>
    );
  }
  if (props.cube) {
    classes.push(`${baseClass}--cube`);
    shapeSvg = (
      <svg
        className="shape__svg"
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        width="63"
        height="57"
        viewBox="0 0 63 57"
        enableBackground="new 0 0 63 57"
        xmlSpace="preserve"
      >
        <path
          className="shape__svg-inner"
          fill="#FFFFFF"
          d="M11.9 52.9c0.1 0.1 0.1 0.2 0.2 0.2 0.1 0.1 0.2 0.1 0.2 0.1 0.1 0 0.2 0.1 0.2 0.1 0 0 10 1 29.9 3 0.3 0 0.6-0.1 0.8-0.3l19-20.8c0.1-0.1 0.1-0.1 0.1-0.2 0.1-0.1 0.1-0.2 0.1-0.2 0-0.2 0-0.2 0-0.3 0-0.2 0-0.2-0.1-0.3L51.5 4.2c-0.1-0.4-0.4-0.6-0.8-0.7L21.8 0.2c-0.2 0-0.3 0-0.5 0.1 -0.1 0-0.2 0.1-0.3 0.2C21 0.5 14.3 7.5 1 21.6c-0.3 0.3-0.3 0.7-0.2 1l10.9 30.1C11.8 52.8 11.8 52.9 11.9 52.9zM42.1 54.3L14.8 51.6l18.2-19.3 26.4 3L42.1 54.3zM60 33.4l-26.7-3.1 -10.2-28L49.9 5.4 60 33.4zM2.9 22.5L21.3 3l10.2 28L13.1 50.5 2.9 22.5z"
        />
      </svg>
    );
  }
  // Color variants.
  if (props.seafoamBlue) classes.push(`${baseClass}--seafoam-blue`);
  if (props.sunnyYellow) classes.push(`${baseClass}--sunny-yellow`);
  if (props.darkSkyBlue) classes.push(`${baseClass}--dark-sky-blue`);
  if (props.lightNavy) classes.push(`${baseClass}--light-navy`);

  if (props.className) classes.push(props.className);
  const classString = classes.join(' ');

  return <span className={classString}>{shapeSvg}</span>;
};

export default memo(Shape);
