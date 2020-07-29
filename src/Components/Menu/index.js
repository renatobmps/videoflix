import React from 'react'
import Logo from "../../assets/img/Logo.png";
import './Menu.css'

function Menu() {

    return (
        <nav className="Menu">
            <a href='/'>
                <img src={Logo} className="Logo" alt="Videoflix logo" />
            </a>
        </nav>
    )
}

export default Menu