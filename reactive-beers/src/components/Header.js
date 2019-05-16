// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <Link to="/">
          <img className="heraderImg" src={window.location.origin + '/images/header.png'} alt="home" />
        </Link>
      </div>
    )
  }
};

export default Header