import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = (props) => (
  <React.Fragment>
    <div className="two">
      Footer！
    </div>
    <div>
      <span>
        <Link to="/">Home</Link>
      </span>
      <span>
        <Link to="/login">Login</Link>
      </span>
    </div>
  </React.Fragment>
)

export default Footer;