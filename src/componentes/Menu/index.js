import React from 'react';
import Logo from '../../assests/imgs/Logo.png';
import './Menu.css';
import Button from '../Button'
//import ButtonLink from '../../componentes/Menu/ButtonLink'

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
            <img className="Logo" src={Logo} alt="GokaiFlix logo" />

            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo Vídeo

            </Button>
        </nav>
            

        

    );
}

export default Menu;