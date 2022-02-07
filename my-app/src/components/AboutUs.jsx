import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './navbar/NavBar';
import Footer from './footer/Footer';

export default function AboutUs() {
  return (
    <div>
      <div className="nav-bar">
        <NavBar />
      </div>
      <div className='about-text'>
        <h2>About Us</h2>
        <br/>
        <h3>We are a team of developers who are passionate about web development</h3>
      </div>
      <Link to="/">
        <button>Back</button>
      </Link>
      <div className='footer'>
        <Footer />
      </div>
    </div>
  )
}