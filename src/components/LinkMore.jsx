import React from 'react';
import { Link } from 'react-router-dom';
import './LinkMore.css';

const LinkMore = (props) => {
  return (
    <Link
      to={props.to}
      className="link-more"
    />
  )
};

export default LinkMore;
