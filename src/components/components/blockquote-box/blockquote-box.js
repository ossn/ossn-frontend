// External modules.
import React from 'react';

// Local modules.
import './blockquote-box.scss'

export default (props) => {
  const blockquote = props.blockquote;
  const author = props.author;

  return (
    <blockquote>
      <p>{blockquote}</p>
      <footer>
        <cite>{author}</cite>
      </footer>
    </blockquote>
  )
}

