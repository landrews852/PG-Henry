import React from "react";
import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import NavBar from '../NavBar/NavBar';
import Footer from '../footer/Footer';
import "./Categories.css";
import bautismo from "../../Images/Torta Bautismo.jpg";
import boda from "../../Images/Torta Boda.jpg";
import selvaNegra from "../../Images/Torta Clasica Selva Negra.jpg";
import corporative from "../../Images/Torta Corporativa.jpg";
import unicornio from "../../Images/Torta Infantil Unicornio.jpg";
import quinceAños from "../../Images/Torta_15_Años.jpg";
import personalizada from "../../Images/Torta Personalizada Lamina Comestible.jpg";


export default function Categories() {
    return (
        <div>
            <div className="nav-bar">
                <NavBar />
            </div>
            <div className="categories">

                <Link to="/bautismo">
                <div className="category-card">
                    <h2>Bautism</h2>
                    <img height="300px" className="categories-img" src={bautismo} alt="img bautismo" />
                </div>
                </Link>

                <Link to="/wedding">
                <div className="category-card">
                    <h2>Wedding</h2>
                    <img height="300px" className="categories-img" src={boda} alt="img bautismo" />
                </div>
                </Link>

                <Link to="/classic">
                    <div className="category-card">
                    <h2>Classic</h2>
                    <img height="300px" className="categories-img" src={selvaNegra} alt="img bautismo" />
                </div>
                </Link>

                <Link to="/corporative">
                <div className="category-card">
                    <h2>Corporative</h2>
                    <img height="300px" max-width="50px" className="categories-img" src={corporative} alt="img bautismo" />
                </div>
                </Link>

                <Link to="/children">
                <div className="category-card">
                    <h2>children's cake</h2>
                    <img height="300px" className="categories-img" src={unicornio} alt="img bautismo" />
                </div>
                </Link>

                <Link to="/fifteen">
                <div className="category-card">
                    <h2>15 years old</h2>
                    <img height="300px" className="categories-img" src={quinceAños} alt="img bautismo" />
                </div>
                </Link>

                <Link to="/personalized">
                <div className="category-card">
                    <h2>Personalized</h2>
                    <img height="300px" className="categories-img" src={personalizada} alt="img bautismo" />
                </div>
                </Link>
            </div>
            <div className='footer'>
                <Footer />
            </div>
        </div>
    );
}
