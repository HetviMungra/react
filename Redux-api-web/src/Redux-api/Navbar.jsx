import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import './Navbar.css'
const Navbar = () => {
  const totalItems = useSelector((state) => state.cart.totalItems);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">FACKSTOR</Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/cart">
          Cart <span className="cart-count">({totalItems})</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

