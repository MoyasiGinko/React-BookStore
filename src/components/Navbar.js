import React from 'react';
import { Link } from 'react-router-dom';
import maskImg from '../assets/mask.png';
import '../styles/nav.css';

const NavMenu = () => (
  <div className="panel-bg">
    <nav id="navbar">
      <span className="Bookstore-CMS Text-Style-3">BOOKSTORE CMS</span>
      <span className="BOOKS Text-Style-6">
        <Link to="/">BOOKS</Link>
      </span>
      <span className="CATEGORIES Text-Style-6">
        <Link to="/categories">CATEGORIES</Link>
      </span>
      <span className="Oval">
        <img className="Mask" src={maskImg} alt="profile-icon" />
      </span>
    </nav>
  </div>
);

export default NavMenu;
