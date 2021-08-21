import React from 'react';
import { useState } from 'react';
import style from '../header/style.module.scss';

export default function Header() {

    const [isVisibled, setIsVisibled] = useState(true);

    function showOrHideMenu() {
        setIsVisibled(!isVisibled);
    }

    return (
        <>
            <nav className={style.header}>
                <div className={style.logo}>

                </div>
                <div className={style.navigation} onClick={showOrHideMenu}>

                </div>
                <div className={style.menu} style={isVisibled ? { display: 'block' } : { display: 'none' }}>
                    <ul>
                        <li>Opção 1</li>
                        <li>Opção 2</li>
                        <li>Opção 3</li>
                    </ul>
                </div>
            </nav>
        </>
    )
}