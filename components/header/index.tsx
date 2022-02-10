import React from 'react';
import { useState } from 'react';
import style from './style.module.scss';
import { Link, animateScroll as scroll } from "react-scroll";

export default function Header() {

    const [isVisibled, setIsVisibled] = useState(false);

    function showOrHideMenu() {
        setIsVisibled(!isVisibled);
    }

    return (
        <>
            <nav className={style.header} id="topo">
                <div className={style.logo}>
                    <img src={"/logo-01.png"}></img>
                </div>
                <div className={style.btnMenu} onClick={showOrHideMenu}></div>
                <div className={style.navigation}>
                    <ul>
                        <li>
                            <Link to="parceiros" spy={true} smooth={true} duration={1000}>Parceiros de Negócios</Link>
                        </li>
                        <li>
                            <Link to="contato" spy={true} smooth={true} duration={1000}>Fique por dentro</Link>
                        </li>
                        <li>
                            <Link to="solucoes" spy={true} smooth={true} duration={1000}>Soluções</Link>
                        </li>
                        <li>
                            <Link to="faleConosco" spy={true} smooth={true} duration={1000}>Fale Conosco</Link>
                        </li>
                        <li>
                            <Link to="testemunhos" spy={true} smooth={true} duration={1000}>Testemunhos</Link>
                        </li>
                    </ul>
                </div>
                <div className={style.menu} style={isVisibled ? { display: 'block' } : { display: 'none' }}>
                    <ul>
                        <li>
                            <Link to="parceiros" spy={true} smooth={true} duration={1000}>Parceiros de Negócios</Link>
                        </li>
                        <li>
                            <Link to="contato" spy={true} smooth={true} duration={1000}>Fique por dentro</Link>
                        </li>
                        <li>
                            <Link to="solucoes" spy={true} smooth={true} duration={1000}>Soluções</Link>
                        </li>
                        <li>
                            <Link to="faleConosco" spy={true} smooth={true} duration={1000}>Fale Conosco</Link>
                        </li>
                        <li>
                            <Link to="testemunhos" spy={true} smooth={true} duration={1000}>Testemunhos</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}