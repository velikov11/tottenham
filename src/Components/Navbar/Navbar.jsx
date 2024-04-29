import React from "react"
import "./Navbar.css"
import logo from "../../assets/Tottenham-Hotspur-FC-Logo.png"

const Navbar = () => {
    return (
        <div className="navbar">
            <img className="logo" src={logo} alt="logo" />
            <ul className="nav-menu">
            <li>Начална страница</li>
            <li>Продукти</li>
            <li>История</li>
            <li>Контакти</li>
            </ul>
            <div className="nav-sign">Влез</div>
            <div className="nav-sign">Регистрирай се</div>
        </div>
    )
}

export default Navbar;