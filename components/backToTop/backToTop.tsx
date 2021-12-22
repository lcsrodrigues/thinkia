import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import style from './style.module.scss';

export default function BackToTop() {
    return (
        <div className={style.btnTopo}>

            <Link to="topo" spy={true} smooth={true} duration={500}>
                <img src="/up-arrow.svg" alt="Voltar ao topo" />
            </Link>
        </div>
    )
}