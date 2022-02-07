import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NavBar from './NavBar/NavBar';
import SearchBar from './searchbar/SearchBar';
import Footer from './footer/Footer';
import './Home.css';
import {getProducts} from '../redux/Actions';

export default function Home() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts())
},[dispatch]);

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
      <div className='footer'>
        <Footer />
      </div>
    </div>
)
};