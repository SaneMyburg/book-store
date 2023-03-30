import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <h1>Bookstore CMS</h1>
    <Link to="/">Books</Link>
    <Link to="/categories">Categories</Link>
  </nav>
);
export default Navbar;
