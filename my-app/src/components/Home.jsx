import React from 'react';
// import { Link } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import NavBar from './NavBar/NavBar';
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

      <div className="search-bar">
        <SearchBar />
      </div>
      <br/>
      <h1>Aqui va el slider</h1>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <div>
        <h2>Testimonio de clientes</h2>
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </div>
)
}