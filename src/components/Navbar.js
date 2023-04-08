import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <h1 className="montserat">Bookstore CMS</h1>
    <div className="nav-links">
      <Link className="bk-cat-link montserat normal" to="/">Books</Link>
      <Link className="bk-cat-link montserat normal" to="/categories">Categories</Link>
    </div>
    <div className="logo">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"><path d="M480.022 563.384q-57.464 0-94.319-36.834-36.856-36.833-36.856-94.297 0-57.848 36.834-94.511 36.833-36.664 94.297-36.664t94.319 36.641q36.856 36.641 36.856 94.49 0 57.464-36.834 94.319-36.833 36.856-94.297 36.856ZM182.771 864.306V790.23q0-32.211 16.919-55.706 16.92-23.495 44.04-36.107 62.823-27.627 120.777-41.964 57.955-14.337 115.499-14.337t115.23 14.384q57.686 14.385 120.624 42.064 27.556 12.451 44.463 36.026 16.906 23.575 16.906 55.882v73.834H182.771Z" /></svg>
    </div>
  </nav>
);
export default Navbar;
