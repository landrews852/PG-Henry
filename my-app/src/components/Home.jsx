import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import NavBar from './NavBar/NavBar';
import SearchBar from './searchbar/SearchBar';
import Footer from './footer/Footer';
import './Home.css';
import Categories from './Category/Categories';
import Slider from './slider/Slider';
import { getProducts, getCategories, filterByCategories } from '../redux/Actions';
import Card from './Category/Card';


export default function Home() {

  const dispatch = useDispatch()
  
  const products = useSelector(state => state.productos)
  const categories = useSelector(state => state.categories)
  
  useEffect(() => {
    // console.log(categories);
    dispatch(getCategories())
  }, [dispatch])
  
  useEffect(() => {
    // console.log(products)
    dispatch(getProducts())
  }, [dispatch])

  function handleFilterCategories(e) {
    dispatch(filterByCategories(e.target.value));
    // setCurrentPage(1);
  }

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
      {/* <Slider/> */}
      </div>
      <br/>
      <div className="select_container">
        <label className="label">Categories filter: </label>
        <select className="filter-categories" name="categories" onChange={handleFilterCategories}>
          <option disabled>Select an option:</option>
          <option hidden>Select an option</option>
            {categories && categories.length > 0 ? categories.map(mp => (
              <option key={mp} value={mp} >{mp}</option>
              )) : null}
        </select>
      </div>
      <div>
        {products && products.length > 0 ? products.map(e => <Card/>) : null}
      </div>
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