import React from 'react';
import { useState } from 'react';
import style from './style.module.scss';

export default function Header() {

    const [isVisibled, setIsVisibled] = useState(false);

    function showOrHideMenu() {
        setIsVisibled(!isVisibled);
    }

    return (
        <>
            <nav className={style.header}>
                <div className={style.logo}>
                    <img src={"/logo-02.png"}></img>
                </div>
                <div className={style.btnMenu} onClick={showOrHideMenu}></div>
                <div className={style.navigation}>
                    <ul>
                        <li>Empresa</li>
                        <li>Soluções</li>
                        <li>Contato</li>
                    </ul>
                </div>
                <div className={style.menu} style={isVisibled ? { display: 'block' } : { display: 'none' }}>
                    <ul>
                    <li>Empresa</li>
                        <li>Soluções</li>
                        <li>Contato</li>
                    </ul>
                </div>
            </nav>
        </>
    )
}