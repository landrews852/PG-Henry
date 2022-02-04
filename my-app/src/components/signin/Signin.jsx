import React, { useState } from "react";
import s from "./Signin.module.css";

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
        if (password != confPassword) {
            alert("password Not Match");
        }
    }

    return (
        <div className={s.container}>
            <form onSubmit={(e) => {handleSubmit(e)}}>
                <div>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => {handleChange(e)}} />
                </div>
                <div>
                    <label>Lastname:</label>
                    <input type="text" value={lastName} onChange={(e) => handleLastNameChange(e)} />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e)=> {handleEmailChange(e)}} />
                </div>
                <div>
                    <label>Birthday:</label>
                    <input type="date" />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => {handlePasswordChange(e)}} />
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input type="password" value={confPassword} onChange={(e) => {handleConfPasswordChange(e)}} />
                </div>
                <div>
                <input type="submit" value="Submit"/>
                </div>
            </form>
        </div>
    )
}