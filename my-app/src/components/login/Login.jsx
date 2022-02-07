import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../navbar/NavBar";
import Footer from "../footer/Footer";

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
            <form>
                <div>
                    <input type="email" placeholder="Email..." />
                </div>
                <div>
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
            <div className='footer'>
                <Footer />
            </div>
        </div>
    )
}