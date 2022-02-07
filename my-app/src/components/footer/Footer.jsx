import React from "react";
import Logo from '../../Images/Logo_Pasteleria_T.png';
import s from "./Footer.module.css"
import { Link } from "react-router-dom";

export default function Footer() {

    return (
        <div className={s.container}>
            <ul className={s.lista}>
                <Link to="/contact">
                    <li className={s.li}><a className={s.a}>Contact</a> </li>
                </Link>
                <li className={s.li}><a href="https://www.instagram.com/" className={s.a}>Instagram</a></li>
                <li className={s.li}><a href="https://www.facebook.com/" className={s.a}> Facebook</a></li>
            </ul>
            <div>
                <img src={Logo} alt="logo" width={100} height={100} />
            </div>
        </div>
    )
}