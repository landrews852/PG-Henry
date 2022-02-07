import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../footer/Footer';
import NavBar from '../NavBar/NavBar';

export default function ShoppingCart() {
  return (
    <div>
      <div className="nav-bar">
        <NavBar />
      </div>
      <div>
        <h1>Shopping Cart</h1>
        <br/>
        <h2>Shopping cart is under construction</h2>
        <br/>
        <Link to="/">
          <button>Back</button>
        </Link>
      </div>
      <div className="nav-bar">
        <Footer />
      </div>
    </div>
  );
}