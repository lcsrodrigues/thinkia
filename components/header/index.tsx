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
            <nav id="topo" className={style.header}>
                <div className={style.logo}>
                    <img src={"/logo-02.png"}></img>
                </div>
                <div className={style.btnMenu} onClick={showOrHideMenu}></div>
                <div className={style.navigation}>
                    <ul>
                        <li>
                            <Link to="empresa" spy={true} smooth={true} duration={1000}>Empresa</Link>
                        </li>
                        <li>
                            <Link to="solucoes" spy={true} smooth={true} duration={1000}>Soluções</Link>
                        </li>
                        <li>
                            <Link to="contato" spy={true} smooth={true} duration={1000}>Contato</Link>
                        </li>
                    </ul>
                </div>
                <div className={style.menu} style={isVisibled ? { display: 'block' } : { display: 'none' }}>
                    <ul>
                        <li>
                            <Link to="empresa" spy={true} smooth={true} duration={1000}>Empresa</Link>
                        </li>
                        <li>
                            <Link to="solucoes" spy={true} smooth={true} duration={1000}>Soluções</Link>
                        </li>
                        <li>
                            <Link to="contato" spy={true} smooth={true} duration={1000}>Contato</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}