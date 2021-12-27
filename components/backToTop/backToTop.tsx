import * as React from 'react';
import style from './style.module.scss';
import { Link, animateScroll as scroll } from "react-scroll";

export default function BackToTop () {
    return (
        <div className={style.btnTop}>
            <Link to="topo" spy={true} smooth={true} offset={-70} duration={500}>
                <img src="favicon.ico" alt="Voltar ao topo" />
            </Link>
        </div>
    )
}