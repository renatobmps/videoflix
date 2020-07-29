import React from 'react'
import Logo from "../../assets/img/Logo.png";
import './Menu.css'
import ButtonLink from "./components/ButtonLink";

function Menu() {

    return (
        <nav className="Menu">
            <a href='/'>
                <img src={Logo} className="Logo" alt="Videoflix logo" />
            </a>

            <ButtonLink className="ButtonLink" href="/">
                Novo vídeo
            </ButtonLink>
        </nav>
    )
}

export default Menu