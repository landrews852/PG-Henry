import React from "react";
import { Link } from "react-router-dom";

export default function Login() {

    return (
        <div>
            <form>
                <div>
                    <input type="email" placeholder="Email..." />
                </div>
                <div>
                    <input type="password" placeholder="Password..." />
                </div>
                <button>Login</button>
            </form>
            if you are not registered <Link to="/signin"> Sign In </Link>
        </div>
    )
}