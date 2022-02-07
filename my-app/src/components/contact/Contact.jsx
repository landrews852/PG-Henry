import React from 'react';
import NavBar from "../navbar/NavBar";
import Footer from '../footer/Footer';
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="nav-bar">
        <NavBar />
      </div>
      <div className="contact-content">
        <h1>Contact</h1>
        <br/>
        <h2>Email:</h2>
        <p>any-email@testing.com</p>
        <br/>
        <h2>Phone:</h2>
        <p>+123-4567-890</p>
        <br/>
        <h2>Address:</h2>
        <p>123 Street Name, City, State, Zip</p>
        <br/>
        <Link to="/">
          <button className="btn-back">Back</button>
        </Link>
      </div>
        <div className='footer'>
          <Footer />
        </div>
    </div>
    );
}