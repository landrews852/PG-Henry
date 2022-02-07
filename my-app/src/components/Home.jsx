import React from 'react';
// import { Link } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import NavBar from './navbar/NavBar';
import SearchBar from './searchbar/SearchBar';
import Footer from './footer/Footer';
import './Home.css';
import Categories from './Category/Categories';

export default function Home() {
  return (
    <div className="home-container">
      <div className="nav-bar">
        <NavBar />
      </div>
      <div className="home-content">

      <div align="right" className="search-bar">
        <SearchBar />
      </div>
      <h1>Tienda</h1>
      </div>
      <div>
        <Categories />
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </div>
)
}