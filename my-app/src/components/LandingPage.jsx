import React from 'react';
import { Link } from 'react-router-dom';
// import "./LandingPage.css";

export default function LandingPage() {
    return (
        <div className="landing-page">
            <img className="landing-img" src="../Images/Logo Pasteleria.png" alt="img..." />
            <Link to="/home">
                <h2 className="toHome">Tienda</h2>
                <h2 className="toAbout">Sobre nosotros</h2>
                <h2 className="toContact">Contáctate con nosotros</h2>
            </Link>
        </div>
    )}