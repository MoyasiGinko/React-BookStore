import React from 'react';
import { Link } from 'react-router-dom';

const NavMenu = () => (
  <nav id="navbar">
    <h1>BOOKSTORE CMS</h1>
    <ul id="menu">
      <li><Link to="/">BOOKS</Link></li>
      <li><Link to="/categories">CATEGORIES</Link></li>
    </ul>
  </nav>
);

export default NavMenu;
