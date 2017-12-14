import React from 'react';
import { Link } from 'react-router-dom';
import './LinkReturn.css';

export default (props) => {
  return (
    <Link
      to={props.to}
      className="link-return"
    />
  )
};
