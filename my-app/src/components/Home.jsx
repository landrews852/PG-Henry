import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchBar from './SearchBar';


return (
  <div className="home-container">
    <div className="nav-bar">
      <NavBar />
    </div>
    <div className="search-bar">
      <SearchBar />
    </div>
  </div>
)