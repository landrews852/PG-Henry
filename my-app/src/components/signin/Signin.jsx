import React, { useState } from "react";
import s from "./Signin.module.css";
// import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../footer/Footer";

export default function Signin() {

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');

    const handleChange = (e) => {
        setName(e.target.value);
    };

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleConfPasswordChange = (e) => {
        setConfPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confPassword) {
            alert("Password does not match");
        } else alert("Sign in feature is not ready yet")
    }

    return (
        <div className={s.container}>
            <div className="nav-bar">
                <NavBar />
            </div>
            <form className={s.signinForm} onSubmit={(e) => {handleSubmit(e)}}>
                <div className={s.signinForm__input}>

                <div className={s.inputSignin}>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => {handleChange(e)}} />
                </div>
                <div className={s.inputSignin}>
                    <label>Lastname:</label>
                    <input type="text" value={lastName} onChange={(e) => handleLastNameChange(e)} />
                </div>
                <div className={s.inputSignin}>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e)=> {handleEmailChange(e)}} />
                </div>
                <div className={s.inputSignin}>
                    <label>Birthday:</label>
                    <input type="date" />
                </div>
                <div className={s.inputSignin}>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => {handlePasswordChange(e)}} />
                </div>
                <div className={s.inputSignin}>
                    <label>Confirm Password:</label>
                    <input type="password" value={confPassword} onChange={(e) => {handleConfPasswordChange(e)}} />
                </div>
                <div className={s.inputSignin}>
                <input type="submit" value="Submit"/>
                </div>
                </div>
            </form>
            <Link to="/">
                <button>Back</button>
            </Link>
            <div className='footer'>
                <Footer />
            </div>
        </div>
    )
}