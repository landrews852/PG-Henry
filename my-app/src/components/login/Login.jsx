import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../footer/Footer";
import s from "./Login.module.css";

export default function Login() {

    const handleSubmit = (e) => {
        e.preventDefault();
            alert("Log in feature is not ready yet");
    }

    return (
        <div>
            <div className="nav-bar">
                <NavBar />
            </div>
            <div className={s.container}>
            <form className={s.loginForm}>
                <div className={s.inputLogin}>
                    <label>Email: </label>
                    <input type="email" placeholder="Email..." />
                </div>
                <div className={s.inputLogin}>
                    <label>Password: </label> 
                    <input type="password" placeholder="Password..." />
                </div>
                <button onClick={handleSubmit}>Login</button>
            </form>
            if you are not registered <Link to="/signin"> Sign In </Link>
            <div>
                <Link to="/">
                    <button>Back</button>
                </Link>
            </div>
            </div>
            <div className='footer'>
                <Footer />
            </div>
        </div>
    )
}