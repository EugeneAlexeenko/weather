import React from 'react';
import { Link } from 'react-router-dom';
import './LinkSettings.css';

export default (props) => {
  return (
    <Link
      to={props.to}
      className="link-settings"
    />
  )
};
