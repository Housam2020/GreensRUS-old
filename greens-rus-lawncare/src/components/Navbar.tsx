import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav style={{ padding: '1rem', background: '#dff0d8' }}>
      <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
      <Link to="/services" style={{ marginRight: '1rem' }}>Services</Link>
      <Link to="/products" style={{ marginRight: '1rem' }}>Products</Link>
      <Link to="/about" style={{ marginRight: '1rem' }}>About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
};

export default Navbar;
